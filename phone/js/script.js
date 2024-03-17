const display = document.querySelector('.display');
const onoffBtn = document.querySelector('.onoffBtn');

function displayOn(para){
    display.classList.toggle('on');
}

onoffBtn.addEventListener('click', displayOn);
