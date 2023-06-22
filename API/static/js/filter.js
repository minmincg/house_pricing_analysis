function filterMap(){
    let inputsNumbers=document.querySelectorAll("#filters input[type='number']");
    console.log(inputsNumbers);
    let selects=document.querySelectorAll("#filters select");
    let inputsBinary=document.querySelectorAll("#filters input[type='checkbox']");
    let result=[];
    for (let i=0;i<inputsNumbers.length;i++){
        result.push(inputsNumbers[i].value)
    }
    for (let i=0;i<selects.length;i++){
        result.push(selects[i].value)
        // console.log(selects[i].id,selects[i].value)
    }
    for (let i=0;i<inputsBinary.length;i++){
        result.push(inputsBinary[i].checked)
        // console.log(inputsBinary[i].id,inputsBinary[i].checked)
    }
    document.querySelector("#filterClear").removeAttribute("disabled");
    clearMap();
    mapQuery(result);
}

function clearFilter(){
    let inputsNumbers=document.querySelectorAll("#filters input[type='number']");
    let selects=document.querySelectorAll("#filters select");
    let inputsBinary=document.querySelectorAll("#filters input[type='checkbox']");
    for (let i=0;i<inputsNumbers.length;i++){
        // inputsNumbers[i].setAttribute("value","")
        inputsNumbers[i].value="";
    }
    for (let i=0;i<selects.length;i++){
        selects[i].value="All";
    }
    for (let i=0;i<inputsBinary.length;i++){
        inputsBinary[i].checked=false;
    }
    document.querySelector("#filterClear").setAttribute("disabled", "");
    clearMap();
    mapQuery();
}