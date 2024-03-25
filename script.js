const body = document.getElementById("body");
const btnStart = document.getElementById("startGame");
const inpName = document.getElementById("inputName");
const rotateElement = document.getElementById("rotatingBall");
const timer = document.getElementById("timer");
const count3sec = document.getElementById("countdown3sec");
const mainInput = document.getElementById("home-page");
const mainContent = document.getElementById("main-content");

btnStart.addEventListener("click", () => {
  mainInput.style.display = "none";
  mainContent.style.display = "block";
  body.style.backgroundImage = "linear-gradient(rgb(0, 28, 131), purple)";

  setTimeout(() => {
    setInterval(() => {
      count3sec.textContent = "2";
      setInterval(() => {
        count3sec.textContent = "1";
        setInterval(() => {
          rotateElement.classList.add("rotatesPlanet"); 
          count3sec.style.display = "none";
        }, 700);
      }, 1000);
    }, 1000);
  }, 300);
});



// function checkInput(input) {
//     btnStart.disabled = true;
//     console.log(input);
//     if(input != null){
//         btnStart.disabled = false;
//     } else {
//     }
// }

// inpName.addEventListener('input', function() {
//     checkInput(this.value);
// });
// const canvas = document.getElementById('mainGame');
// const ctx = canvas.getContext('2d');

// var planet = new Image();
// planet.src = 'CLIENTSIDE-MEDIAFILES/img/jupiter.png';
// planet.onload = (()=>{
//     ctx.drawImage(planet, 50, 50, 100, 100);
// });
