// script.js
let money = 999;
let moneyBySeconds = 1;

function addMoneyPerSecond(amount) {
    moneyBySeconds += amount;
}

function updateMoneyPerSecondDisplay() {
    document.getElementById('money-per-second').textContent = "Money per second: $" + moneyBySeconds.toFixed(2);
}

function updateMoneyAndMoneyPerSecond() {
    money += moneyBySeconds / 100;
    updateMoney();
    updateMoneyPerSecondDisplay();
}

setInterval(updateMoneyAndMoneyPerSecond, 10);

let backgroundMusic = new Audio('sounds/bckground_music.mp3');

document.body.addEventListener("mousemove", function () {
    backgroundMusic.loop = true
    backgroundMusic.volume = 0.08
    backgroundMusic.play()
})

function updateMoney() {
    updateUpgradeDisplay()
    document.getElementById('money').textContent = '$' + money.toFixed(0);
}

function buyUpgrade(cost, value) {
    if (money >= cost) {
        money -= cost;
        updateMoney();
        valuePerClick += value;
        let upgradeSound = new Audio('sounds/upgrade_sound.mp3');
        upgradeSound.volume = 0.1
        upgradeSound.play();
    }
}

let lastBoostTime = 0;
const boostCooldown = 60 * 1000; // 60 seconds in milliseconds

function boostTime() {
    const currentTime = new Date().getTime();
    if (currentTime - lastBoostTime >= boostCooldown) {
        money += 1000;
        lastBoostTime = currentTime;
    } else {
        console.log("Boost button is on cooldown. Wait for 1 minute before using it again.");
    }
}



let valuePerClick = 1;

document.getElementById('dollar').addEventListener('click', function(event) {
    money += valuePerClick;
    let clickSound = new Audio('sounds/click.mp3');
    console.log("cc")
    clickSound.volume = 0.15
    clickSound.play();
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
    }, 20);

    setTimeout(function() {
        let fallIntervalId = setInterval(function() {
            y += 2;
            smallDollar.style.top = y + 'px';
        }, 20);
    }, 300);

    setTimeout(function() {
        document.body.removeChild(smallDollar);
    }, 1000);
}

function updateUpgradeDisplay() {
    let upgrades = document.getElementsByClassName('upgrade');
    for (let upgrade of upgrades) {
        let cost = parseInt(upgrade.textContent.match(/\$([0-9,]+)/)[1].replace(',', ''));
        upgrade.disabled = money < cost;
    }
}

document.querySelectorAll('.upgrade').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.classList.add('highlight');
    });
    item.addEventListener('mouseout', event => {
        event.target.classList.remove('highlight');
    });
});

