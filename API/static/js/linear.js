
function linear(){
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
    console.log(results);
    let urlLinear="http://127.0.0.1:5000/linearModel"
    d3.json(urlLinear).then(data=>{
        let coef=data.coefficients;
        let intercept=data.intercept;
        console.log(coef,intercept);
        let price=0;
        for (let i=0;i<results.length;i++){
            price=price+Number(results[i])*coef[i];
        };
        price+=intercept;
        console.log(price);
        price=Number(price.toFixed(2)).toLocaleString("en-US");
    let linearOutput=document.querySelector("#linear_output");
    linearOutput.innerHTML=`<span class="result-predict">Predicted Price: $${price}</span>`;
})
}