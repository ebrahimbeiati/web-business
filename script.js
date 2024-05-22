

document.querySelectorAll(".feature").forEach((feature) => {
  feature.addEventListener("click", (event) => {
    // Prevent event propagation to avoid triggering the document click event
    event.stopPropagation();

    // Hide all cards
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });

    feature.querySelector(".card").style.display = "block";
  });
});

// Add a click event listener to the document
document.addEventListener("click", () => {
  // Hide all cards when clicking on an empty space
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);





let Navbar = document.querySelector(".navbar");
let Fabars = document.querySelector(".fa-bars");

Fabars.onclick = () => {
  Navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: {
        delay: 700,
        disableOnInteraction: false,
      },
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});