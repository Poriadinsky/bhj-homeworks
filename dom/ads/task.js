const texts = document.getElementsByClassName('rotator__case');
let i = 0;


function getI () {
    if (i === (texts.length - 1)) {
        i = 0;
    } else {
        i++;
    }
    return i;
}

function changeTexts () {
    texts[i].classList.remove('rotator__case_active');
    getI();
    texts[i].style.color = texts[i].dataset.color;    
    texts[i].classList.add('rotator__case_active');
}

function changeSpeed () {
    getI();
    return texts[i].dataset.speed;
}

setTimeout (function run() {
    changeTexts();
    setTimeout(run, 1000);
}, 1000)