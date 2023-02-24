let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.classList.contains('hole_has-mole')) {
      dead++;
      document.getElementById('dead').textContent = dead;
      if (dead == 10) {
        alert('Победа!');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
      }
    } else {
      lost++;
      document.getElementById('lost').textContent = lost;
      if (lost == 5) {
        alert('Вы проиграли');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = dead;
        document.getElementById('lost').textContent = lost;
      }
    }
  }
}
