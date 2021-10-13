const arrowLeft = document.querySelector('.left-arrow');
const arrowRight = document.querySelector('.right-arrow');

const modelPlaid = document.querySelector('.model-plaid');
const model3 = document.querySelector('.model-3');
const modelX = document.querySelector('.model-x');
const modelY = document.querySelector('.model-y');



let slideNum = 1;
console.log(slideNum);



function hideAll () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
}

function showAll () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
    document.querySelector(".gallery-num").textContent = slideNum;
}

// function fadeIn (className) {
//     for (let i = 100; i >= 1; i--){
//         setTimeout(2){
//         document.getElementById(`.${className}`).style.opacity = `${i}%`
//     }
// }




arrowRight.addEventListener('click', function () {
    if(slideNum < 4) {
        hideAll();
        slideNum++;
        showAll();
    }
})

arrowLeft.addEventListener('click', function () {
    if(slideNum > 1) {
        hideAll();
        slideNum--;
        showAll();

    }
})

function modelsHide () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.toggle("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.toggle('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.toggle('hidden')
}

function modelsShow () {
    document.querySelector(`.gallery-cars--${slideNum}`).classList.remove("hidden")
    document.querySelector(`.model-name--${slideNum}`).classList.remove('hidden')
    document.querySelector(`.model-about--${slideNum}`).classList.remove('hidden')
}



modelPlaid.addEventListener('click', function () {
    modelsHide();
    slideNum = 1;
    modelsShow();
    document.querySelector(".gallery-num").textContent = slideNum;
})

model3.addEventListener('click', function () {
    modelsHide();
    slideNum = 2;
    modelsShow();
    document.querySelector(".gallery-num").textContent = slideNum;
})

modelX.addEventListener('click', function () {
    modelsHide();
    slideNum = 3;
    modelsShow();
    document.querySelector(".gallery-num").textContent = slideNum;
})

modelY.addEventListener('click', function () {
    modelsHide();
    slideNum = 4;
    modelsShow();
    document.querySelector(".gallery-num").textContent = slideNum;
})


