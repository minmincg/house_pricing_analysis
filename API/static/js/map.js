var map = L.map('map',{zoomControl:false}).setView([30.3077609,-97.7557424],12);
var markers;
new L.Control.Zoom({ position: 'topright' }).addTo(map);
mapQuery();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function mapQuery(queries=""){
    let URL_geo;
    if (queries==""){
        URL_geo="http://127.0.0.1:5000/geo";
    } else {
        let query="";
        queries.forEach(one=>{
            query=query+one+"_"
        })
        URL_geo=`http://127.0.0.1:5000/geoquery/${query}`
    };
    d3.json(URL_geo).then(data=>{
    let features=data["features"];
    markers=L.layerGroup();
        for (let i=0;i<features.length;i++) {
            let lon=features[i]["geometry"]["coordinates"][0];
            let lat=features[i]["geometry"]["coordinates"][1];
            let properties=features[i]["properties"];
            let popupContent= `\
            <h2 style="color:#16697A">${properties.address} (${properties["zipcode"]})</h2>\
            <div style="text-align:center;font-size:14px">\
            <b>Price:</b> $${properties["latestPrice"].toLocaleString("en-US")}<br>\
            <b>Home Type:</b> ${properties["homeType"]}<br>\
            <b>Stories:</b> ${properties["numOfStories"]}<br>\
            <b>Bathrooms:</b> ${properties["numOfBathrooms"]}<br>\
            <b>Bedrooms:</b> ${properties["numOfBedrooms"]}<br>\
            <b>Living Space:</b> ${properties["livingAreaSqFt"].toLocaleString("en-US")}ft²<br>\
            <b>Lot Size:</b> ${properties["lotSizeSqFt"].toLocaleString("en-US")}ft²</div>\
            `
            L.circle([lat,lon],{"radius":20,"color":"#16697A"}).bindPopup(popupContent).addTo(markers);
        };
        markers.addTo(map);
    });
};



function clearMap(){
    map.removeLayer(markers);
};
