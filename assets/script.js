// JavaScript for the portfolio website

// Tell the CSS that JavaScript is working (the "reveal" animation needs this)
document.documentElement.classList.add("js");

// ---------- 1. Show the current year in the footer ----------
document.getElementById("year").textContent = new Date().getFullYear();


// ---------- 2. Menu bar: dark background after scrolling, and the back-to-top button ----------
var topNav = document.getElementById("topNav");
var toTop = document.getElementById("toTop");

function checkScroll() {
  if (window.scrollY > 50) {
    topNav.classList.add("scrolled");
  } else {
    topNav.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

window.addEventListener("scroll", checkScroll);
checkScroll();

toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ---------- 3. Close the mobile menu after clicking a link ----------
var menuLinks = document.querySelectorAll("#mainMenu .nav-link");
var menu = document.getElementById("mainMenu");

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
}


// ---------- 4. Slide-up animation when a section comes into view ----------
var revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("visible");
        observer.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.12 });

  for (var j = 0; j < revealItems.length; j++) {
    observer.observe(revealItems[j]);
  }
} else {
  // Old browsers: just show everything
  for (var k = 0; k < revealItems.length; k++) {
    revealItems[k].classList.add("visible");
  }
}
