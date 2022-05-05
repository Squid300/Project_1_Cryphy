const buttonEl = $("#select");
const delbuttonEl = $("#delete");
const searchEl = $("#coinSearch")
const sideEl = $("#info");
const gifEl = $("#gif");
let gifsGood = [];
let gifsBad = [];
let cryptos = [];
let cryptosPrev = [];
let time;

//checks if coins have been stored, parses to array if they have, then draws array to screen.
if(localStorage.getItem("cryptosPerm") !== null){
    cryptosPrev = JSON.parse(localStorage["cryptosPerm"]);

    for(i = 0; i < cryptosPrev.length; i++){
        const listEl = document.createElement("ul");
        const name = document.createElement("h2");
        const price = document.createElement("li");
        const changeHour = document.createElement("li");
        const changeDay = document.createElement("li");
        const changeWeek = document.createElement("li");
        name.innerHTML = "Name: " + cryptosPrev[i].name;
        price.innerHTML = "Price USD: " + cryptosPrev[i].price_usd;
        changeHour.innerHTML = "Change 1h: " + cryptosPrev[i].percent_change_1h;
        changeDay.innerHTML = "Change 24h: " + cryptosPrev[i].percent_change_24h;
        changeWeek.innerHTML = "Change 7d: " + cryptosPrev[i].percent_change_7d;
        sideEl.append(name);
        sideEl.append(listEl);
        listEl.append(price);
        listEl.append(changeHour);
        listEl.append(changeDay);
        listEl.append(changeWeek);
    }
}

function getOption() {
    selectElement = document.querySelector('.form-select');
    output = selectElement.value;
    console.log(output);

    //checks what time user selects
    if(output == 0){
        time = cryptos[0].percent_change_1h;
    }else if(output == 1){
        time = cryptos[0].percent_change_24h;
    }else if(output == 2){
        time = cryptos[0].percent_change_7d;
    }
}

//pulls crypto list then draws to screen
function getApi(x) {
    var requestUrl = 'https://api.coinlore.net/api/tickers/';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        cryptos.push(data);
        drawCrypto(x);
      });
  }

function drawCrypto(input){
    console.log(input);
    //goes through each object in array
    for (i=0; i < 100; i++) {
        //checks each object for name match to pull correct crypto info then writes to screen
        if(input == cryptos[0].data[i].name.toLowerCase()){
            const listEl = document.createElement("ul");
            const name = document.createElement("h2");
            const price = document.createElement("li");
            const changeHour = document.createElement("li");
            const changeDay = document.createElement("li");
            const changeWeek = document.createElement("li");
            name.innerHTML = "Name: " + cryptos[0].data[i].name;
            price.innerHTML = "Price USD: " + cryptos[0].data[i].price_usd;
            changeHour.innerHTML = "Change 1h: " + cryptos[0].data[i].percent_change_1h;
            changeDay.innerHTML = "Change 24h: " + cryptos[0].data[i].percent_change_24h;
            changeWeek.innerHTML = "Change 7d: " + cryptos[0].data[i].percent_change_7d;
            sideEl.append(name);
            sideEl.append(listEl);
            listEl.append(price);
            listEl.append(changeHour);
            listEl.append(changeDay);
            listEl.append(changeWeek);

            //stores matched coin in array and stores in local storage
            cryptosPrev.push(
                {
                    name: cryptos[0].data[i].name,
                    price_usd: cryptos[0].data[i].price_usd,
                    percent_change_1h: cryptos[0].data[i].percent_change_1h,
                    percent_change_24h: cryptos[0].data[i].percent_change_24h,
                    percent_change_7d: cryptos[0].data[i].percent_change_7d
                }
            )
            localStorage.setItem("cryptosPerm", JSON.stringify(cryptosPrev));
        }
    }
}

function getGif(change){
    //deciding what kind of gif
    if(time < 0){
        console.log("bad");
        gifEl.src = gifsBad[Math.floor(Math.random() * gifsBad.length)];
    }else if(time > 0){
        console.log("good");
        gifEl.src = gifsGood[Math.floor(Math.random() * gifsGood.length)]
    }else{
        console.log("something went wrong")
    }
}

buttonEl.on("click", function(event){
    event.preventDefault();
    const x = searchEl.val();
    // getOption();
    getApi(x);
    getGif();
    searchEl.val(searchEl.placeholder);
})

delbuttonEl.on("click", function(){
    localStorage.clear();
    sideEl.children().remove();
})

