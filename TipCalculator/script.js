const billAmount = document.querySelector("#billAmount");
const tipAmount = document.querySelector("#tipAmount");
const total = document.querySelector(".total");

function totalTip() {
    let billValue = parseFloat(billAmount.value);
    let tipPercent = parseFloat(tipAmount.value);
    let tipvalue = billValue*(tipPercent/100);
    const totalAmount = tipvalue+billValue;
    total.innerHTML = "Total : " + totalAmount;
}