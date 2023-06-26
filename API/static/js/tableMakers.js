function tableMakerBinary(section,title,ids,labels,suffix){
    let table=document.querySelector(`#${section}`);
    let head=document.createElement("tr");
    head.innerHTML=`<th colspan="4">${title}</th>`
    table.appendChild(head);
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
}

function tableMakerInput(section,title,ids,labels,types,suffix){
    let table=document.querySelector(`#${section}`);
    let head=document.createElement("tr");
    head.innerHTML=`<th colspan="4">${title}</th>`
    table.appendChild(head);
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
        if (types[i]==="select"){
            setUp(section,ids[i],suffix); 
        }
        if (types[i+1]==="select"){
            setUp(section,ids[i+1],suffix);
        }
    }
}

function tableMakerButtons(section,functionName,prefix){
    let table=document.querySelector(`#${section}`);
    let row=document.createElement("tr");
    row.innerHTML=`               
    <td colspan="2" class="align-middle">
      <button class="btn" type="button" id="${prefix}Go" onclick="${functionName}();"><span>Go</span> </button>
    </td>
    <td colspan="2" class="align-middle">
      <button class="btn" type="button" id="${prefix}Clear" onclick="${functionName}()" disabled><span>Clear</span> </button>
    </td>
`
    table.appendChild(row);
    
}