
// function tableMaker(query,ids,labels,suffix,breakNumber){
//     let table=document.querySelector(query);
//     table.innerHTML=""
//     let spec=document.createElement("tr");
//     spec.innerHTML=`<th colspan="4">Specifications:</th>`
//     table.appendChild(spec);
//     for (let i=0;i<breakNumber;i=i+2){
//         let row=document.createElement("tr");
//         row.innerHTML=`
//         <td>${labels[i]}</td>
//         <td><input type="number" id="${ids[i]}_${suffix}"></td>
//         <td>${labels[i+1]}</td>
//         <td><input type="number" id="${ids[i+1]}_${suffix}"></td>`
//         table.appendChild(row);
//     }
     
//     let features=document.createElement("tr");
//     features.innerHTML=`<th colspan="4">Features:</th>`
//     table.appendChild(features);
//     let row=document.createElement("tr");
//     for (let i=breakNumber;i<labels.length;i=i+3){
//         let cell=document.createElement("td");
//         cell.innerHTML=`
//         <input type="checkbox" id="${ids[i]}_${suffix}"> <label for="${ids[i]}_lr">${labels[i]}</label><br>
//         <input type="checkbox" id="${ids[i+1]}_${suffix}"> <label for="${ids[i+1]}_lr">${labels[i+1]}</label><br>
//         <input type="checkbox" id="${ids[i+2]}_${suffix}"> <label for="${ids[i+2]}_lr">${labels[i+2]}</label>
//         `
//         cell.setAttribute("colspan","2");
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
//     let calcbut=document.createElement("tr");
//     calcbut.innerHTML=`<td colspan="4" class="align-middle">
//                     <button type="button" class="btn" onclick="linear();" id="predictLinear">Submit</button>
//                     </td>`
//     table.appendChild(calcbut);
// }

function tableMakerBinary(query,title,ids,labels,suffix){
    let table=document.querySelector(query);
    let features=document.createElement("tr");
    features.innerHTML=`<th colspan="4">${title}:</th>`
    table.appendChild(features);
    let row=document.createElement("tr");
    for (let i=0;i<labels.length;i=i+3){
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

function tableMakerInput(query,title,ids,labels,types,suffix){
    let table=document.querySelector(query);
    table.innerHTML=""
    let spec=document.createElement("tr");
    spec.innerHTML=`<th colspan="4">${title}:</th>`
    table.appendChild(spec);
    for (let i=0;i<ids.length;i=i+2){
        let row=document.createElement("tr");
        if(types[i]==="number"){
            row.innerHTML=`
            <td>${labels[i]}</td>
            <td><input type="number" id="${ids[i]}_${suffix}"></td>`
        } else if (types[i]==="select"){
            row.innerHTML=`
            <td>${labels[i]}</td>
            <td><select id="${ids[i]}_${suffix}"></select></td>`
        }
        if(types[i+1]==="number"){
            row.innerHTML=row.innerHTML+`<td>${labels[i+1]}</td>
            <td><input type="number" id="${ids[i+1]}_${suffix}"></td>`
        } else if (types[i+1]==="select"){
            row.innerHTML=row.innerHTML+`<td>${labels[i+1]}</td>
            <td><select id="${ids[i+1]}_${suffix}"></select></td>`
        }
        table.appendChild(row);
    }
}