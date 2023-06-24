function modelLinear(){
    let ids=['numOfBedrooms',
    'numOfBathrooms',
    'lotSizeSqFt',
    'livingAreaSqFt',
    'garageSpaces',
    'numOfStories',
    'propertyTaxRate',
    'numOfSecurityFeatures',
    'hasCooling',
    'hasHeating',
    'isAccessible',
    'hasSpa',
    'hasWaterfront',
    'hasView']
    let labels=[
        'Bedrooms:',
        'Bathrooms:',
        'Lot Size (ft²):',
        'Living Area (ft²)',
        'Garage Spaces:',
        'Stories:',
        'Tax Rate:',
        'Security Features:',
        "Has Cooling",
        "Has Heating",
        "Is Accessible",
        "Has Spa",
        "Has Waterfront",
        "Has View"
    ];
    tableMaker("#modelContainer",ids,labels,"lr",8);
}

function modelNN(){
    
    let table=document.querySelector("#modelContainer");
    table.innerHTML=""
    let ids=['latitude', 'longitude']
    // , 'propertyTaxRate', 'garageSpaces',
    // 'hasCooling', 'hasGarage', 'hasHeating', 'hasSpa', 'hasView',
    // 'yearBuilt', 'numPriceChanges',
    // 'numOfAccessibilityFeatures', 'numOfAppliances', 'numOfParkingFeatures',
    // 'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures',
    // 'numOfWaterfrontFeatures', 'numOfWindowFeatures',
    // 'numOfCommunityFeatures', 'lotSizeSqFt', 'livingAreaSqFt',
    // 'avgSchoolRating', 'numOfBathrooms', 'numOfBedrooms', 'numOfStories',
    // 'numOfSchools', 'zipcode']
    let labels=['Latitude', 'Longitude']
    //  'Property Tax Rate', 'Garage Spaces',
    // 'Cooling', 'Garage', 'Heating', 'Spa', 'View',
    // 'Year Built', 'Price Changes', 'Accessibility Features', 'Appliances', 'Parking Features',
    // 'Patio/Porch Features', 'Security Features',
    // 'Waterfront Features', 'Window Features',
    // 'Community Features', 'Lot Size', 'Living Area',
    // 'School Rating', 'Bathrooms', 'Bedrooms', 'Stories',
    // 'Schools', 'Zipcode']
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
    let lat=document.querySelector("#latitude_nn");
    let lon=document.querySelector("#longitude_nn");
    userPin(lat,lon);
    
}


function tableMaker(query,ids,labels,suffix,breakNumber){
    let table=document.querySelector(query);
    table.innerHTML=""
    let spec=document.createElement("tr");
    spec.innerHTML=`<th colspan="4">Specifications:</th>`
    table.appendChild(spec);
    for (let i=0;i<breakNumber;i=i+2){
        let row=document.createElement("tr");
        row.innerHTML=`
        <td>${labels[i]}</td>
        <td><input type="number" id="${ids[i]}_${suffix}"></td>
        <td>${labels[i+1]}</td>
        <td><input type="number" id="${ids[i+1]}_${suffix}"></td>`
        table.appendChild(row);
    }
     
    let features=document.createElement("tr");
    features.innerHTML=`<th colspan="4">Features:</th>`
    table.appendChild(features);
    let row=document.createElement("tr");
    for (let i=breakNumber;i<labels.length;i=i+3){
        let cell=document.createElement("td");
        cell.innerHTML=`
        <input type="checkbox" id="${ids[i]}_${suffix}"> <label for="${ids[i]}_lr">${labels[i]}</label><br>
        <input type="checkbox" id="${ids[i+1]}_${suffix}"> <label for="${ids[i+1]}_lr">${labels[i+1]}</label><br>
        <input type="checkbox" id="${ids[i+2]}_${suffix}"> <label for="${ids[i+2]}_lr">${labels[i+2]}</label>
        `
        cell.setAttribute("colspan","2");
        row.appendChild(cell);
    }
    table.appendChild(row);
    let calcbut=document.createElement("tr");
    calcbut.innerHTML=`<td colspan="4" class="align-middle">
                    <button type="button" class="btn" onclick="linear();" id="predictLinear">Submit</button>
                    </td>`
    table.appendChild(calcbut);
}

columns_nn=['latitude', 'longitude', 'propertyTaxRate', 'garageSpaces',
'hasCooling', 'hasGarage', 'hasHeating', 'hasSpa', 'hasView',
'yearBuilt', 'latestPrice', 'numPriceChanges',
'numOfAccessibilityFeatures', 'numOfAppliances', 'numOfParkingFeatures',
'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures',
'numOfWaterfrontFeatures', 'numOfWindowFeatures',
'numOfCommunityFeatures', 'lotSizeSqFt', 'livingAreaSqFt',
'avgSchoolRating', 'numOfBathrooms', 'numOfBedrooms', 'numOfStories',
'numOfSchools', 'zipcode']
zips=['zipcode_78702', 'zipcode_78703', 'zipcode_78704',
'zipcode_78717', 'zipcode_78721', 'zipcode_78723', 'zipcode_78724',
'zipcode_78727', 'zipcode_78728', 'zipcode_78729', 'zipcode_78730',
'zipcode_78731', 'zipcode_78732', 'zipcode_78733', 'zipcode_78735',
'zipcode_78737', 'zipcode_78739', 'zipcode_78741', 'zipcode_78744',
'zipcode_78745', 'zipcode_78747', 'zipcode_78748', 'zipcode_78749',
'zipcode_78750', 'zipcode_78753', 'zipcode_78754', 'zipcode_78757',
'zipcode_78758', 'zipcode_78759', 'zipcode_Other']