const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let cookieWidth = 200;
let cookieHeight = 150;

cookie.addEventListener('click', function() {
  counter.textContent = parseInt(counter.textContent) + 1;
  if (cookieWidth === 200) {
    cookieWidth = 250;
    cookieHeight = 180;
  } else {
    cookieWidth = 200;
    cookieHeight = 130;
  }

  cookie.style.width = cookieWidth + 'px';
  cookie.style.height = cookieHeight + 'px';
});