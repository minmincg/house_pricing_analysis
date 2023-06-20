const URL = "http://127.0.0.1:5000/unique/";


function setUp(variable){
    d3.json(URL+variable).then((data)=>{
        d3.select(`select#${variable}`).append('option').attr("value", "All").text("All");
        data.forEach(one=>{
            d3.select(`select#${variable}`).append('option').attr("value", one).text(one);
        })
    });
}

function setUpFromList(variable,list){
    d3.select(`select#${variable}`).append('option').attr("value", "All").text("All");
    list.forEach(one=>{
        d3.select(`select#${variable}`).append('option').attr("value", one).text(one);
    })
}


setUp("zipcode");
setUp("homeType");
setUpFromList("stories",["1","2","3+"]);
setUpFromList("baths",["1+","1.5+","2+","3+"]);
setUpFromList("garage",["1+","2+","3+"]);
setUpFromList("bedrooms",["1+","2+","3+"]);

