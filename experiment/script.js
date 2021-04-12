// the varibale is the txttype function 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
// https://css-tricks.com/snippets/css/typewriter-effect/ 

//this is what changes the text between each typing a deleting
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';


//this is for the speed of the text
    var that = this;
    var delta = 200 - Math.random() * 250;
//this is for the speed of the text deleting
    if (this.isDeleting) { delta /= 500; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

//this loads the text function when the page is loaded (window.onload) and grabs the text from the html
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        //means we are converting the string into a JSON object by following the JSON specification, where we can then use it in any way we wish - so the strong of text is transformed into

        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

};



// popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }