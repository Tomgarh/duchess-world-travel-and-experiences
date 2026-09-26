/* =========================================================
   REQUEST TRIP DEMO FORM
========================================================= */

const tripRequestForm =
    document.getElementById("tripRequestForm");

const tripRequestSuccess =
    document.getElementById("tripRequestSuccess");


if (tripRequestForm && tripRequestSuccess) {

    tripRequestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            tripRequestForm.style.display = "none";

            tripRequestSuccess.hidden = false;

            tripRequestSuccess.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const contactSuccess =
    document.getElementById("contactSuccess");


if (contactForm && contactSuccess) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            contactForm.hidden = true;

            contactSuccess.hidden = false;

            contactSuccess.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

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
    document.getElementById(
        "requirementDestinationLabel"
    );

const requirementResultTitle =
    document.getElementById(
        "requirementResultTitle"
    );

const requirementResultDescription =
    document.getElementById(
        "requirementResultDescription"
    );

const entryGuidance =
    document.getElementById(
        "entryGuidance"
    );

const passportGuidance =
    document.getElementById(
        "passportGuidance"
    );

const documentGuidance =
    document.getElementById(
        "documentGuidance"
    );

const healthGuidance =
    document.getElementById(
        "healthGuidance"
    );

const importantGuidance =
    document.getElementById(
        "importantGuidance"
    );


/* =========================================================
   DESTINATION NAMES
========================================================= */

const destinationNames = {

    kenya:
        "Kenya",

    tanzania:
        "Tanzania + Zanzibar",

    "south-africa":
        "South Africa",

    morocco:
        "Morocco",

    egypt:
        "Egypt",

    rwanda:
        "Rwanda",

    seychelles:
        "Seychelles",

    ghana:
        "Ghana",

    "cape-verde":
        "Cape Verde"

};


/* =========================================================
   PASSPORT NAMES
========================================================= */

const passportNames = {

    usa:
        "U.S. Passport",

    nigeria:
        "Nigerian Passport",

    uk:
        "UK Passport",

    canada:
        "Canadian Passport",

    france:
        "French Passport",

    germany:
        "German Passport",

    italy:
        "Italian Passport",

    spain:
        "Spanish Passport",

    other:
        "Passport"

};


/* =========================================================
   TRAVEL REQUIREMENTS DATABASE
========================================================= */

const travelRequirements = {


    /* =====================================================
       KENYA
    ====================================================== */

    kenya: {

        entry: {

            usa:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            nigeria:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            uk:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            canada:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            france:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            germany:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            italy:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            spain:
                "An approved Kenya Electronic Travel Authorisation (eTA) is required before travel.",

            other:
                "Most foreign visitors require an approved Kenya eTA before travelling."
        },


        passport:
            "Passport must be valid for at least 6 months after the planned date of arrival in Kenya and must have at least one blank page.",


        documents:
            "For an eTA application, prepare a passport-style photo or selfie, email and telephone contact details, arrival and departure itinerary, accommodation booking confirmation and a payment method. Additional documents may apply depending on the purpose of travel.",


        health:
            "Health and vaccination requirements can depend on your route and recent travel history. A Yellow Fever vaccination certificate may be required for travellers arriving from Yellow Fever risk areas.",


        important:
            "Kenya requires visitors to obtain the approved eTA before starting their journey. The eTA is valid for travel within 90 days of issuance, while the permitted stay is determined at entry."
    },


    /* =====================================================
       TANZANIA + ZANZIBAR
    ====================================================== */

    tanzania: {

        entry: {

            nigeria:
                "Nigerian passport holders should obtain the appropriate Tanzania tourist visa before travel. Tanzania Immigration announced on September 25, 2026 that Nigerian nationals were removed from the referred-visa category.",

            usa:
                "U.S. passport holders travelling for tourism generally require a Tanzania tourist visa. A multiple-entry visa may apply depending on the traveler's circumstances.",

            uk:
                "UK passport holders generally require a tourist visa for Tanzania.",

            canada:
                "Canadian passport holders generally require a tourist visa for Tanzania.",

            france:
                "French passport holders generally require a tourist visa for Tanzania.",

            germany:
                "German passport holders generally require a tourist visa for Tanzania.",

            italy:
                "Italian passport holders generally require a tourist visa for Tanzania.",

            spain:
                "Spanish passport holders generally require a tourist visa for Tanzania.",

            other:
                "Tanzania visa requirements depend on nationality. Eligible travellers can use Tanzania's official online visa system."
        },


        passport:
            "Passport should have at least 6 months validity and at least one unused visa page for immigration purposes.",


        documents:
            "Prepare your passport biodata page, passport photograph where required, travel itinerary, accommodation details and return or onward travel information. Visa applicants may be asked for additional supporting documentation.",


        health:
            "Health and vaccination requirements depend on your travel history and route. Travellers arriving from Yellow Fever risk areas may need a valid Yellow Fever vaccination certificate.",


        important:
            "Tanzania's immigration rules can distinguish between visa-required, visa-exempt and special-category travellers. Confirm your current nationality-specific position through Tanzania Immigration before departure. Zanzibar operates under Tanzania's immigration framework."
    },


    /* =====================================================
       SOUTH AFRICA
    ====================================================== */

    "south-africa": {

        entry: {

            nigeria:
                "Nigerian ordinary passport holders require a South African visitor visa before travelling for tourism.",

            usa:
                "U.S. passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            uk:
                "UK passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            canada:
                "Canadian passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            france:
                "French passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            germany:
                "German passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            italy:
                "Italian passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            spain:
                "Spanish passport holders may visit South Africa without a visa for qualifying short visits, subject to the applicable conditions.",

            other:
                "South African visa requirements depend on nationality. Check the official visa-exempt country list before travelling."
        },


        passport:
            "Travellers must hold a valid machine-readable passport or accepted travel document. Visa-required travellers must obtain the appropriate visa before travelling.",


        documents:
            "Visa applicants may need the prescribed application documentation, passport, proof of accommodation, itinerary, financial/supporting documents and other evidence requested by South African authorities.",


        health:
            "Yellow Fever documentation may be required depending on the countries visited before entering South Africa. Check your route and travel history before departure.",


        important:
            "South Africa does not issue ordinary visitor visas at ports of entry. Travellers who require visas must obtain them before boarding."
    },


    /* =====================================================
       MOROCCO
    ====================================================== */

    morocco: {

        entry: {

            nigeria:
                "Nigerian passport holders should check their eligibility through Morocco's official Accès Maroc system. A visa or electronic visa route may apply depending on the traveller's circumstances.",

            usa:
                "U.S. passport holders are generally visa-exempt for qualifying short tourist visits.",

            uk:
                "UK passport holders are generally visa-exempt for qualifying short tourist visits.",

            canada:
                "Canadian passport holders are generally visa-exempt for qualifying short tourist visits.",

            france:
                "French passport holders are generally visa-exempt for qualifying short tourist visits.",

            germany:
                "German passport holders are generally visa-exempt for qualifying short tourist visits.",

            italy:
                "Italian passport holders are generally visa-exempt for qualifying short tourist visits.",

            spain:
                "Spanish passport holders are generally visa-exempt for qualifying short tourist visits.",

            other:
                "Morocco's entry requirements depend on nationality, residence and travel circumstances. Use the official Accès Maroc eligibility checker."
        },


        passport:
            "Carry a valid ordinary passport and ensure it covers the intended period of travel. Visa and eVisa applicants may have additional document-validity requirements.",


        documents:
            "Depending on the entry route, travellers may need passport information, accommodation details, flight itinerary, proof of funds, travel insurance and other supporting documents.",


        health:
            "Check current Moroccan health and vaccination requirements based on your route and recent travel history.",


        important:
            "Morocco uses the official Accès Maroc platform to determine eligibility for eVisa and electronic travel authorisation routes. Eligibility can depend on nationality, residence and other conditions."
    },


    /* =====================================================
       EGYPT
    ====================================================== */

    egypt: {

        entry: {

            nigeria:
                "Nigerian passport holders are not currently listed among the nationalities eligible to apply for Egypt's tourist e-Visa through the official portal. Confirm the applicable visa route with the Egyptian authorities or relevant consular mission before booking.",

            usa:
                "U.S. passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            uk:
                "UK passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            canada:
                "Canadian passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            france:
                "French passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            germany:
                "German passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            italy:
                "Italian passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            spain:
                "Spanish passport holders are eligible to apply for an Egyptian tourist e-Visa through the official portal.",

            other:
                "Egypt's e-Visa system is available only to listed nationalities. Check the official eligibility list before applying."
        },


        passport:
            "Passport must be valid for at least 6 months from the date of arrival in Egypt.",


        documents:
            "Eligible e-Visa travellers should carry a printed copy of the e-Visa, travel itinerary, accommodation or hotel details and any supporting invitation or business documentation applicable to the visit.",


        health:
            "Check current Egyptian health requirements based on your itinerary and recent travel history.",


        important:
            "Egypt's official e-Visa portal lists the nationalities eligible for online tourist e-Visas. Holding a passport from a country that requires a visa does not automatically mean the traveller can use the e-Visa system."
    },


    /* =====================================================
       RWANDA
    ====================================================== */

    rwanda: {

        entry: {

            nigeria:
                "Nigerian passport holders can use Rwanda's applicable visitor visa arrangements. Rwanda provides visa-on-arrival and online visa options, with special visa-waiver arrangements for many African Union nationals.",

            usa:
                "U.S. passport holders can obtain a visitor visa on arrival or apply through Rwanda's online visa system.",

            uk:
                "UK passport holders can obtain a visitor visa on arrival or apply through Rwanda's online visa system.",

            canada:
                "Canadian passport holders can obtain a visitor visa on arrival or apply through Rwanda's online visa system.",

            france:
                "French passport holders benefit from Rwanda's visa-waiver arrangements applicable to qualifying French nationals.",

            germany:
                "German passport holders benefit from Rwanda's visa-waiver arrangements applicable to qualifying German nationals.",

            italy:
                "Italian passport holders benefit from Rwanda's applicable visa-waiver arrangements.",

            spain:
                "Spanish passport holders benefit from Rwanda's applicable visa-waiver arrangements.",

            other:
                "Rwanda offers visa-on-arrival and online visitor visa arrangements for many nationalities."
        },


        passport:
            "A genuine accepted travel document should be valid for at least 6 months.",


        documents:
            "Travellers should have accommodation details, return or onward travel information and sufficient funds for the stay. Immigration may request supporting evidence.",


        health:
            "Travellers arriving from Yellow Fever endemic countries may be required to present a valid Yellow Fever vaccination certificate. This is particularly relevant to travellers arriving from Nigeria.",


        important:
            "Rwanda allows eligible visitors to obtain certain visitor visas on arrival or online. Visa validity and fees depend on the applicable category and nationality."
    },


    /* =====================================================
       SEYCHELLES
    ====================================================== */

    seychelles: {

        entry: {

            usa:
                "Seychelles is visa-free for U.S. passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            nigeria:
                "Seychelles is visa-free for Nigerian passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            uk:
                "Seychelles is visa-free for UK passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            canada:
                "Seychelles is visa-free for Canadian passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            france:
                "Seychelles is visa-free for French passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            germany:
                "Seychelles is visa-free for German passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            italy:
                "Seychelles is visa-free for Italian passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            spain:
                "Seychelles is visa-free for Spanish passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

            other:
                "Seychelles generally does not require a visa for visitors, but all travellers must complete the required travel authorisation before departure."
        },


        passport:
            "Passport or accepted travel document must be valid for the period of the intended stay until the traveller returns to their country of origin or residence.",


        documents:
            "Travellers must have a valid return or onward ticket, confirmed accommodation and sufficient funds. Seychelles specifies a minimum of US$150 or equivalent per day.",


        health:
            "Health requirements depend on your travel history. Additional vaccination documentation may apply depending on the countries you have recently visited.",


        important:
            "A visa is not generally required, but travellers must complete the Seychelles Travel Authorisation and satisfy the entry conditions before receiving a visitor's permit on arrival."
    },


    /* =====================================================
       GHANA
    ====================================================== */

    ghana: {

        entry: {

            nigeria:
                "Nigerian passport holders benefit from ECOWAS visa-free arrangements for qualifying visits to Ghana. The applicable maximum stay and entry conditions should still be confirmed before travel.",

            usa:
                "U.S. passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            uk:
                "UK passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            canada:
                "Canadian passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            france:
                "French passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            germany:
                "German passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            italy:
                "Italian passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            spain:
                "Spanish passport holders generally require a Ghanaian visa for tourism unless another exemption applies.",

            other:
                "Ghana's visa requirements depend on nationality. Check Ghana's official visa and visa-free country information before travelling."
        },


        passport:
            "Carry a valid passport that meets Ghana's immigration and airline requirements.",


        documents:
            "Visa-required travellers should prepare their passport, visa documentation, itinerary, accommodation information and any supporting documents requested by Ghanaian authorities.",


        health:
            "A Yellow Fever vaccination certificate is particularly important for travellers arriving from countries where Yellow Fever is endemic, including Nigeria.",


        important:
            "Ghana's Ministry of Foreign Affairs maintains an official visa-free country list. ECOWAS nationals benefit from regional visa-free arrangements for qualifying visits."
    },


    /* =====================================================
       CAPE VERDE
    ====================================================== */

    "cape-verde": {

        entry: {

            nigeria:
                "Nigerian passport holders are currently listed among the nationalities exempt from a Cape Verde visa for stays of up to 90 days.",

            usa:
                "U.S. passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            uk:
                "UK passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            canada:
                "Canadian passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            france:
                "French passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            germany:
                "German passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            italy:
                "Italian passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            spain:
                "Spanish passport holders are currently listed among Cape Verde's visa-exempt nationalities for qualifying short stays.",

            other:
                "Cape Verde maintains official visa-exempt and visa-required nationality lists. Check your passport against the official list before travel."
        },


        passport:
            "Carry a valid passport that meets Cape Verde's entry requirements and the applicable validity conditions for your nationality.",


        documents:
            "All foreign travellers must pre-register their trip through Cape Verde's EASE system. Depending on nationality, the traveller may also need a visa and must pay the applicable Airport Security Tax (TSA).",


        health:
            "Check current health and vaccination requirements based on your travel history and itinerary.",


        important:
            "Visa-exempt travellers are still required to complete the EASE pre-registration process before travelling. Cape Verde advises travellers to complete the process and any applicable TSA payment before arrival."
    }

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

        passportDynamic.classList.remove(
            "active"
        );

        passportDefault.classList.add(
            "active"
        );

        return;
    }


    /* -----------------------------------------
       GET DESTINATION DATA
    ----------------------------------------- */

    const destinationData =
        travelRequirements[
            selectedDestination
        ];


    if (!destinationData) {

        passportDynamic.classList.remove(
            "active"
        );

        passportDefault.classList.add(
            "active"
        );

        return;
    }


    /* -----------------------------------------
       GET DESTINATION NAME
    ----------------------------------------- */

    const destination =
        destinationNames[
            selectedDestination
        ] ||
        selectedDestination;


    /* -----------------------------------------
       GET PASSPORT NAME
    ----------------------------------------- */

    const passport =
        passportNames[
            selectedPassport
        ] ||
        "Passport";


    /* -----------------------------------------
       GET ENTRY INFORMATION
    ----------------------------------------- */

    const entry =
        destinationData.entry[
            selectedPassport
        ] ||
        destinationData.entry.other;


    /* -----------------------------------------
       SHOW DYNAMIC RESULT
    ----------------------------------------- */

    passportDefault.classList.remove(
        "active"
    );

    passportDynamic.classList.add(
        "active"
    );


    /* -----------------------------------------
       DESTINATION LABEL
    ----------------------------------------- */

    if (requirementDestinationLabel) {

        requirementDestinationLabel.textContent =
            destination.toUpperCase();

    }


    /* -----------------------------------------
       RESULT TITLE
    ----------------------------------------- */

    if (requirementResultTitle) {

        requirementResultTitle.textContent =
            `${destination} — ${passport}`;

    }


    /* -----------------------------------------
       RESULT DESCRIPTION
    ----------------------------------------- */

    if (requirementResultDescription) {

        requirementResultDescription.textContent =
            `Travel-planning guidance for ${passport} holders travelling to ${destination}. Requirements may vary according to travel purpose, length of stay, route and individual circumstances.`;

    }


    /* -----------------------------------------
       ENTRY / VISA
    ----------------------------------------- */

    if (entryGuidance) {

        entryGuidance.textContent =
            entry;

    }


    /* -----------------------------------------
       PASSPORT
    ----------------------------------------- */

    if (passportGuidance) {

        passportGuidance.textContent =
            destinationData.passport;

    }


    /* -----------------------------------------
       DOCUMENTS
    ----------------------------------------- */

    if (documentGuidance) {

        documentGuidance.textContent =
            destinationData.documents;

    }


    /* -----------------------------------------
       HEALTH
    ----------------------------------------- */

    if (healthGuidance) {

        healthGuidance.textContent =
            destinationData.health;

    }


    /* -----------------------------------------
       IMPORTANT
    ----------------------------------------- */

    if (importantGuidance) {

        importantGuidance.textContent =
            destinationData.important;

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
    document.querySelector(
        ".site-header"
    );


if (siteHeader) {

    const updateHeaderOnScroll = () => {

        if (window.scrollY > 40) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    };


    updateHeaderOnScroll();


    window.addEventListener(
        "scroll",
        updateHeaderOnScroll,
        {
            passive: true
        }
    );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );

const mobileNav =
    document.querySelector(
        ".mobile-nav"
    );


if (menuToggle && mobileNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileNav.classList.toggle(
                    "active"
                );


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );

        }
    );


    const mobileNavLinks =
        mobileNav.querySelectorAll(
            "a"
        );


    mobileNavLinks.forEach(
        function (link) {

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

        }
    );

}