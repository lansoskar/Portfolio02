// Portfolio 02 - Document Object Model (DOM) - Clicker Clone
// Clicker tutorials by https://kastark.co.uk/articles/incrementals.html and https://makeschool.org/mediabook/oa/tutorials/cookie-clicker-clone/Making-A-Plan/
// rewritten as needed by me
// getElemendId replaced with querySelector in a lot of places
//Optional stuff to add on a rainy day;

/*
    - critical hit function on clicker button
    - add little sound effects
    - explore css, animations
    - after a certain amount of dollars stolen or upgrade levels, slightly alter the page
    - prestige with constant currency multiplier
    - buy x 10 upgrades, buy max upgrades
    - making a key on keyboard press the button
*/

//////////////////////////////////////////////////////////  The clicker button and currency
let currency = 0
let clickPower = 1

// Select our click bottom
let theClicker = document.querySelector('#theClicker')

//updates currency count
let updateCurrencyCount = () => {
    document.querySelector('#currency').innerHTML = currency;
}
// Button click increases currency
theClicker.addEventListener('click', function () {
    currency = currency + clickPower;
    updateCurrencyCount()
})

////////////////////////////////////////////////////////// Increase click power upgrade - weapons
let clickIncreasePriceAmount = 15
let weaponLevelNumber = 1

// get out DOM elements to variables
let clickIncreasePrice = document.querySelector('#weaponPrice')
let clickPowerLevel = document.querySelector('#weaponLevel')
let currentClickPowerValue = document.querySelector('#weaponPowerMultiple')

// updates weapon level and shop menu
let updateWeaponLevel = () => {
    clickPowerLevel.innerHTML = ' ' + weaponLevelNumber
    clickIncreasePrice.innerHTML = ' ' + clickIncreasePriceAmount + '💲'
    currentClickPowerValue.innerHTML = clickPower
}
// upgrades click power - event listener on the button id / could also do a variable with querySelector
UpgradeClickPower.addEventListener("click", function () {
    if (currency >= clickIncreasePriceAmount) {
        currency = currency - clickIncreasePriceAmount;
        updateCurrencyCount()
        clickIncreasePriceAmount = Math.floor(clickIncreasePriceAmount * 1.25);
        weaponLevelNumber += 1;
        clickPower += 1 + Math.floor(clickPower * 1.05);
        updateWeaponLevel()
    } else {
        alert('Not enough dollars, go rob some more!')
    }
})

////////////////////////////////////////////////////////// Autoclick upgrade 1 - hire bandits

// basic values for upgrade 1
let upgrade1Power = 0
let upgrade1PriceAmount = 10
let upgrade1LevelNumber = 0
let upgrade1AutoClick = false

// get DOM elements
let upgrade1Price = document.querySelector('#upgrade1cost')
let upgrade1Level = document.querySelector('#upgrade1amount')
let upgrade1Multiple = document.querySelector('#upgrade1Multiple')

// buy upgrade 1 / hire bandits
buyUpgrade1.addEventListener('click', function () {
    if (currency >= upgrade1PriceAmount) {
        currency = currency - upgrade1PriceAmount
        updateCurrencyCount()
        upgrade1Power += 1 + Math.floor(upgrade1Power * 1.05);
        upgrade1LevelNumber += 1
        upgrade1PriceAmount = Math.floor(upgrade1PriceAmount * 1.33)
        updateUpgrade1()
        upgrade1AutoClick = true
        upgrade1AutoClicker()
    } else {
        alert('not enough dollars, go rob some more!')
    }
})
// upgrade 1 auto clicker
let upgrade1AutoClicker = () => {
    let upgrade1Clicker = window.setInterval(function () {
        currency += upgrade1Power
        updateCurrencyCount();
    }, 1000);
}

// updates shop info for upgrade 1
let updateUpgrade1 = () => {
    upgrade1Level.innerHTML = upgrade1LevelNumber;
    upgrade1Price.innerHTML = upgrade1PriceAmount + '💲';
    upgrade1Multiple.innerHTML = upgrade1Power;
}

////////////////////////////////////////////////////////// Autoclick upgrade 2 - buy horses / static level increase

// basic values for upgrade 2
let upgrade2Power = 0
let upgrade2PriceAmount = 30
let upgrade2LevelNumber = 0
let upgrade2AutoClick = false

// get DOM elements
let upgrade2Price = document.querySelector('#upgrade2cost')
let upgrade2Level = document.querySelector('#upgrade2amount')
let upgrade2Multiple = document.querySelector('#upgrade2Multiple')

// buy upgrade 2 / buy horses
buyUpgrade2.addEventListener('click', function () {
    if (currency >= upgrade2PriceAmount) {
        currency = currency - upgrade2PriceAmount
        updateCurrencyCount()
        upgrade2Power += 5 + Math.floor(upgrade2Power * 1.05);
        upgrade2LevelNumber += 1
        upgrade2PriceAmount = Math.floor(upgrade2PriceAmount * 1.60)
        updateUpgrade2()
        upgrade2AutoClick = true
        upgrade2AutoClicker()
    } else {
        alert('not enough dollars, go rob some more!')
    }
})
// upgrade 2 auto clicker
let upgrade2AutoClicker = () => {
    let upgrade2Clicker = window.setInterval(function () {
        currency += upgrade2Power
        updateCurrencyCount();
    }, 1000);
}

// updates shop info for upgrade 2
let updateUpgrade2 = () => {
    upgrade2Level.innerHTML = upgrade2LevelNumber;
    upgrade2Price.innerHTML = upgrade2PriceAmount + '💲';
    upgrade2Multiple.innerHTML = upgrade2Power;
}

////////////////////////////////////////////////////////// Autoclick upgrade 3 - Dynamite / incremental level increase

// basic values for upgrade 3
let upgrade3Power = 0
let upgrade3PriceAmount = 100
let upgrade3LevelNumber = 0
let upgrade3AutoClick = false

// get DOM elements
let upgrade3Price = document.querySelector('#upgrade3cost')
let upgrade3Level = document.querySelector('#upgrade3amount')
let upgrade3Multiple = document.querySelector('#upgrade3Multiple')

// buy upgrade 3 / buy dynamite
buyUpgrade3.addEventListener('click', function () {
    if (currency >= upgrade3PriceAmount) {
        currency = currency - upgrade3PriceAmount
        updateCurrencyCount()
        upgrade3Power += 10 + Math.floor(upgrade3Power * 1.05)
        upgrade3LevelNumber += 1
        upgrade3PriceAmount = Math.floor(upgrade3PriceAmount * 2.50)
        updateUpgrade3()
        upgrade3AutoClick = true
        upgrade3AutoClicker()
    } else {
        alert('not enough dollars, go rob some more!')
    }
})
// upgrade 3 auto clicker
let upgrade3AutoClicker = () => {
    let upgrade3Clicker = window.setInterval(function () {
        currency += upgrade3Power
        updateCurrencyCount();
    }, 1000);
}

// updates shop info for upgrade 3
let updateUpgrade3 = () => {
    upgrade3Level.innerHTML = upgrade3LevelNumber;
    upgrade3Price.innerHTML = upgrade3PriceAmount + '💲';
    upgrade3Multiple.innerHTML = upgrade3Power;
}