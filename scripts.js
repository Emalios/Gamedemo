// script.js
let money = 0;

function clickDollar() {
    money++;
    updateMoney();
}

function updateMoney() {
    document.getElementById('money').textContent = '$' + money.toFixed(2);
}

function buyUpgrade(cost, value) {
    if (money >= cost) {
        money -= cost;
        updateMoney();
        valuePerClick += value;
    } else {
        alert("Not enough money!");
    }
}

let valuePerClick = 1;

document.getElementById('dollar').addEventListener('click', function() {
    money += valuePerClick;
    updateMoney();
});
