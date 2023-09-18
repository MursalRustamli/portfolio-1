const nav = document.querySelector("#header-nav");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

window.onscroll = function () {
  scrollFunction();
};

// Nav scroll tablet

const nav_list_tablet = document.querySelector(".nav-list-tablet");
const nav_btn = document.querySelector(".nav-btn");

function navHeight() {
  nav_list_tablet.classList.toggle("nav-scroll-height");
}

function navBg() {
  nav_list_tablet.classList.toggle("nav-scroll-bg");
}
nav_btn.addEventListener("click", function () {
  setTimeout(navHeight, 700);
  setTimeout(navBg, 1500);
});

// Section Portfolio

const portfolio_carts = document.querySelector(".portfolio-carts");
const portfolio_list = document.querySelector(".portfolio-list");

for (let element of portfolio_list.children) {
  element.addEventListener("click", function () {
    if (element.className.indexOf("active") < 0) {
      for (let element of portfolio_list.children) {
        element.classList.remove("active");
      }
      element.classList.add("active");
    }
  });
}

for (let element of portfolio_list.children) {
  element.addEventListener("click", function () {
    for (let element of portfolio_carts.children) {
      element.style.display = "block";
      element.classList.add("animate__animated");
      element.classList.add("animate__backInLeft");
    }
    if (
      element.className.indexOf("active") >= 0 &&
      element.className.indexOf("list-vector") >= 0
    ) {
      for (let i = 0; i < portfolio_carts.children.length; i++) {
        if (
          portfolio_carts.children[i].children[1].innerText !==
          "3D Helmet Design"
        ) {
          portfolio_carts.children[i].style.display = "none";
        }
      }
    }
    if (
      element.className.indexOf("active") >= 0 &&
      element.className.indexOf("list-raster") >= 0
    ) {
      for (let i = 0; i < portfolio_carts.children.length; i++) {
        if (
          portfolio_carts.children[i].children[1].innerText !==
          "2D Vinyl Design"
        ) {
          portfolio_carts.children[i].style.display = "none";
        }
      }
    }
    if (
      element.className.indexOf("active") >= 0 &&
      element.className.indexOf("list-ui") >= 0
    ) {
      for (let i = 0; i < portfolio_carts.children.length; i++) {
        if (
          portfolio_carts.children[i].children[1].innerText !==
          "Creative Poster Design"
        ) {
          portfolio_carts.children[i].style.display = "none";
        }
      }
    }
    if (
      element.className.indexOf("active") >= 0 &&
      element.className.indexOf("list-print") >= 0
    ) {
      for (let i = 0; i < portfolio_carts.children.length; i++) {
        if (
          portfolio_carts.children[i].children[1].innerText !==
          "Embosed Logo Design"
        ) {
          portfolio_carts.children[i].style.display = "none";
        }
      }
    }
  });
}

