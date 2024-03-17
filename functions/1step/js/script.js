const greeting = document.querySelector('.greeting');
const startBtn = document.querySelector('.startBtn');

let count = 0;
const contents = ["Hi","You can click anything on this page." ,"Let's start"];

const playHandler = () => {
    count++;
    console.log("timer start" + count);
    greetingChange();

}


function greetingTimer(para){
    setTimeout(playHandler,3000);
}

window.addEventListener('load',greetingTimer);

///// click part
function greetingChange(para) {
    if(count < 3 && count > 0){
        greeting.innerText = contents[count];
        // greetingTimer();
    } else {
        greeting.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }
}

document.addEventListener('click',() => {
    count++;
    console.log(count);
    // clearInterval(greetingTimer);

    greetingChange();
});