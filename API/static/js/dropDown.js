const URL = "http://127.0.0.1:5000/geo";


function setUp(){
    d3.json(URL).then((data)=>{
        console.log(data);
        // fetch languages for dropdown menu
        let zipcode=[]
        data.forEach(row =>  {
            if (!zipcode.includes(row.zipcode)){
            languages.push(row.Language);
            }
        });
        // sort them in alphabetical order for readness
        languages.sort()
        // console.log(languages);
        d3.select('select').append('option').attr("value", "All").text("All");
        // add language to meny
        languages.forEach(row => {
            d3.select('select').append('option').attr("value" , row).text(row);
        });
        // start with ALL and run function option changed when different language is clicked
        optionChanged("All",true,false);
    });
}

setUp();