// Clicker tutorial by https://kastark.co.uk/articles/incrementals.html
// rewritten by me
// getElemendId replaced with querySelector

let currency = 0

let currencyClick = (number) => {
    currency = currency + number;
    document.querySelector('#currency').innerHTML = currency;
};


//upgrade 1 - six-shooter
let upgrade1amount = 0
//upgrade 1 purchase x 1
let buyUpgrade1 = () => {
    let upgrade1cost = Math.floor(10 * Math.pow(1.1,upgrade1amount));
    if (currency >= upgrade1cost) {
        upgrade1amount = upgrade1amount + 1;
        currency = currency - upgrade1cost;
        document.querySelector('#upgrade1amount').innerHTML = upgrade1amount;
        document.querySelector('#currency').innerHTML = currency;
    } else if (currency < upgrade1cost) {
        alert('not enough currency')
    }
    let nextUpgrade1cost = Math.floor(10 * Math.pow(1.1,upgrade1amount));
    document.querySelector('#upgrade1cost').innerHTML = nextUpgrade1cost;
};

//timer for upgrade 1
window.setInterval(function(){
    currencyClick(upgrade1amount)
}, 500);

//buy x 10

let upgrade2amount = 0

let buyUpgrade2 = (currency) => {
    let upgrade2cost = Math.floor(50 * Math.pow(1.3,upgrade2amount))
    if (currency >= upgrade2cost) {
        upgrade2amount = upgrade2amount + 1;
        currency = currency - upgrade2cost;

    }
}