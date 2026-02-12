// @author Nikhil Notse
const Checkbox = document.querySelector(".checkbox");
const hanumanArm = document.querySelector(".hanuman-arm");
const hand = document.querySelector(".fist");
const Hanuman = document.querySelector(".hanuman");
const Audio = document.querySelector("#audio");
const switchAudio = document.querySelector("#audio-switch");
const Wrapper = document.querySelector(".wrapper");
const lyricsContainer = document.getElementById("lyrics-1");
const proposal_text = document.getElementById("proposal-text");


let count = 0;
let sec = 2000;

Checkbox.addEventListener("click", Checked);
// document.addEventListener("DOMContentLoaded", () => {
//   swal(
//     "Hey You can't say No To Me 😁",
//     "Hello girl , The most handsome man in the world wants to be your valentine.",
//     {
//       buttons: {
//         Play: "Click here to proceed",
//       },
//     }
//   ).then((value) => {
//     switch (value) {
//       default:
//         // Audio.play();
//         // lyricsContainer.style.display = "block";
//     }
//   });
// });

function Checked() {
  switchAudio.play();
  if (Checkbox.checked === true) {
    // Audio.play();
    setTimeout(function () {
      console.log("1");
      hand.style.display = "none";
      hanumanArm.style.opacity = "1";
      hanumanArm.classList.remove("arm-move");
      
    }, 1000);
  } else {
    if (count >= 0) {
      Hanuman.style.transform = "translate(-30px, -5vh) rotate(-5deg) scaleX(1)";
      sec = 2100;
      setTimeout(function () {
        Hanuman.style.transform =
          "translate(0, 30vh) rotate(-5deg) scaleX(1)";
        Wrapper.style.display = "none";
      }, 4400);
      hanumanArm.style.transition = "transform 1s ease-in";
       proposal_text.textContent = 'Will you be my valentine?'
    }
    Wrapper.style.display = "block";
    count = count + 1;
    hanumanArm.classList.add("arm-move");
    hanumanArm.style.transition = "transform 1.5s ease-in";
    // Audio.pause();
    setTimeout(function () {
      console.log("2");
      hanumanArm.style.opacity = "0";
      hand.style.display = "block";
      proposal_text.textContent = '“Shukriya ji 😎”'
      Checkbox.click();
    }, sec);
  }
}
