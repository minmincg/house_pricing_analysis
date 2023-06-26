// Populate selector for independent variable used in graph
populateVariables("iVariable1");

// Populate dropdown menu for variable in grapher widget
function populateVariables(id){
  let idsVariables=['numOfBedrooms','numOfBathrooms',
  'lotSizeSqFt','livingAreaSqFt',
  'garageSpaces','numOfStories','yearBuilt'];
  let labelsVariables=['Bedrooms','Bathrooms',
  'Lot Size (ft²)','Living Area (ft²)',
  'Garage Spaces','Stories','Year Built'];
  let select=document.querySelector(`#${id}`);
  for (let i=0;i<idsVariables.length;i++){
    let option=document.createElement("option")
    option.innerText=labelsVariables[i];
    option.setAttribute("value",idsVariables[i]);
    select.appendChild(option);
  }
}

function scatter() {
  let indVarOne=document.querySelector("#iVariable1");
  let URL=`http://127.0.0.1:5000/graphs/${indVarOne.value}`;;
  d3.json(URL).then(data=>{
    grapher(data,indVarOne);
  });    
};

function grapher(data){
  var realPrice = {
    x: data["x"],
    y: data["og_price"],
    mode: 'markers',
    type: 'scatter',
    name:"Real Price",
    marker: {
      color: '#ff4824',
      size: 6,
    },
  };

  var lrPrice = {
    x: data["x"],
    y: data["lr_price"],
    mode: 'markers',
    type: 'scatter',
    name: "Linear Regression",
    marker: {
      color: '#16597a',
      size: 5,
    },
  };

  var nnPrice = {
    x: data["x"],
    y: data["nn_price"],
    mode: 'markers',
    type: 'scatter',
    name: "Neural Network",
    marker: {
      color: '#84ae36',
      size: 4,
    },
  };

  let Layout = {
            margin: { t: 5, l: 40 ,b:5,r:10},
            legend:{orientation:"h"},
            height: 450,
            width: 450,
            paper_bgcolor: "#F1F8F9",
            plot_bgcolor: "white"
 
        };
  var scatterData = [realPrice,lrPrice,nnPrice];

  Plotly.newPlot('graphContainer', scatterData,Layout);

};