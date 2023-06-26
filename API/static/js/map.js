var map = L.map('map',{zoomControl:false}).setView([30.3077609,-97.7557424],12);


new L.Control.Zoom({ position: 'topright' }).addTo(map);
mapQuery();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var markers;
function mapQuery(queries=""){
    let URL_geo;
    if (queries==""){
        URL_geo="http://127.0.0.1:5000/geo";
    } else {
        let query="";
        queries.forEach(one=>{
            query=query+one+"_"
        })
        URL_geo=`http://127.0.0.1:5000/geoquery/${query}`;
        console.log(URL_geo);
    };
    d3.json(URL_geo).then(data=>{
    let features=data["features"];
    markers=L.layerGroup();
        console.log(data);
        for (let i=0;i<features.length;i++) {
            let lon=features[i]["geometry"]["coordinates"][0];
            let lat=features[i]["geometry"]["coordinates"][1];
            let properties=features[i]["properties"];
            
            let marketvalue;
            if (properties["difference_nn"]<=0){
                marketvalue=`<span style="color:green;">▼ $${(-properties["difference_nn"]).toLocaleString("en-US")} cheaper<br>than our estimate: $${(properties["predict_nn"]).toLocaleString("en-US")}<br></span>`
            } else {
                marketvalue=`<span style="color:red;">▲ $${properties["difference_nn"].toLocaleString("en-US")} more expensive<br>than our estimate: $${(properties["predict_nn"]).toLocaleString("en-US")}<br></span>`
                
            }
            let popupContent=`<div style="text-align:center">
            <span style="color:#16697A;font-size:18px;font-weight:bold">${properties["address"]}, ${properties["zipcode"]}</span><br>
            <span style="color:#16697A;font-size:14px;font-weight:bold">$${properties["latestPrice"].toLocaleString("en-US")}</span><br>
            
            ${properties["numOfBedrooms"]} bd, ${properties["numOfBathrooms"]} ba,
            ${properties["livingAreaSqFt"].toLocaleString("en-US")}ft²<br>
            ${marketvalue}
            </div>
            `
            let colors=["#ff4824","#f39227","#e6dc29","#92d746","#3dd162"];
            // colors=["#16587a","#22404f","#2c2526","#581d23","#821621"]
            let percentage=properties["percent_change_nn"]
            let markerColor
            switch(true){
                case (percentage>=50):
                    markerColor=colors[0];
                    break;
                case (percentage>20):
                    markerColor=colors[1];
                    break;
                case (percentage>-20):
                    markerColor=colors[2];
                    break;
                case (percentage>-50):
                    markerColor=colors[3];
                    break;
                case (percentage<=-50):
                    markerColor=colors[4];
                    break;                
            }
            colors=["#ff4824","#2156a5","#75ab38"]
            colors=["#ff4824","#16597a","#84ae36"]
            switch(true){
                case (percentage>=20):
                    markerColor=colors[0];
                    break;
                case (percentage>=-20):
                    markerColor=colors[1];
                    break;
                case (percentage<-20):
                    markerColor=colors[2];
                    break;
            }
    
            L.circle([lat,lon],{"radius":30,"color":markerColor}).bindPopup(popupContent).addTo(markers);
        };
        markers.addTo(map);
    });
};


var markerPin;
var isUserMarker=false;
function userPin(lat,lon){
    if (isUserMarker==true){
        map.removeLayer(markerPin);
        isUserMarker=false;
    };
    if (isUserMarker==false){
    let start=[30.287235,-97.742271]
    lat.value=start[0];
    lon.value=start[1];
    markerPin=L.marker(start,{draggable:'true'}).bindPopup("Drag me").on("dragend",()=>{
        let position = markerPin.getLatLng();
        lat.value=position["lat"].toFixed(6);
        lon.value=position["lng"].toFixed(6);
    });
    map.addLayer(markerPin);
    isUserMarker=true;
    };
}

function clearMap(){
    map.removeLayer(markers);
};
