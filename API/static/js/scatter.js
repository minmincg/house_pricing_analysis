function grapher(data){
  console.log(`grapher data ${data}`);
  var trace1 = {
    x: data["x"],
    y: data["y"],
    mode: 'markers',
    type: 'scatter'
};
let Layout = {
            title: "titulo whatever",
            margin: { t: 50, l: 150 ,b:20,r:10},
            height: 300,
            width: 450,
  //           paper_bgcolor: "rgba(255, 255, 255, 0)",
  //           plot_bgcolor:"rgba(255, 255, 255, 0)",
  
        };
var scatterData = [trace1];
console.log("si funciona el layout!")
console.log(scatterData);
Plotly.newPlot('graphs', scatterData,Layout);

};
function scatter(independent) {
  // getting information from the different APIS depending on the option chosen in dropdown menu
      var URL=`http://127.0.0.1:5000/graphs/${independent}`;      
      d3.json(URL).then(data=>{
        console.log(data["x"]);
        grapher(data);
      })};
      
      
scatter("yearBuilt");


    
//       let barData =[
//           {
//               y: communities.reverse(),
//               x: total_population.reverse(),
//               hovertext: hover.reverse(),
//               type: "bar",
//               marker:{color:"#176F6A"},
//               // "#D67616","#62AA9F","#176F6A","#AD3A00","#7A2F1E"
//               orientation: "h",
//           },
//       ];
//        // 2. Create the layout for the bar chart.

//      
//       // 3. Use Plotly to plot the data with the layout.

//       Plotly.newPlot("bar" , barData , barLayout);
//   });

// }