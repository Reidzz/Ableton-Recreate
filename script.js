const moreLink = document.querySelector(".dropdown");
const moreNavSection = document.querySelector(".more-section");
const mobileNavLink = document.querySelector(".mobile-nav-link");
const mobileNav = document.querySelector(".mobile-nav");

moreLink.addEventListener("click", function() {
    moreLink.classList.toggle("active");
    moreNavSection.classList.toggle("open");
});

mobileNavLink.addEventListener("click", function() {
    mobileNav.classList.toggle("open");
});

