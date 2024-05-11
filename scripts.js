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

document.getElementById('dollar').addEventListener('click', function(event) {
    money += valuePerClick;
    animateDollar(event.clientX, event.clientY)
    updateMoney();
});


function animateDollar(x, y) {
    let smallDollar = document.createElement('img');
    smallDollar.src = 'dollar.png';
    smallDollar.style.position = 'absolute';
    smallDollar.style.left = x + 'px';
    smallDollar.style.top = y + 'px';
    smallDollar.style.width = '20px';
    smallDollar.style.height = '20px';
    smallDollar.style.pointerEvents = 'none';
    document.body.appendChild(smallDollar);

    let randomAngle = Math.random() * 360;
    let speed = Math.random() * 3 + 1;

    let deltaX = speed * Math.cos(randomAngle);
    let deltaY = speed * Math.sin(randomAngle);

    let intervalId = setInterval(function() {
        x += deltaX;
        y += deltaY;

        smallDollar.style.left = x + 'px';
        smallDollar.style.top = y + 'px';

        if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
            clearInterval(intervalId);
            document.body.removeChild(smallDollar);
        }
    }, 20);

    setTimeout(function() {
        let fallIntervalId = setInterval(function() {
            y += 2;
            smallDollar.style.top = y + 'px';

            if (y > window.innerHeight) {
                clearInterval(fallIntervalId);
                document.body.removeChild(smallDollar);
            }
        }, 20);
    }, 300); // Temps de déplacement horizontal avant la chute (en millisecondes)

    setTimeout(function() {
        document.body.removeChild(smallDollar);
    }, 1000); // Temps avant de faire disparaître le petit dollar (en millisecondes)
}