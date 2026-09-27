/* =========================================================
   DUCHESS WORLD TRAVEL & EXPERIENCES
   MAIN JAVASCRIPT
========================================================= */


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
   TRAVEL REQUIREMENTS CHECKER
   PASSPORT → DESTINATION
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

const financialGuidance =
    document.getElementById(
        "financialGuidance"
    );

const importantGuidance =
    document.getElementById(
        "importantGuidance"
    );


/* =========================================================
   DESTINATION NAMES
========================================================= */

const destinationNames = {

    nigeria:
        "Nigeria",

    liberia:
        "Liberia",

    ghana:
        "Ghana",

    senegal:
        "Senegal",

    "sierra-leone":
        "Sierra Leone",

    gambia:
        "The Gambia",

    guinea:
        "Guinea",

    "guinea-bissau":
        "Guinea-Bissau",

    "cote-divoire":
        "Côte d'Ivoire",

    benin:
        "Benin",

    togo:
        "Togo",

    "cape-verde":
        "Cabo Verde",

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

    other:
        "Other Destination"

};


/* =========================================================
   PASSPORT NAMES
========================================================= */

const passportNames = {

    nigeria:
        "Nigerian Passport",

    ghana:
        "Ghanaian Passport",

    liberia:
        "Liberian Passport",

    senegal:
        "Senegalese Passport",

    "sierra-leone":
        "Sierra Leonean Passport",

    gambia:
        "Gambian Passport",

    guinea:
        "Guinean Passport",

    "guinea-bissau":
        "Guinea-Bissau Passport",

    "cote-divoire":
        "Côte d'Ivoire Passport",

    benin:
        "Beninese Passport",

    togo:
        "Togolese Passport",

    "cape-verde":
        "Cabo Verdean Passport",

    "south-africa-passport":
        "South African Passport",

    "kenya-passport":
        "Kenyan Passport",

    "tanzania-passport":
        "Tanzanian Passport",

    "rwanda-passport":
        "Rwandan Passport",

    "ethiopia-passport":
        "Ethiopian Passport",

    "uganda-passport":
        "Ugandan Passport",

    uk:
        "UK Passport",

    france:
        "French Passport",

    germany:
        "German Passport",

    italy:
        "Italian Passport",

    spain:
        "Spanish Passport",

    netherlands:
        "Dutch Passport",

    belgium:
        "Belgian Passport",

    switzerland:
        "Swiss Passport",

    austria:
        "Austrian Passport",

    sweden:
        "Swedish Passport",

    norway:
        "Norwegian Passport",

    denmark:
        "Danish Passport",

    finland:
        "Finnish Passport",

    ireland:
        "Irish Passport",

    portugal:
        "Portuguese Passport",

    poland:
        "Polish Passport",

    "czech-republic":
        "Czech Passport",

    greece:
        "Greek Passport",

    usa:
        "U.S. Passport",

    canada:
        "Canadian Passport",

    mexico:
        "Mexican Passport",

    china:
        "Chinese Passport",

    japan:
        "Japanese Passport",

    "south-korea":
        "South Korean Passport",

    india:
        "Indian Passport",

    singapore:
        "Singaporean Passport",

    australia:
        "Australian Passport",

    "new-zealand":
        "New Zealand Passport",

    other:
        "Other Passport"

};


/* =========================================================
   PASSPORT GROUPS
========================================================= */

const ecowasPassports = [

    "nigeria",
    "ghana",
    "liberia",
    "senegal",
    "sierra-leone",
    "gambia",
    "guinea",
    "guinea-bissau",
    "cote-divoire",
    "benin",
    "togo",
    "cape-verde"

];


const eastAfricanPassports = [

    "kenya-passport",
    "tanzania-passport",
    "rwanda-passport",
    "uganda-passport"

];


const africanPassports = [

    ...ecowasPassports,

    "south-africa-passport",
    "kenya-passport",
    "tanzania-passport",
    "rwanda-passport",
    "ethiopia-passport",
    "uganda-passport"

];


const euPassports = [

    "france",
    "germany",
    "italy",
    "spain",
    "netherlands",
    "belgium",
    "austria",
    "sweden",
    "denmark",
    "finland",
    "ireland",
    "portugal",
    "poland",
    "czech-republic",
    "greece"

];


/* =========================================================
   GENERAL INFORMATION
========================================================= */

const generalTravelNotes = {

    passport:
        "Carry a valid passport or accepted travel document. The required validity period can differ by destination and nationality.",

    documents:
        "Depending on the journey, travellers may need accommodation details, return or onward travel, proof of funds, travel insurance, invitations or other supporting documents.",

    health:
        "Health requirements depend on the destination, route and previous travel history. Yellow Fever and other vaccination documentation may apply to travellers arriving from certain countries.",

    financial:
        "Some destinations may require evidence of sufficient funds, confirmed accommodation, return or onward travel, or other evidence that the traveller can support the planned stay.",

    important:
        "Travel requirements can change. Always verify the latest rules with the destination's immigration authority, embassy, government or official travel-authorisation system before departure."

};


/* =========================================================
   ECOWAS FREE-MOVEMENT INFORMATION
========================================================= */

const ecowasEntry =
    "ECOWAS citizens may benefit from regional free-movement arrangements when travelling to another ECOWAS member state for qualifying visits. Entry conditions, permitted stay, travel-document requirements and health requirements still apply.";


/* =========================================================
   TRAVEL REQUIREMENTS DATABASE
========================================================= */

const travelRequirements = {


    /* =====================================================
       KENYA
    ====================================================== */

    kenya: {

        defaultEntry:
            "Kenya's entry requirements depend on nationality. Many foreign visitors require an approved Electronic Travel Authorisation (eTA) before beginning their journey, while specified nationalities are exempt.",

        passport:
            "For travellers who require an eTA, Kenya's official system states that the passport should be valid for at least 6 months after the planned date of arrival and have at least one blank page.",

        documents:
            "For travellers using the eTA system, prepare the passport biodata details, selfie or passport-style photo, email and phone number, arrival and departure itinerary, accommodation booking and payment method. Additional documents may be requested depending on the purpose of travel.",

        health:
            "Health requirements depend on your route and previous travel history. A Yellow Fever vaccination certificate may be required when arriving from Yellow Fever risk areas.",

        financial:
            "Travellers should be prepared to show accommodation arrangements, onward or return travel and other supporting information if requested by immigration.",

        important:
            "Kenya's official eTA system contains nationality-specific exemptions. Check your passport nationality before applying because an eTA may not be required for every traveller."
    },


    /* =====================================================
       TANZANIA + ZANZIBAR
    ====================================================== */

    tanzania: {

        defaultEntry:
            "Tanzania's visa requirements depend on nationality and travel circumstances. Eligible travellers can use Tanzania's official online visa system.",

        passport:
            "A passport should generally have at least 6 months validity and an unused visa page. Confirm the exact requirement applicable to your nationality before travel.",

        documents:
            "Travellers may need their passport biodata page, passport photograph where applicable, itinerary, accommodation information and return or onward travel details.",

        health:
            "Health requirements depend on travel history and route. A Yellow Fever vaccination certificate may be required for travellers arriving from Yellow Fever risk areas.",

        financial:
            "Keep evidence of accommodation, onward or return travel and sufficient funds available where requested.",

        important:
            "Tanzania Immigration announced on September 25, 2026 that Nigerian nationals were removed from the referred-visa category. Nigerian travellers should still obtain the appropriate current tourist visa or entry permission before travel."
    },


    /* =====================================================
       SOUTH AFRICA
    ====================================================== */

    "south-africa": {

        defaultEntry:
            "South Africa's visitor entry requirements depend on nationality. Some passport holders are visa-exempt for qualifying short visits, while others must obtain a visitor visa before travel.",

        passport:
            "Travellers should hold a valid passport or accepted travel document that satisfies South African immigration and airline requirements.",

        documents:
            "Visa-required travellers may need the prescribed application documents, passport, accommodation details, itinerary, financial evidence and other supporting documents.",

        health:
            "Yellow Fever documentation may be required depending on the countries visited before entering South Africa.",

        financial:
            "Travellers may be asked to demonstrate sufficient funds and provide accommodation and return or onward travel information.",

        important:
            "Travellers who require a South African visitor visa should obtain it before travelling. Requirements can vary according to nationality and purpose."
    },


    /* =====================================================
       MOROCCO
    ====================================================== */

    morocco: {

        defaultEntry:
            "Morocco's entry requirements depend on nationality, residence, passport type and travel circumstances. The official Accès Maroc system should be used to determine the applicable route.",

        passport:
            "Carry a valid ordinary passport covering the intended travel period. Visa or electronic-visa applications may have additional passport-validity requirements.",

        documents:
            "Depending on the applicable entry route, travellers may need accommodation details, flight itinerary, proof of funds, travel insurance and other supporting documentation.",

        health:
            "Check current Moroccan health requirements according to your itinerary and recent travel history.",

        financial:
            "Travellers may be expected to demonstrate sufficient funds, accommodation arrangements and onward or return travel.",

        important:
            "Morocco's official Accès Maroc system can determine whether a traveller is visa-exempt or may need a consular visa, eVisa or electronic travel authorisation."
    },


    /* =====================================================
       EGYPT
    ====================================================== */

    egypt: {

        defaultEntry:
            "Egypt's entry requirements depend on nationality. Some nationalities are eligible for the official tourist e-Visa system while others must use another visa route.",

        passport:
            "Travellers should generally hold a passport valid for at least 6 months from the date of arrival.",

        documents:
            "Depending on the visa route, travellers may need a printed e-Visa, hotel or accommodation information, itinerary and supporting invitation or business documentation.",

        health:
            "Check current Egyptian health requirements based on the itinerary and recent travel history.",

        financial:
            "Keep accommodation, return or onward travel and sufficient-funds evidence available if requested.",

        important:
            "Do not assume that every foreign passport can use Egypt's e-Visa system. Confirm eligibility through the official Egyptian visa system or relevant consular authority."
    },


    /* =====================================================
       RWANDA
    ====================================================== */

    rwanda: {

        defaultEntry:
            "Rwanda provides visa-on-arrival and online visitor visa arrangements for many nationalities, while specific visa exemptions apply to qualifying passport holders.",

        passport:
            "A valid accepted travel document should generally have at least 6 months validity.",

        documents:
            "Travellers should have accommodation information, return or onward travel details and sufficient funds. Immigration may request supporting evidence.",

        health:
            "Travellers arriving from Yellow Fever endemic countries may need to present a valid Yellow Fever vaccination certificate.",

        financial:
            "Be prepared to show accommodation arrangements, return or onward travel and sufficient funds if requested.",

        important:
            "Rwanda's visa rules can vary according to nationality and visa category. Confirm the current position before departure."
    },


    /* =====================================================
       SEYCHELLES
    ====================================================== */

    seychelles: {

        defaultEntry:
            "Seychelles is generally visa-free for visitors, but travellers must meet the country's entry conditions and complete the required Travel Authorisation before departure.",

        passport:
            "The traveller must hold a valid passport or accepted travel document covering the intended stay and return journey.",

        documents:
            "Travellers should have a valid return or onward ticket, confirmed accommodation and sufficient funds for the stay.",

        health:
            "Health requirements depend on travel history. Additional vaccination documentation may apply depending on countries recently visited.",

        financial:
            "Seychelles requires visitors to have sufficient funds for their stay. The published visitor requirement includes a minimum of US$150 per day or equivalent.",

        important:
            "Travellers must complete the Seychelles Travel Authorisation before departure and satisfy the applicable visitor-permit conditions on arrival."
    },


    /* =====================================================
       GHANA
    ====================================================== */

    ghana: {

        defaultEntry:
            "Ghana's entry requirements depend on nationality. ECOWAS nationals may benefit from regional visa-free arrangements for qualifying visits, while other nationalities may require a visa or another entry permission.",

        passport:
            "Carry a valid passport that meets Ghanaian immigration and airline requirements.",

        documents:
            "Visa-required travellers may need their passport, visa documentation, itinerary, accommodation information and other supporting documents.",

        health:
            "A Yellow Fever vaccination certificate is particularly important for travellers arriving from Yellow Fever endemic countries.",

        financial:
            "Travellers should be prepared to provide accommodation, return or onward travel and sufficient-funds evidence if requested.",

        important:
            "Ghana maintains nationality-specific visa and entry rules. Confirm the current requirements before travelling."
    },


    /* =====================================================
       CAPE VERDE
    ====================================================== */

    "cape-verde": {

        defaultEntry:
            "Cabo Verde maintains an official list of visa-exempt nationalities and countries requiring a visa. Visa-exempt travellers must still complete the required EASE pre-registration before travelling.",

        passport:
            "Cabo Verde's official consular information states that a passport should be valid for at least 6 months at the time of the stay.",

        documents:
            "Travellers should complete the EASE pre-registration process before travel. Depending on nationality and circumstances, a visa and Airport Security Tax (TSA) may also apply.",

        health:
            "Check current health and vaccination requirements according to your route and recent travel history.",

        financial:
            "Keep accommodation details, return or onward travel information and evidence of sufficient funds available if requested.",

        important:
            "Cabo Verde's official visa-free list currently includes Ghana, Nigeria, Liberia, Senegal, Sierra Leone, Côte d'Ivoire, Benin, Guinea, Guinea-Bissau, The Gambia and Togo for qualifying stays. The specific maximum stay depends on nationality. Visa-exempt travellers must still pre-register through EASE and pay the applicable TSA where required."
    },


    /* =====================================================
       ECOWAS DESTINATIONS
    ====================================================== */

    nigeria: {

        defaultEntry:
            "Entry requirements for Nigeria depend on the traveller's nationality and travel purpose. ECOWAS citizens may benefit from regional free-movement arrangements for qualifying visits.",

        passport:
            "Carry a valid passport or accepted regional travel document that meets Nigerian immigration and airline requirements.",

        documents:
            "Travellers may need accommodation information, return or onward travel, proof of funds and any visa or entry documentation applicable to their nationality.",

        health:
            "Yellow Fever and other health documentation may apply depending on the traveller's route and recent travel history.",

        financial:
            "Travellers should be prepared to demonstrate accommodation, onward or return travel and sufficient funds if requested.",

        important:
            "Nigeria's immigration requirements vary by nationality and purpose. Confirm the latest position before travel."
    },


    liberia: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document. Additional validity requirements may depend on nationality and travel purpose.",

        documents:
            "Travellers should carry valid identification or travel documents, accommodation details and return or onward travel information where applicable.",

        health:
            "Health documentation may be required depending on the traveller's origin and recent travel history.",

        financial:
            "Keep evidence of accommodation, onward or return travel and sufficient funds available if requested.",

        important:
            "ECOWAS free-movement arrangements do not remove the need to comply with immigration, identity and health procedures."
    },


    senegal: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted travel document. Senegal's entry requirements can vary according to nationality and purpose.",

        documents:
            "Travellers should have accommodation and onward or return travel information available where applicable.",

        health:
            "Health and vaccination requirements depend on travel history and route.",

        financial:
            "Travellers may be asked to demonstrate accommodation arrangements and sufficient funds.",

        important:
            "Confirm the current nationality-specific entry rules before travelling."
    },


    "sierra-leone": {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Keep travel identification, accommodation details and onward or return travel information available.",

        health:
            "Health documentation may apply depending on travel history.",

        financial:
            "Travellers should be prepared to show accommodation and sufficient funds if requested.",

        important:
            "Regional free movement does not eliminate applicable border and health procedures."
    },


    gambia: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Keep accommodation, onward or return travel and identification information available.",

        health:
            "Health requirements can depend on the traveler's route and recent travel history.",

        financial:
            "Evidence of accommodation and sufficient funds may be requested.",

        important:
            "Confirm current entry conditions before departure."
    },


    guinea: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Travellers should carry identification, accommodation information and onward or return travel details where applicable.",

        health:
            "Health and vaccination requirements may apply depending on travel history.",

        financial:
            "Travellers should be prepared to demonstrate sufficient means if requested.",

        important:
            "Entry rules can change and should be confirmed before departure."
    },


    "guinea-bissau": {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Keep identification, accommodation and onward or return travel information available.",

        health:
            "Health requirements depend on route and travel history.",

        financial:
            "Evidence of sufficient funds may be requested.",

        important:
            "Confirm the latest entry requirements before travel."
    },


    "cote-divoire": {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Travellers should carry valid identification, accommodation information and onward or return travel details.",

        health:
            "Health requirements may depend on the traveller's route and previous travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Confirm current entry and health requirements before departure."
    },


    benin: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Keep valid travel identification, accommodation and onward or return travel details available.",

        health:
            "Health and vaccination documentation may apply depending on route.",

        financial:
            "Sufficient-funds evidence may be requested.",

        important:
            "Check current border and health requirements before travelling."
    },


    togo: {

        defaultEntry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Travellers should carry valid identification and relevant accommodation and onward-travel information.",

        health:
            "Health requirements depend on travel history and route.",

        financial:
            "Travellers should be prepared to show sufficient means if requested.",

        important:
            "Confirm the latest entry conditions before departure."
    }

};


/* =========================================================
   PASSPORT-SPECIFIC RULES
========================================================= */

const passportDestinationOverrides = {


    /* =====================================================
       GHANA → CAPE VERDE
    ====================================================== */

    "ghana|cape-verde": {

        entry:
            "Ghanaian passport holders are currently visa-exempt for qualifying visits to Cabo Verde for up to 90 days.",

        passport:
            "Cabo Verde's official consular information states that the passport should be valid for at least 6 months during the stay.",

        documents:
            "Before travelling, complete the Cabo Verde EASE pre-registration. Keep your accommodation information and return or onward travel details available. The applicable Airport Security Tax (TSA) may also need to be paid.",

        health:
            "Check the latest health and vaccination requirements based on your route and recent travel history.",

        financial:
            "Carry evidence of accommodation and sufficient funds for your stay in case requested by immigration.",

        important:
            "Ghana is currently listed by Cabo Verde as visa-exempt for up to 90 days. Visa exemption does not remove the EASE pre-registration requirement."
    },


    /* =====================================================
       NIGERIA → CAPE VERDE
    ====================================================== */

    "nigeria|cape-verde": {

        entry:
            "Nigerian passport holders are currently visa-exempt for qualifying visits to Cabo Verde for up to 90 days.",

        passport:
            "Cabo Verde's official consular information states that the passport should be valid for at least 6 months during the stay.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available. The applicable TSA may also need to be paid.",

        health:
            "Check current health and vaccination requirements according to your route and recent travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Nigeria is currently listed by Cabo Verde as visa-exempt for up to 90 days. Travellers must still complete the EASE pre-registration process."
    },


    /* =====================================================
       LIBERIA → CAPE VERDE
    ====================================================== */

    "liberia|cape-verde": {

        entry:
            "Liberian passport holders are currently visa-exempt for qualifying visits to Cabo Verde for up to 90 days.",

        passport:
            "Passport should meet Cabo Verde's applicable validity requirements. The official consular information states a minimum of 6 months validity.",

        documents:
            "Complete EASE pre-registration before travelling. Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements based on your route and recent travel history.",

        financial:
            "Be prepared to demonstrate accommodation and sufficient funds if requested.",

        important:
            "Liberia is currently included on Cabo Verde's official visa-exempt list with a maximum stay of 90 days."
    },


    /* =====================================================
       SENEGAL → CAPE VERDE
    ====================================================== */

    "senegal|cape-verde": {

        entry:
            "Senegalese passport holders are currently visa-exempt for qualifying visits to Cabo Verde for up to 90 days.",

        passport:
            "Passport should meet Cabo Verde's applicable validity requirements, including the published 6-month validity standard.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and onward or return travel information available.",

        health:
            "Check current health and vaccination requirements before departure.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Senegal is currently listed as visa-exempt for up to 90 days."
    },


    /* =====================================================
       SIERRA LEONE → CAPE VERDE
    ====================================================== */

    "sierra-leone|cape-verde": {

        entry:
            "Sierra Leonean passport holders are currently visa-exempt for qualifying visits to Cabo Verde for up to 90 days.",

        passport:
            "Passport should meet Cabo Verde's applicable validity requirements.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and onward or return travel information available.",

        health:
            "Check current health requirements based on your route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Sierra Leone is currently listed by Cabo Verde as visa-exempt for up to 90 days."
    },


    /* =====================================================
       GHANA → KENYA
    ====================================================== */

    "ghana|kenya": {

        entry:
            "Ghanaian passport holders are currently listed among the nationalities exempt from Kenya's eTA for qualifying stays of up to 90 days.",

        passport:
            "Carry a passport valid for at least 6 months after the planned arrival date and with at least one blank page.",

        documents:
            "Keep your arrival and departure itinerary, accommodation booking and contact information available. Additional documentation may depend on the purpose of travel.",

        health:
            "Yellow Fever documentation may apply depending on your route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Kenya's official eTA system currently lists Ghana among the eTA-exempt nationalities for qualifying stays of up to 90 days."
    },


    /* =====================================================
       NIGERIA → KENYA
    ====================================================== */

    "nigeria|kenya": {

        entry:
            "Nigerian passport holders are currently listed among the African nationalities exempt from Kenya's eTA for qualifying stays of up to 60 days.",

        passport:
            "Carry a passport valid for at least 6 months after the planned arrival date and with at least one blank page.",

        documents:
            "Keep your arrival and departure itinerary, accommodation booking and contact information available. Additional documentation may depend on the purpose of travel.",

        health:
            "Yellow Fever documentation may apply depending on your route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Nigeria is currently listed by Kenya's official eTA system among African nationalities exempt from eTA for stays of up to 60 days."
    },


    /* =====================================================
       UK → KENYA
    ====================================================== */

    "uk|kenya": {

        entry:
            "UK passport holders generally need an approved Kenya eTA before starting their journey.",

        passport:
            "Passport should be valid for at least 6 months after the planned arrival date and have at least one blank page.",

        documents:
            "Prepare your arrival and departure itinerary, accommodation booking, contact details and the other information requested by Kenya's eTA system.",

        health:
            "Yellow Fever documentation may apply depending on your route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Apply through Kenya's official eTA system before beginning the journey."
    },


    /* =====================================================
       USA → KENYA
    ====================================================== */

    "usa|kenya": {

        entry:
            "U.S. passport holders generally need an approved Kenya eTA before starting their journey.",

        passport:
            "Passport should be valid for at least 6 months after the planned arrival date and have at least one blank page.",

        documents:
            "Prepare the required eTA information, itinerary, accommodation details, contact information and payment method.",

        health:
            "Yellow Fever documentation may apply depending on your route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Kenya currently lists a five-year multiple-entry eTA specifically for eligible U.S. nationals, subject to the applicable conditions."
    },


    /* =====================================================
       FRANCE → MOROCCO
    ====================================================== */

    "france|morocco": {

        entry:
            "French passport holders are generally visa-exempt for qualifying short tourist visits to Morocco.",

        passport:
            "Carry a valid French passport covering the intended trip.",

        documents:
            "Keep accommodation and return or onward travel information available. Additional evidence may be requested depending on circumstances.",

        health:
            "Check current Moroccan health requirements according to your itinerary.",

        financial:
            "Travellers should be prepared to demonstrate sufficient means and accommodation if requested.",

        important:
            "Check Morocco's official entry information before departure because rules can change."
    },


    /* =====================================================
       UK → MOROCCO
    ====================================================== */

    "uk|morocco": {

        entry:
            "UK passport holders are generally visa-exempt for qualifying short tourist visits to Morocco.",

        passport:
            "Carry a valid UK passport covering the intended trip.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements before departure.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm current Moroccan entry conditions before travelling."
    },


    /* =====================================================
       USA → MOROCCO
    ====================================================== */

    "usa|morocco": {

        entry:
            "U.S. passport holders are generally visa-exempt for qualifying short tourist visits to Morocco.",

        passport:
            "Carry a valid U.S. passport covering the intended trip.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements before departure.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm current Moroccan entry conditions before travelling."
    },


    /* =====================================================
       NIGERIA → GHANA
    ====================================================== */

    "nigeria|ghana": {

        entry:
            "Nigerian passport holders benefit from ECOWAS free-movement arrangements for qualifying visits to Ghana and generally do not need a visitor visa.",

        passport:
            "Carry a valid Nigerian passport or accepted ECOWAS travel document.",

        documents:
            "Carry valid identification and keep accommodation and onward or return travel information available.",

        health:
            "A Yellow Fever vaccination certificate is particularly important for travellers arriving from Nigeria.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Regional visa-free travel does not remove applicable immigration and health requirements."
    },


    /* =====================================================
       GHANA → NIGERIA
    ====================================================== */

    "ghana|nigeria": {

        entry:
            "Ghanaian passport holders benefit from ECOWAS free-movement arrangements for qualifying visits to Nigeria and generally do not need a visitor visa.",

        passport:
            "Carry a valid Ghanaian passport or accepted ECOWAS travel document.",

        documents:
            "Carry valid identification and keep accommodation and onward or return travel information available.",

        health:
            "Health documentation may apply depending on travel history and route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Confirm current border and health requirements before departure."
    },


    /* =====================================================
       GHANA → SENEGAL
    ====================================================== */

    "ghana|senegal": {

        entry:
            "Ghanaian passport holders may benefit from ECOWAS free-movement arrangements for qualifying visits to Senegal.",

        passport:
            "Carry a valid Ghanaian passport or accepted ECOWAS travel document.",

        documents:
            "Keep accommodation and onward or return travel information available.",

        health:
            "Check health and vaccination requirements according to your travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Confirm the current entry conditions before departure."
    },


    /* =====================================================
       NIGERIA → SENEGAL
    ====================================================== */

    "nigeria|senegal": {

        entry:
            "Nigerian passport holders may benefit from ECOWAS free-movement arrangements for qualifying visits to Senegal.",

        passport:
            "Carry a valid Nigerian passport or accepted ECOWAS travel document.",

        documents:
            "Keep accommodation and onward or return travel information available.",

        health:
            "Check current health and vaccination requirements based on your route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Confirm current Senegalese entry conditions before departure."
    },


    /* =====================================================
       NIGERIA → RWANDA
    ====================================================== */

    "nigeria|rwanda": {

        entry:
            "Rwanda provides visa-on-arrival and online visitor visa arrangements and has visa-waiver arrangements applicable to many African nationals. Nigerian travellers should confirm the current applicable category before departure.",

        passport:
            "Carry a passport valid for at least 6 months.",

        documents:
            "Keep accommodation details, return or onward travel and sufficient-funds evidence available.",

        health:
            "Travellers arriving from Nigeria may need a valid Yellow Fever vaccination certificate.",

        financial:
            "Be prepared to demonstrate accommodation and sufficient funds if requested.",

        important:
            "Confirm the current Rwanda immigration position before departure because visa categories and fees can change."
    },


    /* =====================================================
       UK → RWANDA
    ====================================================== */

    "uk|rwanda": {

        entry:
            "UK passport holders can generally obtain a Rwanda visitor visa on arrival or through Rwanda's online visa system, subject to current conditions.",

        passport:
            "Carry a passport valid for at least 6 months.",

        documents:
            "Keep accommodation details, return or onward travel and sufficient-funds evidence available.",

        health:
            "Health requirements depend on the traveler's route and recent travel history.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm the current Rwanda visa position before departure."
    },


    /* =====================================================
       USA → RWANDA
    ====================================================== */

    "usa|rwanda": {

        entry:
            "U.S. passport holders can generally obtain a Rwanda visitor visa on arrival or through Rwanda's online visa system, subject to current conditions.",

        passport:
            "Carry a passport valid for at least 6 months.",

        documents:
            "Keep accommodation details, return or onward travel and sufficient-funds evidence available.",

        health:
            "Health requirements depend on the traveler's route and recent travel history.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm the current Rwanda visa position before departure."
    },


    /* =====================================================
       NIGERIA → SEYCHELLES
    ====================================================== */

    "nigeria|seychelles": {

        entry:
            "Seychelles is visa-free for Nigerian passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

        passport:
            "Carry a valid Nigerian passport covering the intended stay and return journey.",

        documents:
            "Have a confirmed accommodation booking, return or onward ticket and completed Travel Authorisation.",

        health:
            "Health requirements depend on travel history and route.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Visa-free entry does not remove the requirement to obtain the Seychelles Travel Authorisation before departure."
    },


    /* =====================================================
       GHANA → SEYCHELLES
    ====================================================== */

    "ghana|seychelles": {

        entry:
            "Seychelles is visa-free for Ghanaian passport holders, but the required Seychelles Travel Authorisation must be completed before departure.",

        passport:
            "Carry a valid Ghanaian passport covering the intended stay and return journey.",

        documents:
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Check health requirements based on your recent travel history.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Complete the Travel Authorisation before departure even though a visa is not generally required."
    }

};


/* =========================================================
   SPECIAL ECOWAS PASSPORT → ECOWAS DESTINATION LOGIC
========================================================= */

function isEcowasToEcowas(
    passport,
    destination
) {

    return (
        ecowasPassports.includes(passport) &&
        [
            "nigeria",
            "liberia",
            "ghana",
            "senegal",
            "sierra-leone",
            "gambia",
            "guinea",
            "guinea-bissau",
            "cote-divoire",
            "benin",
            "togo",
            "cape-verde"
        ].includes(destination)
    );

}


/* =========================================================
   GET PASSPORT-SPECIFIC ENTRY INFORMATION
========================================================= */

function getEntryInformation(
    passport,
    destination,
    destinationData
) {

    const pairKey =
        `${passport}|${destination}`;


    /* -----------------------------------------
       EXACT PASSPORT + DESTINATION RULE
    ----------------------------------------- */

    if (
        passportDestinationOverrides[
            pairKey
        ]
    ) {

        return passportDestinationOverrides[
            pairKey
        ];

    }


    /* -----------------------------------------
       ECOWAS → ECOWAS
    ----------------------------------------- */

    if (
        isEcowasToEcowas(
            passport,
            destination
        )
    ) {

        return {

            entry:
                ecowasEntry,

            passport:
                destinationData.passport,

            documents:
                destinationData.documents,

            health:
                destinationData.health,

            financial:
                destinationData.financial,

            important:
                destinationData.important

        };

    }


    /* -----------------------------------------
       STANDARD DESTINATION RULE
    ----------------------------------------- */

    return {

        entry:
            destinationData.defaultEntry,

        passport:
            destinationData.passport,

        documents:
            destinationData.documents,

        health:
            destinationData.health,

        financial:
            destinationData.financial,

        important:
            destinationData.important

    };

}


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
       OTHER DESTINATION
    ----------------------------------------- */

    if (
        selectedDestination === "other"
    ) {

        passportDefault.classList.remove(
            "active"
        );

        passportDynamic.classList.add(
            "active"
        );


        if (requirementDestinationLabel) {

            requirementDestinationLabel.textContent =
                "CUSTOM DESTINATION";

        }


        if (requirementResultTitle) {

            requirementResultTitle.textContent =
                `${passportNames[selectedPassport] || "Passport"} → Other Destination`;

        }


        if (requirementResultDescription) {

            requirementResultDescription.textContent =
                "This destination is outside the current Duchess requirements database. Contact Duchess World Travel & Experiences for a personalized requirements check.";

        }


        if (entryGuidance) {

            entryGuidance.textContent =
                "Visa and entry requirements depend on the destination and your passport nationality. A personalized check is recommended.";

        }


        if (passportGuidance) {

            passportGuidance.textContent =
                generalTravelNotes.passport;

        }


        if (documentGuidance) {

            documentGuidance.textContent =
                generalTravelNotes.documents;

        }


        if (healthGuidance) {

            healthGuidance.textContent =
                generalTravelNotes.health;

        }


        if (financialGuidance) {

            financialGuidance.textContent =
                generalTravelNotes.financial;

        }


        if (importantGuidance) {

            importantGuidance.textContent =
                "Contact Duchess for a destination-specific check before making travel arrangements.";

        }


        return;

    }


    /* -----------------------------------------
       DESTINATION DATA
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
       NAMES
    ----------------------------------------- */

    const destination =
        destinationNames[
            selectedDestination
        ] ||
        selectedDestination;


    const passport =
        passportNames[
            selectedPassport
        ] ||
        "Passport";


    /* -----------------------------------------
       GET RESULT
    ----------------------------------------- */

    const result =
        getEntryInformation(
            selectedPassport,
            selectedDestination,
            destinationData
        );


    /* -----------------------------------------
       SHOW RESULT
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
       TITLE
    ----------------------------------------- */

    if (requirementResultTitle) {

        requirementResultTitle.textContent =
            `${passport} → ${destination}`;

    }


    /* -----------------------------------------
       DESCRIPTION
    ----------------------------------------- */

    if (requirementResultDescription) {

        requirementResultDescription.textContent =
            `Travel-planning guidance for ${passport} holders travelling to ${destination}. Requirements can vary according to travel purpose, length of stay, route, passport type and individual circumstances.`;

    }


    /* -----------------------------------------
       ENTRY
    ----------------------------------------- */

    if (entryGuidance) {

        entryGuidance.textContent =
            result.entry;

    }


    /* -----------------------------------------
       PASSPORT
    ----------------------------------------- */

    if (passportGuidance) {

        passportGuidance.textContent =
            result.passport;

    }


    /* -----------------------------------------
       DOCUMENTS
    ----------------------------------------- */

    if (documentGuidance) {

        documentGuidance.textContent =
            result.documents;

    }


    /* -----------------------------------------
       HEALTH
    ----------------------------------------- */

    if (healthGuidance) {

        healthGuidance.textContent =
            result.health;

    }


    /* -----------------------------------------
       FINANCIAL
    ----------------------------------------- */

    if (financialGuidance) {

        financialGuidance.textContent =
            result.financial;

    }


    /* -----------------------------------------
       IMPORTANT
    ----------------------------------------- */

    if (importantGuidance) {

        importantGuidance.textContent =
            result.important;

    }

}


/* =========================================================
   REQUIREMENTS SELECTORS
========================================================= */

if (destinationSelect) {

    destinationSelect.addEventListener(
        "change",
        updateTravelRequirements
    );

}


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