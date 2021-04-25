var smile = document.getElementById("smile");

var moving = false;

smile.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 30;
  var newY = e.clientY - 30;

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