const buttonEl = $(".select");
const delbuttonEl = $(".delete");
const sideEl = $(".test");
const gifEl = '';
const formEl = '';
let gifsGood = [];
let gifsBad = [];
let cryptos = [{"id":"90","symbol":"BTC","name":"Bitcoin","nameid":"bitcoin","rank":1,"price_usd":"38407.31","percent_change_24h":"-1.36","percent_change_1h":"-0.50","percent_change_7d":"-2.83","market_cap_usd":"730003063588.71","volume24":"18370337205.82","volume24_native":"478303.12","csupply":"19006877.00","price_btc":"1.00","tsupply":"19006877","msupply":"21000000"}];
let time = '';

//checks if coins have been stored, parses to array if they have, then draws array to screen.
if(localStorage.getItem("cryptosPerm") !== null){
    cryptos = JSON.parse(localStorage["cryptosPerm"]);
    drawCrypto();
}

function getOption() {
    selectElement = document.querySelector('.form-select');
    output = selectElement.value;
    console.log(output);

    //checks what time user selects
    if(output == 1){
        time = cryptos[0].percent_change_1h;
    }else if(output == 2){
        time = cryptos[0].percent_change_24h;
    }else if(output == 3){
        time = cryptos[0].percent_change_7d;
    }
}

function drawCrypto(){
    //code for adding crypto array object to list
    for (i=0; i < cryptos.length; i++) {
        sideEl.children().remove();
        const name = document.createElement("h3");
        const price = document.createElement("li");
        const changeHour = document.createElement("li");
        const changeDay = document.createElement("li");
        const changeWeek = document.createElement("li");
        name.innerHTML = cryptos[i].name;
        price.innerHTML = cryptos[i].price_usd;
        changeHour.innerHTML = cryptos[i].percent_change_1h;
        changeDay.innerHTML = cryptos[i].percent_change_24h;
        changeWeek.innerHTML = cryptos[i].percent_change_7d;
        sideEl.append(name);
        sideEl.append(price);
        sideEl.append(changeHour);
        sideEl.append(changeDay);
        sideEl.append(changeWeek);
    }
}

function getGif(change){
    //deciding what kind of gif
    if(time < 0){
        //bad gif
    }else if(time > 0){
        //good gif
    }

    //append gipphy to html
}

buttonEl.on("click", function(event){
    event.preventDefault();
    //take form input for cryptos and time desired

    //store data in cryptos array
    getOption();
    drawCrypto();
    cryptos.push();
    localStorage.setItem("cryptosPerm", JSON.stringify(cryptos));
})

delbuttonEl.on("click", function(){
    localStorage.clear();
    sideEl.children().remove();
})

