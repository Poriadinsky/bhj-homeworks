const spam = document.getElementsByClassName('reveal');

let isInViewPort = function(element) {
    const viewPortHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < viewPortHeight && elementTop > -element.offsetHeight && !element.classList.contains('reveal_active')) {
        return true;
    } else {
        return false;
    }
}

function revealElements() {
    for (let i = 0; i < spam.length; i++) {
        if (isInViewPort(spam[i])) {
            spam[i].classList.add('reveal_active');
        }
    }
}

window.addEventListener('scroll', revealElements);
revealElements();
