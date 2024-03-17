const functionImg = document.querySelector(".functionImg");
const controls = document.querySelector(".controls");
const callEdu = document.querySelector(".callEdu");


function clickEvent(para) {
    functionImg.classList.add("off");
    callEdu.classList.remove("off");

}

function actionCancel(para){
    console.dir(para);
    para.preventDefault();
}

functionImg.children[0].addEventListener('click',clickEvent);

controls.children[2].addEventListener('click', actionCancel);