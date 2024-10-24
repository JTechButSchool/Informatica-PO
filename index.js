window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var items = document.querySelectorAll(".reveal");
  var iitems = document.querySelectorAll(".ireveal");
  for (let i = 0; i < items.length; i++) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
  for (let i = 0; i < iitems.length; i++) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      iitems[i].classList.add("active");
    } else {
      iitems[i].classList.remove("active");
    }
  }
}