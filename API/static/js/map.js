var map = L.map('map',{zoomControl:false}).setView([30.3077609,-97.7557424],13);

new L.Control.Zoom({ position: 'topright' }).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let URL_geo="http://127.0.0.1:5000/geo"


d3.json(URL_geo).then(data=>{
   let features=data["features"];
    for (let i=0;i<features.length;i++) {
        let lon=features[i]["geometry"]["coordinates"][0];
        let lat=features[i]["geometry"]["coordinates"][1];
        let zip=features[i]["properties"]["zipcode"];
        let address=features[i]["properties"]["Address"];
        // console.log(lon,lat)
        let popupContent= `\
        <h2 style="color:#16697A">${address}</h2>\
        Zipcode: ${zip}<br>\
        Address: ${address}<br>\
        `
        L.circle([lat,lon],{"radius":20,"color":"#16697A"}).bindPopup(popupContent).addTo(map);
    }
})