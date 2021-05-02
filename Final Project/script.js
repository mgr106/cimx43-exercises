// var cont = document.getElementById('container');
// cont.onmousemove = applyCustomPointer;

// var customPointer = document.getElementById('customPointer');

// function applyCustomPointer (event) {
//     customPointer.style.left = event.clientX - (customPointer.offsetWidth / 2) + 'px';
//     customPointer.style.top = event.clientY - (customPointer.offsetHeight / 2) + 'px';
// }

var smile = document.getElementById("smile");

var moving = false;

smile.addEventListener("mousedown", initialClick, false);


// this is the position of the cursor upon pick up of image
function move(e){

  var newX = e.clientX - 50;
  var newY = e.clientY - 50;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}