// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#6a119e";


function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace('px', '');
    var right = parseInt(rightNumbers, 10)
    console.log(rightNumbers)
        if (right >= 0)
        if (right <= 360) {
      dodger.style.left = `${right + 1}px`
    }
  }

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(leftNumbers)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

 



  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
   
});