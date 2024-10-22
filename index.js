window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var items = document.querySelectorAll(".reveal");
  for (let i=0;i<items.length;i++) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {  
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}