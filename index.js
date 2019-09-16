// Your code goes here

let wait = document.querySelector("#text")
document.addEventListener("DOMContentLoaded", function() {
  wait.innerHTML = `<p id="text">This is really cool!</p>`;
  console.log("The DOM has loaded")
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

//
// <p id="text">JavaScript is so cool. It lets me add text to my page programmatically.</p>
//
// <p id="text">JavaScript is so cool. It lets me add text to my page programmatically.</p>
