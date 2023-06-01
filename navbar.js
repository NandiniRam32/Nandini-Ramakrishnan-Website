function toggleAboutMe() {
    document.getElementById("myDropdownAboutMe").classList.toggle("show");
}

function toggleArtPage() {
    document.getElementById("myDropdownArtPage").classList.toggle("show");
}

function togglePhotographyPage() {
    document.getElementById("myDropdownPhotographyPage").classList.toggle("show");
}

window.onscroll = function() {
    navbarStickyness()
};

var navbar = document.getElementById("navbar");
var navbarSubsection = document.getElementById("navbarSubsection");
var sticky = navbar.offsetTop;

function navbarStickyness() {
    navbar.classList.add("stickyMainNavbar");
    if (window.pageYOffset <= sticky) {
        navbarSubsection.classList.add("stickyNavbarSubsection");
    } else {
        navbarSubsection.classList.remove("stickyNavbarSubsection");
        navbarSubsection.classList.add("stickyNavbarSubsectionGone");
    }
}