var smile = document.getElementById("smile");

var moving = false;

smile.addEventListener("mousedown", initialClick, false);


// this is the position of the cursor upon pick up of image
function move(e){

  var newX = e.clientX - 240;
  var newY = e.clientY - 240;

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

//second moveable image

var smile = document.getElementById("move");

var moving = false;

smile.addEventListener("mousedown", initialClick, false);


// this is the position of the cursor upon pick up of image
function move(e){

  var newX = e.clientX - 240;
  var newY = e.clientY - 240;

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

