/* =========================================================
REQUEST TRIP DEMO FORM
========================================================= */

const tripRequestForm = document.getElementById("tripRequestForm");
const tripRequestSuccess = document.getElementById("tripRequestSuccess");

if (tripRequestForm && tripRequestSuccess) {


tripRequestForm.addEventListener("submit", function (event) {

    event.preventDefault();

    tripRequestForm.style.display = "none";

    tripRequestSuccess.hidden = false;

    tripRequestSuccess.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

}
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        contactForm.hidden = true;
        contactSuccess.hidden = false;

        contactSuccess.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}

const passportSelect = document.getElementById("passportSelect");

const passportDefault = document.getElementById("passportDefault");
const passportNigeria = document.getElementById("passportNigeria");
const passportUsa = document.getElementById("passportUsa");
const passportUk = document.getElementById("passportUk");
const passportEurope = document.getElementById("passportEurope");
const passportOther = document.getElementById("passportOther");

const passportResults = [
    passportDefault,
    passportNigeria,
    passportUsa,
    passportUk,
    passportEurope,
    passportOther
];

if (passportSelect) {

    passportSelect.addEventListener("change", function () {

        passportResults.forEach(function (result) {

            if (result) {
                result.classList.remove("active");
            }

        });


        const selectedPassport = passportSelect.value;


        if (selectedPassport === "") {

            passportDefault.classList.add("active");

        }


        else if (selectedPassport === "nigeria") {

            passportNigeria.classList.add("active");

        }


        else if (selectedPassport === "usa") {

            passportUsa.classList.add("active");

        }


        else if (selectedPassport === "uk") {

            passportUk.classList.add("active");

        }


        else if (
            selectedPassport === "france" ||
            selectedPassport === "germany" ||
            selectedPassport === "italy" ||
            selectedPassport === "spain"
        ) {

            passportEurope.classList.add("active");

        }


        else if (selectedPassport === "other") {

            passportOther.classList.add("active");

        }

    });

}

/* =========================================================
   FLOATING HEADER SCROLL EFFECT
========================================================= */

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {

    const updateHeaderOnScroll = () => {

        if (window.scrollY > 40) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    };


    updateHeaderOnScroll();


    window.addEventListener(
        "scroll",
        updateHeaderOnScroll,
        { passive: true }
    );

}
/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mobileNav.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    const mobileNavLinks = mobileNav.querySelectorAll("a");

    mobileNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}