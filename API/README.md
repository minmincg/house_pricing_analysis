# API
In this folder we stored all the functioning files for the app to run locallly. To get it to work you shall open the directory from your terminal, and then run "python app.pY"
We used the different files for the following:
### static:
  #### css: 
  It contains a file that gives the app style, different colors, alignment, etc. 
  #### js: 
  Contains all the javascript files that do "the magic" behind the app. they run all the functions :
    collapsible.js: runs functinos for the main menu that is collapsible
    dropDwon.js: contains functions that will be used by user to filter out what specs he's looking in a house.
    filter.js: runs function that filters out in the map the houses with the specs the user is looking for in a house.
    linear.js: contains a function that runs linear regression that predicts the cost of the next house  given some required specifications.
    map.js: contains function with leaflet, geojson that runs the map, and points out the houses the user wants to look at depending on the filters.
    nn.js: runs the function of the neuralnetwork that will predict more into depth the cost of the price depending on the specification the suer provides.
    scatter.js: Creates a scatter plot so the user can see additional trends. It always runs the independent variable to be the price, the independent variable can be switched by the user
    to be able to see for exaple: #number of bedrooms vs cost, number of bathrooms vs cost... and so on.
  #### templates:
  contains the index.html. This file is the "vertebrae" of the app  it tells where everything goes. 
    
