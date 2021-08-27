const moreLink = document.querySelector(".dropdown");
const moreNavSection = document.querySelector(".more-section");

moreLink.addEventListener("click", function() {
    moreLink.classList.toggle("active");
    moreNavSection.classList.toggle("open");
});
