

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


