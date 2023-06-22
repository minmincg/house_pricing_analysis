function modelLinear(){
    let table=document.querySelector("#modelContainer");
    table.innerHTML=""
    let ids=[
        'propertyTaxRate',
        'garageSpaces',
        'numOfAccessibilityFeatures',
        'numOfAppliances',
        'numOfParkingFeatures',
        'numOfPatioAndPorchFeatures',
        'numOfSecurityFeatures',
        'numOfWaterfrontFeatures',
        'numOfWindowFeatures',
        'numOfCommunityFeatures',
        'lotSizeSqFt',
        'livingAreaSqFt',
        'numOfBathrooms',
        'numOfBedrooms',
        'numOfStories']
    let labels=[
        'Property Tax Rate:',
        'Garage Spaces:',
        '# of Accessibility Features:',
        '# of Appliances:',
        '# of Parking Features:',
        '# of Patio/Porch Features:',
        '# of Security Features:',
        '# of Waterfront Features:',
        '# of Window Features:',
        '# of Community Features:',
        'Lot Size (sqft):',
        'Living Area (sqft)',
        '# of Bathrooms:',
        '# of Bedrooms:',
        '# of Stories:']
    for (let i=0;i<ids.length;i++){
        let tr=document.createElement("tr");
        tr.innerHTML=`<td><label for="${ids[i]}">${labels[i]}</label></td>
        <td><input type="number" id="${ids[i]}"></td>`
        table.appendChild(tr);
    }
    let tr=document.createElement("tr");
    tr.innerHTML=`<td colspan="2" class="align-middle">
                    <button type="button" class="btn" onclick="linear();" id="predictLinear">Submit</button>
                    </td>`
    table.appendChild(tr);
}

function modelNN(){
    let table=document.querySelector("#modelContainer");
    table.innerHTML=""
    let ids=['latitude', 'longitude', 'propertyTaxRate', 'garageSpaces',
    'hasCooling', 'hasGarage', 'hasHeating', 'hasSpa', 'hasView',
    'yearBuilt', 'latestPrice', 'numPriceChanges',
    'numOfAccessibilityFeatures', 'numOfAppliances', 'numOfParkingFeatures',
    'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures',
    'numOfWaterfrontFeatures', 'numOfWindowFeatures',
    'numOfCommunityFeatures', 'lotSizeSqFt', 'livingAreaSqFt',
    'avgSchoolRating', 'numOfBathrooms', 'numOfBedrooms', 'numOfStories',
    'numOfSchools', 'zipcode']
    let labels=['latitude', 'longitude', 'propertyTaxRate', 'garageSpaces',
    'hasCooling', 'hasGarage', 'hasHeating', 'hasSpa', 'hasView',
    'yearBuilt', 'latestPrice', 'numPriceChanges',
    'numOfAccessibilityFeatures', 'numOfAppliances', 'numOfParkingFeatures',
    'numOfPatioAndPorchFeatures', 'numOfSecurityFeatures',
    'numOfWaterfrontFeatures', 'numOfWindowFeatures',
    'numOfCommunityFeatures', 'lotSizeSqFt', 'livingAreaSqFt',
    'avgSchoolRating', 'numOfBathrooms', 'numOfBedrooms', 'numOfStories',
    'numOfSchools', 'zipcode']
    for (let i=0;i<ids.length;i++){
        let tr=document.createElement("tr");
        tr.innerHTML=`<td><label for="${ids[i]}">${labels[i]}</label></td>
        <td><input type="number" id="${ids[i]}"></td>`
        table.appendChild(tr);
    }
    let tr=document.createElement("tr");
    tr.innerHTML=`<td colspan="4" class="align-middle">
                    <button type="button" class="btn" id="predictLinear">Submit</button>
                    </td>`
    table.appendChild(tr);
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

