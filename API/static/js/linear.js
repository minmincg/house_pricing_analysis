var isLinearShowing = false

function linear() {

    let inputsNumbers = document.querySelectorAll("#predict input[type='number']");
    let inputsBinary = document.querySelectorAll("#predict input[type='checkbox']");
    // console.log(inputsNumbers);
    let results = [];
    for (let i = 0; i < inputsNumbers.length; i++) {
        results.push(inputsNumbers[i].value);
    };
    for (let i = 0; i < inputsBinary.length; i++) {
        if (inputsBinary[i].checked) {
            results.push(1);
        } else {
            results.push(0);
        }
    };
    let taxRateContent = document.querySelector("#predict select#propertyTaxRate_lr");
    results.splice(6, 0, taxRateContent.value);
    console.log(results);

    let urlLinear = "http://127.0.0.1:5000/linearModel"
    d3.json(urlLinear).then(data => {
        let coef = data.coefficients;
        let intercept = data.intercept;
        let price = 0;
        for (let i = 0; i < results.length; i++) {
            price = price + Number(results[i]) * coef[i];
        };
        price += intercept;
        price = Math.round(price).toLocaleString("en-US");
        if (isLinearShowing == false) {
            let table = document.querySelector("#modelContainer");
            let resultTitle = document.createElement("tr");
            resultTitle.innerHTML = `
            <th colspan="4">Predicted Price</th>`;
            table.appendChild(resultTitle);
            let resultContent = document.createElement("tr");
            resultContent.innerHTML = `<td colspan="4" class="align-middle" id="resultPrice"><h3>$${price}</h3></td>`;
            table.appendChild(resultContent);
            isLinearShowing = true;
        } else {
            let resultContentCell = document.querySelector("#modelContainer #resultPrice");
            resultContentCell.innerHTML = `<td colspan="4" class="align-middle id=resultPrice"><h3>$${price}</h3></td>`;
        }
    })
}