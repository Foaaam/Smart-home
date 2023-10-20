let button = document.querySelector('.button')
let controller = document.querySelector('.controller')
let temperature = document.querySelector('.temperature')
let smoke = document.querySelector('.smoke')
let temperatureButton = document.querySelector('.temperature-button')
let panelList = document.querySelector('.panel-list')
let buttonActive = false;

button.addEventListener("click", (e) => {
    buttonActive = !buttonActive

    if (buttonActive) {
        controller.classList.remove('visually-hidden')
        button.style = "background-color:red"
        button.textContent = "Керування розумним будинком"
    }

    else {
        controller.classList.add('visually-hidden')
        button.style = "background-color:rgba(2, 143, 13, 0.911)"
        button.textContent = "Керування розумним будинком"
    }
})


// Лічильник температури

let formSubmit = document.getElementById('form');

let minTemperature = 8;
let maxTemperature = 30;

formSubmit.addEventListener("submit", function (evt) {

    evt.preventDefault();

    let form = new FormData(document.getElementById("form"));
    minTemperature = form.get("mintemperature");
    maxTemperature = form.get("maxtemperature");
});


let temperatureCounter = 18;

let temperatureUpInterval, temperatureDownInterval

function render() {
    temperature.textContent = `Температура:${temperatureCounter} °C`;
}

let temperatureBullian = true;


let createIntervalDown = function () {
    temperatureDownInterval = setInterval(() => {

        if (temperatureCounter <= minTemperature * 1 + 1) {
            clearInterval(temperatureDownInterval);
        }


        temperatureCounter--;
        render();

    }, 2000);
};


let createIntervalUp = function () {
    temperatureUpInterval = setInterval(() => {
        if (temperatureCounter >= maxTemperature - 1) {
            clearInterval(temperatureUpInterval)
            temperatureButton.style = "background-color:rgb(255, 54, 54)";
            smoke.classList.add('visually-hidden')
            temperatureBullian = !temperatureBullian;
            createIntervalDown()
        }
        temperatureCounter++;
        render();
    }, 1000);

};


temperatureButton.addEventListener("click", (e) => {

    temperatureBullian = !temperatureBullian;

    if (!temperatureBullian) {
        temperatureButton.style = "background-color:green";

        smoke.classList.remove('visually-hidden');

        clearInterval(temperatureDownInterval)
        if (temperatureCounter >= maxTemperature - 1) {
            return
        }
        else {
            createIntervalUp();
        }

    }

    else {
        temperatureButton.style = "background-color:rgb(255, 54, 54)"
        smoke.classList.add('visually-hidden')

        clearInterval(temperatureUpInterval)


        createIntervalDown()
    }
})



// Регулятор температури

let form = document.querySelector(".form")
let changeButton = document.querySelector(".button-change")
let changeRange = true;
let hideButton = document.querySelector(".hide-button")

changeButton.addEventListener("click", (e) => {

    changeRange = !changeRange;

    if (!changeRange) {
        changeButton.classList.add('visually-hidden')
        form.classList.remove('visually-hidden')
        hideButton.classList.remove('visually-hidden');
    }
})

hideButton.addEventListener("click", (e) => {
    changeRange = !changeRange;
    if (changeButton) {
        hideButton.classList.add('visually-hidden')
        form.classList.add('visually-hidden')
        changeButton.classList.remove('visually-hidden')
    }
})


// Світло

let lightController = document.querySelector('.light-controller')
let lightText = document.querySelector('.light-text')

let lightList = document.querySelector('.light-list')

lightBullian = true;

lightList.classList.add('visually-hidden');

lightController.addEventListener("click", (e) => {

    lightBullian = !lightBullian;


    if (!lightBullian) {
        lightController.style = "background-color:green";
        lightText.classList.add('visually-hidden');
        lightList.classList.remove('visually-hidden');
    }

    else {
        lightText.classList.remove('visually-hidden');
        lightController.style = "background-color:rgb(255, 54, 54)"
        lightList.classList.add('visually-hidden');
    }
})

let lightButton1 = document.querySelector('.light-button-1')
let lightButton2 = document.querySelector('.light-button-2')
let lightButton3 = document.querySelector('.light-button-3')
let lightButton4 = document.querySelector('.light-button-4')
let lightButton5 = document.querySelector('.light-button-5')

let light1 = document.querySelector('.light-1')
let light2 = document.querySelector('.light-2')
let light3 = document.querySelector('.light-3')
let light4 = document.querySelector('.light-4')
let light5 = document.querySelector('.light-5')

let lightButton1Bullian = true;
let lightButton2Bullian = true;
let lightButton3Bullian = true;
let lightButton4Bullian = true;
let lightButton5Bullian = true;

lightButton1.addEventListener("click", (e) => {

    lightButton1Bullian = !lightButton1Bullian;

    if (!lightButton1Bullian) {
        lightButton1.style = "background-color:green";
        light1.classList.remove('visually-hidden');
    }

    else {
        lightButton1.style = "background-color:rgb(255, 54, 54)"
        light1.classList.add('visually-hidden');
    }
})

lightButton2.addEventListener("click", (e) => {

    lightButton2Bullian = !lightButton2Bullian;

    if (!lightButton2Bullian) {
        lightButton2.style = "background-color:green";
        light2.classList.remove('visually-hidden');
    }

    else {
        lightButton2.style = "background-color:rgb(255, 54, 54)"
        light2.classList.add('visually-hidden');
    }
})

lightButton3.addEventListener("click", (e) => {

    lightButton3Bullian = !lightButton3Bullian;

    if (!lightButton3Bullian) {
        lightButton3.style = "background-color:green";
        light3.classList.remove('visually-hidden');
    }

    else {
        lightButton3.style = "background-color:rgb(255, 54, 54)"
        light3.classList.add('visually-hidden');
    }
})

lightButton4.addEventListener("click", (e) => {

    lightButton4Bullian = !lightButton4Bullian;

    if (!lightButton4Bullian) {
        lightButton4.style = "background-color:green";
        light4.classList.remove('visually-hidden');
    }

    else {
        lightButton4.style = "background-color:rgb(255, 54, 54)"
        light4.classList.add('visually-hidden');
    }
})


lightButton5.addEventListener("click", (e) => {

    lightButton5Bullian = !lightButton5Bullian;

    if (!lightButton5Bullian) {
        lightButton5.style = "background-color:green";
        light5.classList.remove('visually-hidden');
    }

    else {
        lightButton5.style = "background-color:rgb(255, 54, 54)"
        light5.classList.add('visually-hidden');
    }
})



// Телевізор

let tvController = document.querySelector('.tv-controller')

let tvListButtons = document.querySelector('.tv-list')

let tvText = document.querySelector('.tv-text')

let tvButton1 = document.querySelector('.tv-button-1')
let tvButton2 = document.querySelector('.tv-button-2')
let tvButton3 = document.querySelector('.tv-button-3')

let tvHover1 = document.querySelector('.tv-hover-1')
let tvHover2 = document.querySelector('.tv-hover-2')
let tvHover3 = document.querySelector('.tv-hover-3')

let tvChannel1 = document.querySelector('.tv-channel-1')
let tvChannel2 = document.querySelector('.tv-channel-2')
let tvChannel3 = document.querySelector('.tv-channel-3')
let tvChannel4 = document.querySelector('.tv-channel-4')

let tvButtonReturn = document.querySelector('.tv-button-return');

let channelList = document.querySelector('.channel-list');

let tvListButtonsBullian = true;


tvController.addEventListener("click", (e) => {

    tvListButtonsBullian = !tvListButtonsBullian;

    if (!tvListButtonsBullian) {
        tvController.style = "background-color:green";
        tvListButtons.classList.remove('visually-hidden');
        tvText.classList.add('visually-hidden');

    }

    else {
        tvController.style = "background-color:rgb(255, 54, 54)"
        tvListButtons.classList.add('visually-hidden');
        tvText.classList.remove('visually-hidden');
    }
})


function tvChannel1Style1() {
    tvHover1.style.fill = 'yellow';
}

function tvChannel1Style2() {
    tvHover1.style.fill = 'green';
}

function tvChannel1Style3() {
    tvHover1.style.fill = 'orange';
}

function tvChannel1Style4() {
    tvHover1.style.fill = '#6B6B6B';
}

function tvChannel2Style1() {
    tvHover2.style.fill = 'yellow';
}

function tvChannel2Style2() {
    tvHover2.style.fill = 'green';
}

function tvChannel2Style3() {
    tvHover2.style.fill = 'orange';
}

function tvChannel2Style4() {
    tvHover2.style.fill = '#6B6B6B';
}

function tvChannel3Style1() {
    tvHover3.style.fill = 'yellow';
}

function tvChannel3Style2() {
    tvHover3.style.fill = 'green';
}

function tvChannel3Style3() {
    tvHover3.style.fill = 'orange';
}

function tvChannel3Style4() {
    tvHover3.style.fill = '#6B6B6B';
}

function tvChannel1GroupAdd() {
    tvChannel1.addEventListener("click", tvChannel1Style1)
    tvChannel2.addEventListener("click", tvChannel1Style2)
    tvChannel3.addEventListener("click", tvChannel1Style3)
    tvChannel4.addEventListener("click", tvChannel1Style4)
}


function tvChannel1GroupRemove() {
    tvChannel1.removeEventListener("click", tvChannel1Style1)
    tvChannel2.removeEventListener("click", tvChannel1Style2)
    tvChannel3.removeEventListener("click", tvChannel1Style3)
    tvChannel4.removeEventListener("click", tvChannel1Style4)
}



function tvChannel2GroupAdd() {
    tvChannel1.addEventListener("click", tvChannel2Style1)
    tvChannel2.addEventListener("click", tvChannel2Style2)
    tvChannel3.addEventListener("click", tvChannel2Style3)
    tvChannel4.addEventListener("click", tvChannel2Style4)
}


function tvChannel2GroupRemove() {
    tvChannel1.removeEventListener("click", tvChannel2Style1)
    tvChannel2.removeEventListener("click", tvChannel2Style2)
    tvChannel3.removeEventListener("click", tvChannel2Style3)
    tvChannel4.removeEventListener("click", tvChannel2Style4)
}



function tvChannel3GroupAdd() {
    tvChannel1.addEventListener("click", tvChannel3Style1)
    tvChannel2.addEventListener("click", tvChannel3Style2)
    tvChannel3.addEventListener("click", tvChannel3Style3)
    tvChannel4.addEventListener("click", tvChannel3Style4)
}


function tvChannel3GroupRemove() {
    tvChannel1.removeEventListener("click", tvChannel3Style1)
    tvChannel2.removeEventListener("click", tvChannel3Style2)
    tvChannel3.removeEventListener("click", tvChannel3Style3)
    tvChannel4.removeEventListener("click", tvChannel3Style4)
}


tvButton1.addEventListener("click", (e) => {

    tvButton1.style = "background-color:green";

    tvButton2.classList.add('visually-hidden');
    tvButton3.classList.add('visually-hidden');

    channelList.classList.remove('visually-hidden')

    tvButtonReturn.classList.remove("visually-hidden");

    tvChannel1GroupAdd();

    tvChannel2GroupRemove();

    tvChannel3GroupRemove();
})



tvButton2.addEventListener("click", (e) => {

    tvButton2.style = "background-color:green";

    tvButton1.classList.add('visually-hidden');
    tvButton3.classList.add('visually-hidden');

    channelList.classList.remove('visually-hidden')
    tvButtonReturn.classList.remove("visually-hidden");

    tvChannel1GroupRemove()

    tvChannel2GroupAdd();

    tvChannel3GroupRemove();
})


tvButton3.addEventListener("click", (e) => {

    tvButton3.style = "background-color:green";

    tvButton1.classList.add('visually-hidden');
    tvButton2.classList.add('visually-hidden');

    channelList.classList.remove('visually-hidden')
    tvButtonReturn.classList.remove("visually-hidden");

    tvChannel1GroupRemove();

    tvChannel3GroupAdd();

    tvChannel2GroupRemove();
})


tvButtonReturn.addEventListener("click", (e) => {
    tvButton1.style = "background-color:white";
    tvButton2.style = "background-color:white";
    tvButton3.style = "background-color:white";

    tvButton1.classList.remove('visually-hidden');
    tvButton2.classList.remove('visually-hidden');
    tvButton3.classList.remove('visually-hidden');

    tvButtonReturn.classList.add("visually-hidden");
    channelList.classList.add('visually-hidden')
})


// Гараж

let garageController = document.querySelector('.garage-controller')
let garageOpen = document.querySelector('.garage-open');
let garageClose = document.querySelector('.garage-close');
let garageInterval;

garageControllerBullian = true;
garageController.addEventListener("click", (e) => {

    garageControllerBullian = !garageControllerBullian;

    if (!garageControllerBullian) {
        garageOpen.classList.remove('visually-hidden')
        garageController.style = "background-color:green";
        garageClose.classList.add('visually-hidden')
        garageOpen.play();
        setTimeout(() => {
            garageInterval = garageOpen.classList.add('visually-hidden')
        }, 1500);
    }

    else {
        garageInterval = garageOpen.classList.add('visually-hidden')
        garageController.style = "background-color:rgb(255, 54, 54)"
        garageClose.classList.remove('visually-hidden')
        garageClose.play();
    }
})


// Холодильник

let fridgeBlock = document.querySelector('.fridge-block');
let fridgeController = document.querySelector('.fridge-controller')
let fridgeControllerBullian = true;

fridgeController.addEventListener("click", (e) => {
    fridgeControllerBullian = !fridgeControllerBullian

    if (!fridgeControllerBullian) {
        fridgeController.style = "background-color:green"
        fridgeBlock.classList.remove('visually-hidden')
    }

    else {
        fridgeController.style = "background-color:rgb(255, 54, 54)"
        fridgeBlock.classList.add('visually-hidden')
    }
})

let fridgeContent = document.querySelector('.fridge-content');
let fridgeForm = document.querySelector('.fridge-form');
let fridgeFormInput = fridgeForm.querySelector('.fridge-form-input');
let messageList = document.querySelector('.message-list');

fridgeForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let formInputValue = fridgeFormInput.value
    fridgeFormInput.value = '';
    let message = document.createElement('li')
    message.textContent = formInputValue;
    message.classList.add('message-text')
    messageList.appendChild(message)
    message.addEventListener('click', function (evt) {
        message.classList.add('visually-hidden')
    });
});

