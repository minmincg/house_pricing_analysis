var isNNShowing=false

function nn(){
    
    let inputsNumbers=document.querySelectorAll("#predict input[type='number']");
    let inputsBinary=document.querySelectorAll("#predict input[type='checkbox']");
    // console.log(inputsNumbers);
    let results=[];
    for (let i=0;i<inputsNumbers.length;i++){
        results.push(inputsNumbers[i].value);
    };
    for (let i=0;i<inputsBinary.length;i++){
        if (inputsBinary[i].checked){
            results.push(1);
        } else {
            results.push(0);
        }
    };
    let taxRateContent=document.querySelector("#predict select#propertyTaxRate_nn");
    let zipcodeContent=document.querySelector("#predict select#zipcode_nn")
    results.splice(2,0,zipcodeContent.value,taxRateContent.value);
    console.log(results);
    let query="";
    results.forEach(one=>{
        query=query+one+"_"
    })
    urlNN=`http://127.0.0.1:5000/nn/${query}`;
    console.log(urlNN);
    d3.json(urlNN).then(data=>{
        // let coef=data.coefficients;
        // let intercept=data.intercept;
        // console.log({"Coefficient":coef,"Intercept":intercept});
        // let price=0;
        // for (let i=0;i<results.length;i++){
        //     price=price+Number(results[i])*coef[i];
        // };
        // price+=intercept;
        // console.log(price);
        price=Math.round(data[0]).toLocaleString("en-US");
        if (isNNShowing==false){
            let table=document.querySelector("#modelContainer");
            let resultTitle=document.createElement("tr");
            resultTitle.innerHTML=`
            <th colspan="4">Predicted Price</th>`;
            table.appendChild(resultTitle);
            let resultContent=document.createElement("tr");
            resultContent.innerHTML=`<td colspan="4" class="align-middle" id="resultPrice"><h3>$${price}</h3></td>`;
            table.appendChild(resultContent);
            isNNShowing=true;
        } else {
            let resultContentCell=document.querySelector("#modelContainer #resultPrice");
            console.log(resultContentCell)
            resultContentCell.innerHTML=`<td colspan="4" class="align-middle id=resultPrice"><h3>$${price}</h3></td>`;
        }
    })
}