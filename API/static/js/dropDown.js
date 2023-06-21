const URL = "http://127.0.0.1:5000/unique/";


function setUp(variable){
    d3.json(URL+variable).then((data)=>{
        d3.select(`select#${variable}`).append('option').attr("value", "All").text("All");
        data.forEach(one=>{
            d3.select(`select#${variable}`).append('option').attr("value", one).text(one);
        })
    });
}

function setUpFromList(variable,texts,values){
    d3.select(`select#${variable}`).append('option').attr("value", "All").text("All");
    for(let i=0;i<texts.length;i++){
        d3.select(`select#${variable}`).append('option').attr("value", values[i]).text(texts[i]);
    }
}


setUp("zipcode");
setUp("homeType");
setUpFromList("stories",["One-floor plan"],[1]);
setUpFromList("baths",["1.5+","2+","3+"],[1.5,2,3]);
setUpFromList("garage",["1+","2+","3+"],[1,2,3]);
setUpFromList("bedrooms",["2+","3+"],[2,3]);

