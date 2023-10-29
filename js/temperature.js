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
            createIntervalUp()
            temperatureButton.style = "background-color:green";
            smoke.classList.remove('visually-hidden');
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

