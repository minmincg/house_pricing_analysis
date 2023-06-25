const URL = "http://127.0.0.1:5000/unique/";


function setUp(section,variable){
    d3.json(URL+variable).then((data)=>{
        d3.select(`#${section} select#${variable}`).append('option').attr("value", "All").text("All");
        data.forEach(one=>{
            d3.select(`select#${variable}`).append('option').attr("value", one).text(one);
        })
    });
}

function setUpFromList(section,variable,texts,values){
    d3.select(`#${section} select#${variable}`).append('option').attr("value", "All").text("All");
    for(let i=0;i<texts.length;i++){
        d3.select(`select#${variable}`).append('option').attr("value", values[i]).text(texts[i]);
    }
}


setUp("filters","zipcode");
setUp("filters","homeType");
setUpFromList("filters","stories",["One-floor plan"],[1]);
setUpFromList("filters","baths",["1.5+","2+","3+"],[1.5,2,3]);
setUpFromList("filters","garage",["1+","2+","3+"],[1,2,3]);
setUpFromList("filters","bedrooms",["2+","3+"],[2,3]);

