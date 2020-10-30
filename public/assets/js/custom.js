
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scroll-up").className = "show-triger";
  } else {
    document.getElementById("scroll-up").className = "";
  }
}