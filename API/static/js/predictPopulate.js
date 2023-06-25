function modelLinear(){
    if (isUserMarker===false){
        console.log("opcion A");
    } else {
        console.log("opcion B");
        map.removeLayer(markerPin);
        isUserMarker=false;
    };
    let idsInputs=['numOfBedrooms',
    'numOfBathrooms',
    'lotSizeSqFt',
    'livingAreaSqFt',
    'garageSpaces',
    'numOfStories',
    'propertyTaxRate',
    'numOfSecurityFeatures'
    ]
    let idsBinary=[
    'hasCooling',
    'hasHeating',
    'isAccessible',
    'hasSpa',
    'hasWaterfront',
    'hasView'
    ]
    let labelsInputs=[
        'Bedrooms:',
        'Bathrooms:',
        'Lot Size (ft²):',
        'Living Area (ft²)',
        'Garage Spaces:',
        'Stories:',
        'Tax Rate:',
        'Security Features:',
    ];
    let labelsBinary=["Has Cooling",
        "Has Heating",
        "Is Accessible",
        "Has Spa",
        "Has Waterfront",
        "Has View"
    ];
    let types=["number","number","number","number","number","number","select","number"];
    // tableMaker("#modelContainer",ids,labels,"lr",8);
    tableMakerInput("#modelContainer","Specifications",idsInputs,labelsInputs,types,"lr");
    tableMakerBinary("#modelContainer","Features",idsBinary,labelsBinary,"lr");
}

function modelNN(){
    
    let table=document.querySelector("#modelContainer");
    table.innerHTML=""
    let ids=['latitude', 'longitude',
    'propertyTaxRate', 'garageSpaces',
    'hasCooling', 'hasGarage', 'hasHeating', 'hasSpa', 'hasView',
    'yearBuilt', 'numPriceChanges',
    'numOfAccessibilityFeatures', 'numOfAppliances', 'numOfParkingFeatures',
    'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures',
    'numOfWaterfrontFeatures', 'numOfWindowFeatures',
    'numOfCommunityFeatures', 'lotSizeSqFt', 'livingAreaSqFt',
    'avgSchoolRating', 'numOfBathrooms', 'numOfBedrooms', 'numOfStories',
    'numOfSchools', 'zipcode']
    let labels=['Latitude', 'Longitude',
    'Property Tax Rate', 'Garage Spaces',
    'Cooling', 'Garage', 'Heating', 'Spa', 'View',
    'Year Built', 'Price Changes', 'Accessibility Features', 'Appliances', 'Parking Features',
    'Patio/Porch Features', 'Security Features',
    'Waterfront Features', 'Window Features',
    'Community Features', 'Lot Size', 'Living Area',
    'School Rating', 'Bathrooms', 'Bedrooms', 'Stories',
    'Schools', 'Zipcode']
    for (let i=0;i<ids.length;i=i+2){
        let tr=document.createElement("tr");
        tr.innerHTML=`<td><label for="${ids[i]}_nn">${labels[i]}</label></td>
        <td><input type="number" id="${ids[i]}_nn"></td><td><label for="${ids[i+1]}_nn">${labels[i+1]}</label></td>
        <td><input type="number" id="${ids[i+1]}_nn"></td>`
        table.appendChild(tr);
    }
    let tr=document.createElement("tr");
    tr.innerHTML=`<td colspan="4" class="align-middle">
                    <button type="button" class="btn" id="predictLinear">Submit</button>
                    </td>`
    table.appendChild(tr);
    let latlabel=document.querySelector("label[for=latitude_nn]");
    let lonlabel=document.querySelector("label[for=longitude_nn]");
    latlabel.innerHTML=("Latitude <span class='glyphicon glyphicon-map-marker'></span>")
    lonlabel.innerHTML=("Longitude <span class='glyphicon glyphicon-map-marker'></span>")
    console.log(lonlabel);
    
    let lat=document.querySelector("#latitude_nn");
    let lon=document.querySelector("#longitude_nn");
    userPin(lat,lon);
    
}
