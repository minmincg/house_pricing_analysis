const URL = "http://127.0.0.1:5000/unique/";


function setUp(section,variable,suffix){
    d3.json(URL+variable).then((data)=>{
        data.forEach(one=>{
            // d3.select(`select#${variable}_${suffix}`).append('option').attr("value", one).text(one);
            d3.select(`select#${variable}_${suffix}`).append('option').attr("value", one).text(one);
        })
    });
}

function setUpFromList(section,variable,texts,values,suffix){
    for(let i=0;i<texts.length;i++){
        d3.select(`select#${variable}_${suffix}`).append('option').attr("value", values[i]).text(texts[i]);
    }
}


setUp("filters","zipcode","flt");
setUp("filters","homeType","flt");
setUpFromList("filters","stories",["One-floor plan"],[1],"flt");
setUpFromList("filters","baths",["1.5+","2+","3+"],[1.5,2,3],"flt");
setUpFromList("filters","garage",["1+","2+","3+"],[1,2,3],"flt");
setUpFromList("filters","bedrooms",["2+","3+"],[2,3],"flt");

