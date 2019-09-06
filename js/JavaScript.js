wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

const myButton = document.querySelector("#scroll-up");
window.addEventListener ("scroll", scrollFunction);
 function scrollFunction() {
     if ( window.pageYOffset > 2000) {
        myButton.style.display = "block";

     }
     else {
        myButton.style.display = "none";

     }
 }
myButton.addEventListener("click", backToTop);
function backToTop() {
    window.scrollTo(0, 0);
}

/*
$('.onclick').button('option1').addClass('box shadow')*/