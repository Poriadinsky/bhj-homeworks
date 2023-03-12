const spam = document.getElementsByClassName('reveal');

let isInViewPort = function(element) {
    const viewPortHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < 0 && elementTop > viewPortHeight) {
        return false;
    } else {
        return true;
    }
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < spam.length; i++) {
        if ( isInViewPort(spam[i]) === true ) {
            spam[i].classList.add('reveal_active');
        } else {
            spam[i].classList.remove('reveal_active');
        }
    }
});