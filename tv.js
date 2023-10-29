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
