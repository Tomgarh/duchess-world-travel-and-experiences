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


/* =========================================================
   CONTACT FORM
========================================================= */

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


/* =========================================================
   TRAVEL REQUIREMENTS
   DESTINATION + PASSPORT SELECTOR
========================================================= */

const destinationSelect =
    document.getElementById("destinationSelect");

const passportSelect =
    document.getElementById("passportSelect");

const passportDefault =
    document.getElementById("passportDefault");

const passportDynamic =
    document.getElementById("passportDynamic");

const requirementDestinationLabel =
    document.getElementById("requirementDestinationLabel");

const requirementResultTitle =
    document.getElementById("requirementResultTitle");

const requirementResultDescription =
    document.getElementById("requirementResultDescription");

const visaGuidance =
    document.getElementById("visaGuidance");


/* =========================================================
   DESTINATION NAMES
========================================================= */

const destinationNames = {

    "kenya": "Kenya",

    "tanzania": "Tanzania + Zanzibar",

    "south-africa": "South Africa",

    "morocco": "Morocco",

    "egypt": "Egypt",

    "rwanda": "Rwanda",

    "seychelles": "Seychelles",

    "ghana": "Ghana"

};


/* =========================================================
   PASSPORT NAMES
========================================================= */

const passportNames = {

    "usa": "U.S. Passport",

    "nigeria": "Nigerian Passport",

    "uk": "UK Passport",

    "canada": "Canadian Passport",

    "france": "French Passport",

    "germany": "German Passport",

    "italy": "Italian Passport",

    "spain": "Spanish Passport",

    "other": "Passport"

};


/* =========================================================
   DESTINATION-SPECIFIC VISA GUIDANCE
========================================================= */

const visaMessages = {

    "kenya":
        "Check whether your nationality requires a Kenya Electronic Travel Authorisation (eTA), a visa or another entry arrangement before travel.",

    "tanzania":
        "Check the current Tanzania visa and entry requirements that apply to your nationality. Zanzibar follows Tanzania's immigration requirements.",

    "south-africa":
        "Check whether your nationality requires a South African visa and review the current entry requirements before making final travel arrangements.",

    "morocco":
        "Check whether your nationality requires a visa for Morocco and confirm the applicable entry route before travelling.",

    "egypt":
        "Check whether your nationality requires an Egyptian visa and which application route applies to your circumstances.",

    "rwanda":
        "Check the current Rwanda visa and entry requirements that apply to your nationality and travel circumstances.",

    "seychelles":
        "Check the current Seychelles entry requirements and complete any required travel authorisation before departure.",

    "ghana":
        "Check whether your nationality requires a Ghanaian visa and confirm the current entry requirements before travelling."

};


/* =========================================================
   UPDATE TRAVEL REQUIREMENTS
========================================================= */

function updateTravelRequirements() {

    if (
        !destinationSelect ||
        !passportSelect ||
        !passportDefault ||
        !passportDynamic
    ) {
        return;
    }


    const selectedDestination =
        destinationSelect.value;

    const selectedPassport =
        passportSelect.value;


    /* -----------------------------------------
       NOTHING SELECTED
    ----------------------------------------- */

    if (
        !selectedDestination ||
        !selectedPassport
    ) {

        passportDynamic.classList.remove("active");

        passportDefault.classList.add("active");

        return;

    }


    /* -----------------------------------------
       SHOW DYNAMIC RESULT
    ----------------------------------------- */

    passportDefault.classList.remove("active");

    passportDynamic.classList.add("active");


    const destination =
        destinationNames[selectedDestination] ||
        selectedDestination;

    const passport =
        passportNames[selectedPassport] ||
        "Passport";


    /* -----------------------------------------
       UPDATE DESTINATION LABEL
    ----------------------------------------- */

    if (requirementDestinationLabel) {

        requirementDestinationLabel.textContent =
            destination.toUpperCase();

    }


    /* -----------------------------------------
       UPDATE RESULT TITLE
    ----------------------------------------- */

    if (requirementResultTitle) {

        requirementResultTitle.textContent =
            `Travelling to ${destination} with a ${passport}`;

    }


    /* -----------------------------------------
       UPDATE DESCRIPTION
    ----------------------------------------- */

    if (requirementResultDescription) {

        requirementResultDescription.textContent =
            `Travel and entry requirements for ${destination} depend on your passport nationality, travel purpose and individual circumstances. Use this information as general preparation guidance and confirm the latest requirements before travelling.`;

    }


    /* -----------------------------------------
       UPDATE VISA GUIDANCE
    ----------------------------------------- */

    if (visaGuidance) {

        visaGuidance.textContent =
            visaMessages[selectedDestination] ||
            "Check the current visa and entry requirements that apply to your nationality before travelling.";

    }

}


/* =========================================================
   DESTINATION SELECTOR
========================================================= */

if (destinationSelect) {

    destinationSelect.addEventListener(
        "change",
        updateTravelRequirements
    );

}


/* =========================================================
   PASSPORT SELECTOR
========================================================= */

if (passportSelect) {

    passportSelect.addEventListener(
        "change",
        updateTravelRequirements
    );

}


/* =========================================================
   FLOATING HEADER SCROLL EFFECT
========================================================= */

const siteHeader =
    document.querySelector(".site-header");

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

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileNav =
    document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        }
    );


    const mobileNavLinks =
        mobileNav.querySelectorAll("a");


    mobileNavLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileNav.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }
        );

    });

}