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
