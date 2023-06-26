modelLinear();

function modelLinear(){
    isNNShowing=false
    let table=document.querySelector("#modelContainer");
    table.innerHTML="";
    if (isUserMarker===false){
    } else {
        map.removeLayer(markerPin);
        isUserMarker=false;
    };
    let idsInputs=['numOfBedrooms','numOfBathrooms',
    'lotSizeSqFt','livingAreaSqFt',
    'garageSpaces','numOfStories',
    'propertyTaxRate','numOfSecurityFeatures']
    let idsBinary=[
    'hasCooling','hasHeating',
    'isAccessible','hasSpa',
    'hasWaterfront','hasView']
    let labelsInputs=[
    'Bedrooms','Bathrooms',
    'Lot Size (ft²)','Living Area (ft²)',
    'Garage Spaces','Stories',
    'Tax Rate','Security Features'];
    let labelsBinary=["Has Cooling","Has Heating",
    "Is Accessible","Has Spa",
    "Has Waterfront","Has View"];
    let types=["number","number","number","number","number","number","select","number"];
    
    tableMakerInput("modelContainer","Specifications",idsInputs,labelsInputs,types,"lr");
    tableMakerBinary("modelContainer","Features",idsBinary,labelsBinary,"lr");
    tableMakerButtons("modelContainer","linear","lr")
}

function modelNN(){
    isLinearShowing=false;
    let table=document.querySelector("#modelContainer");
    table.innerHTML="";
    let idsInputs=[
        'latitude', 'longitude', 'zipcode', 'propertyTaxRate', 'yearBuilt',
       'numPriceChanges', 'avgSchoolRating', 'numOfSchools', 'lotSizeSqFt',
       'livingAreaSqFt'];
    let idsInputsFeats=[
       'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures', 'numOfBedrooms', 'numOfBathrooms', 'numOfStories',
       'garageSpaces'];
    let idsBinary=[
       'hasCooling', 'hasHeating', 'hasView', 'hasSpa',
       'isAccessible', 'hasWaterfront'];
    let labelsInputs=[
        'Latitude <span class="glyphicon glyphicon-map-marker"></span>', 'Longitude <span class="glyphicon glyphicon-map-marker"></span>', 'Zipcode', 'Tax Rate', 'Year Built',
       '# of Price Changes', 'Avg School Rating', '# of Schools',
       'Lot Size (ft²)','Living Area (ft²)'];
    let labelsInputsFeats=[
       'Patio/Porch', 'Security', 'Bedrooms', 'Bathrooms', 'Stories',
       'Garage Spaces']
    let labelsBinary=[
       'Has Cooling', 'Has Heating', 'Has View', 'Has Spa',
       'Is Accessible', 'Has Waterfront'];
    let typesOne=["number","number","select","select","number",
    "number","number","number","number",
    "number"];
    let typesTwo=[
    "number","number","number","number","number",
    "number"];
    tableMakerInput("modelContainer","Specifications",idsInputs,labelsInputs,typesOne,"nn");
    tableMakerInput("modelContainer","Number of...",idsInputsFeats,labelsInputsFeats,typesTwo,"nn");
    tableMakerBinary("modelContainer","Features",idsBinary,labelsBinary,"nn");
    tableMakerButtons("modelContainer","nn","nn")
    let lat=document.querySelector("#latitude_nn");
    let lon=document.querySelector("#longitude_nn");
    userPin(lat,lon);
    
}


