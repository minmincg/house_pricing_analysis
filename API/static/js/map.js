var map = L.map('map').setView([30.3077609,-97.7557424],13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


d3.json("http://127.0.0.1:5000/geo").then(data=>{
   let features=data["features"]
    for (let i=0;i<features.length;i++) {
        let lon=features[i]["geometry"]["coordinates"][0];
        let lat=features[i]["geometry"]["coordinates"][1];
        console.log(lon,lat)
        L.circle([lat,lon],{radius:100}).addTo(map);
    }
})