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