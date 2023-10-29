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