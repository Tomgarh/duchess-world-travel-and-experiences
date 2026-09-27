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


const africanPassports = [

    ...ecowasPassports,

    "south-africa-passport",
    "kenya-passport",
    "tanzania-passport",
    "rwanda-passport",
    "ethiopia-passport",
    "uganda-passport"

];


const ecowasDestinations = [

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

];


/* =========================================================
   GENERAL INFORMATION
========================================================= */

const generalTravelNotes = {

    passport:
        "Carry a valid passport or accepted travel document. Passport-validity requirements vary by destination and nationality.",

    documents:
        "Depending on the journey, travellers may need accommodation details, return or onward travel, proof of funds, travel insurance, invitations or other supporting documents.",

    health:
        "Health requirements depend on the destination, route and previous travel history. Yellow Fever and other vaccination documentation may apply.",

    financial:
        "Some destinations may require evidence of sufficient funds, confirmed accommodation, return or onward travel or other evidence supporting the planned stay.",

    important:
        "Travel requirements can change. Always verify the latest rules with the destination's immigration authority, embassy, government or official travel-authorisation system before departure."

};


/* =========================================================
   ECOWAS INFORMATION
========================================================= */

const ecowasEntry =
    "ECOWAS citizens may benefit from regional free-movement arrangements when travelling to another ECOWAS member state for qualifying visits. Travellers must still comply with applicable immigration, identity and health requirements.";


/* =========================================================
   AFRICA → AFRICA GENERAL LOGIC
========================================================= */

const africanDestinationGuidance = {

    kenya: {

        entry:
            "Kenya applies nationality-specific entry rules. Some African passport holders are exempt from the eTA requirement while other nationalities may need an approved eTA or another applicable entry permission.",

        passport:
            "Carry a passport meeting Kenya's current validity and blank-page requirements. The exact requirement should be checked for the passport nationality.",

        documents:
            "Keep accommodation details, arrival and departure itinerary, return or onward travel information and other supporting documents available.",

        health:
            "Yellow Fever documentation may apply depending on the traveller's route and recent travel history.",

        financial:
            "Travellers should be prepared to show accommodation, onward or return travel and other supporting information if requested.",

        important:
            "Kenya's eTA system contains nationality-specific exemptions. Do not assume that the same rule applies to every African passport."

    },


    tanzania: {

        entry:
            "Tanzania applies nationality-specific visa and entry rules. Eligible travellers can use Tanzania's official online visa system.",

        passport:
            "Carry a passport that meets Tanzania's current validity requirements and has an available visa page where applicable.",

        documents:
            "Keep accommodation information, itinerary and return or onward travel details available.",

        health:
            "Yellow Fever documentation may apply depending on the traveller's route and previous travel history.",

        financial:
            "Keep accommodation, onward or return travel and sufficient-funds evidence available if requested.",

        important:
            "Tanzania's visa rules vary by nationality. Nigerian nationals were removed from the referred-visa category on September 25, 2026, but Nigerian travellers should still obtain the appropriate current entry permission before travel."

    },


    "south-africa": {

        entry:
            "South Africa applies nationality-specific visitor entry rules. Some African passport holders may be visa-exempt while others require a visitor visa before travel.",

        passport:
            "Carry a valid passport or accepted travel document that satisfies South African immigration and airline requirements.",

        documents:
            "Depending on nationality, travellers may need accommodation details, itinerary, financial evidence, return or onward travel and other supporting documents.",

        health:
            "Yellow Fever documentation may apply depending on countries visited before entering South Africa.",

        financial:
            "Travellers may be asked to demonstrate sufficient funds and provide accommodation and return or onward travel information.",

        important:
            "Visa requirements are nationality-specific. Verify the applicable rule before booking non-refundable travel arrangements."

    },


    morocco: {

        entry:
            "Morocco's entry requirements depend on nationality, residence, passport type and travel circumstances. The official Accès Maroc system should be used to determine the applicable route.",

        passport:
            "Carry a valid ordinary passport covering the intended trip. Additional passport requirements may apply depending on the visa route.",

        documents:
            "Depending on the applicable entry route, travellers may need accommodation details, itinerary, proof of funds, travel insurance or other supporting documents.",

        health:
            "Check current Moroccan health requirements according to your itinerary and recent travel history.",

        financial:
            "Travellers may be expected to demonstrate sufficient funds, accommodation arrangements and onward or return travel.",

        important:
            "Morocco's entry route can differ by nationality. Use the official eligibility checker before travelling."

    },


    egypt: {

        entry:
            "Egypt's entry requirements depend on nationality. Some nationalities may qualify for an e-Visa while others use a different visa or consular route.",

        passport:
            "Travellers should generally carry a passport with sufficient validity for the intended trip.",

        documents:
            "Depending on the applicable visa route, travellers may need accommodation information, itinerary, invitation documents or other supporting evidence.",

        health:
            "Check current Egyptian health requirements according to the itinerary and recent travel history.",

        financial:
            "Keep accommodation, return or onward travel and sufficient-funds evidence available if requested.",

        important:
            "Do not assume that every African passport has the same Egyptian visa route. Confirm nationality-specific requirements before travel."

    },


    rwanda: {

        entry:
            "Rwanda allows nationals of all countries to obtain a visa on arrival, while special visa-waiver arrangements apply to qualifying African and other nationalities.",

        passport:
            "Rwanda requires a genuine accepted travel document generally valid for at least 6 months.",

        documents:
            "Keep accommodation details, return or onward travel information and other supporting documents available.",

        health:
            "Travellers arriving from Yellow Fever risk areas may need a valid Yellow Fever vaccination certificate.",

        financial:
            "Be prepared to demonstrate accommodation and sufficient funds if requested.",

        important:
            "Rwanda has special visa-waiver arrangements for African Union citizens and specific countries. The exact stay period can depend on nationality."

    },


    seychelles: {

        entry:
            "Seychelles is generally visa-free for visitors, but travellers must satisfy the country's visitor conditions and obtain the required Travel Authorisation before departure.",

        passport:
            "Carry a valid passport or accepted travel document covering the intended stay and return journey.",

        documents:
            "Travellers should have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Health requirements depend on travel history and route. Additional vaccination documentation may apply.",

        financial:
            "Seychelles requires visitors to demonstrate sufficient funds for their stay. The published visitor requirement includes US$150 per day or equivalent.",

        important:
            "Visa-free travel does not remove the requirement to obtain the Seychelles Travel Authorisation before departure."

    },


    ghana: {

        entry:
            "Ghana applies nationality-specific entry rules. ECOWAS nationals may benefit from regional free-movement arrangements for qualifying visits.",

        passport:
            "Carry a valid passport or accepted ECOWAS travel document that meets Ghanaian immigration requirements.",

        documents:
            "Keep accommodation information, return or onward travel and other supporting documents available.",

        health:
            "A Yellow Fever vaccination certificate may be required depending on the traveller's origin and route.",

        financial:
            "Travellers should be prepared to provide accommodation, return or onward travel and sufficient-funds evidence if requested.",

        important:
            "Ghana's entry rules depend on nationality and travel circumstances. Confirm the current position before departure."

    },


    "cape-verde": {

        entry:
            "Cabo Verde has a published list of visa-exempt nationalities. Visa-exempt travellers must still complete the required EASE pre-registration before travel.",

        passport:
            "The Cabo Verde government states that passports should be valid for at least 6 months from entry.",

        documents:
            "Travellers must pre-register through EASE. Depending on nationality and circumstances, a visa and Airport Security Tax may also apply.",

        health:
            "Check current health and vaccination requirements based on the route and recent travel history.",

        financial:
            "Keep accommodation details, return or onward travel and evidence of sufficient funds available if requested.",

        important:
            "Cabo Verde's official visa-free list is nationality-specific. The permitted stay also varies by nationality."

    }

};


/* =========================================================
   ECOWAS DESTINATION DEFAULTS
========================================================= */

const ecowasDestinationData = {

    nigeria: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and return or onward travel information available.",
        health:
            "Health and vaccination requirements depend on route and travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "ECOWAS free movement does not remove applicable border, immigration and health procedures."
    },

    liberia: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep valid identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Confirm current border and health requirements before departure."
    },

    ghana: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Yellow Fever documentation may apply depending on the route and travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Regional visa-free travel does not remove applicable immigration and health requirements."
    },

    senegal: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Confirm the latest nationality-specific entry conditions before departure."
    },

    "sierra-leone": {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Regional free movement does not remove applicable border procedures."
    },

    gambia: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Confirm current entry conditions before departure."
    },

    guinea: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of sufficient means available if requested.",
        important:
            "Confirm current entry and health requirements before departure."
    },

    "guinea-bissau": {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of sufficient means available if requested.",
        important:
            "Confirm the latest entry conditions before travelling."
    },

    "cote-divoire": {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "Confirm current entry and health requirements before departure."
    },

    benin: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep valid identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of sufficient funds available if requested.",
        important:
            "Check current border and health requirements before travelling."
    },

    togo: {
        entry: ecowasEntry,
        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",
        documents:
            "Keep valid identification, accommodation and onward or return travel information available.",
        health:
            "Health requirements depend on route and recent travel history.",
        financial:
            "Keep evidence of sufficient funds available if requested.",
        important:
            "Confirm the latest entry conditions before departure."
    },

    "cape-verde": {
        entry:
            "ECOWAS nationals may be visa-exempt for qualifying stays in Cabo Verde according to Cabo Verde's current official visa-exemption list. EASE pre-registration is still required.",
        passport:
            "Passport should be valid for at least 6 months from entry.",
        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",
        health:
            "Check current health and vaccination requirements according to the route.",
        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",
        important:
            "The exact maximum visa-free stay depends on nationality. Check Cabo Verde's current official list before departure."
    }

};


/* =========================================================
   DESTINATION-SPECIFIC AFRICAN RULES
========================================================= */

const africanDestinationOverrides = {


    /* =====================================================
       NIGERIA → KENYA
    ====================================================== */

    "nigeria|kenya": {

        entry:
            "Nigerian passport holders are currently listed among the African nationalities exempt from Kenya's eTA for qualifying stays of up to 60 days.",

        passport:
            "Carry a passport valid for at least 6 months after the planned arrival date and with at least one blank page.",

        documents:
            "Keep your arrival and departure itinerary, accommodation booking and contact information available.",

        health:
            "Yellow Fever documentation may apply depending on the route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Kenya's nationality-specific eTA exemption should be checked again before departure because entry rules can change."

    },


    /* =====================================================
       GHANA → KENYA
    ====================================================== */

    "ghana|kenya": {

        entry:
            "Ghanaian passport holders are currently listed among nationalities exempt from Kenya's eTA for qualifying stays.",

        passport:
            "Carry a passport meeting Kenya's current validity requirements and with an available blank page.",

        documents:
            "Keep your itinerary, accommodation booking and contact information available.",

        health:
            "Yellow Fever documentation may apply depending on the route.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Confirm Ghana's current Kenya entry status through Kenya's official eTA system before travel."

    },


    /* =====================================================
       UK → KENYA
    ====================================================== */

    "uk|kenya": {

        entry:
            "UK passport holders generally require an approved Kenya eTA before beginning their journey.",

        passport:
            "Passport should be valid for at least 6 months after planned arrival and have at least one blank page.",

        documents:
            "Prepare the information requested by Kenya's eTA system, including itinerary and accommodation details.",

        health:
            "Yellow Fever documentation may apply depending on the route.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Use Kenya's official eTA system before beginning the journey."

    },


    /* =====================================================
       USA → KENYA
    ====================================================== */

    "usa|kenya": {

        entry:
            "U.S. passport holders generally require an approved Kenya eTA before beginning their journey.",

        passport:
            "Passport should be valid for at least 6 months after planned arrival and have at least one blank page.",

        documents:
            "Prepare the required eTA information, itinerary, accommodation details and contact information.",

        health:
            "Yellow Fever documentation may apply depending on the route.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Confirm the current eTA conditions before departure."

    },


    /* =====================================================
       NIGERIA → TANZANIA
    ====================================================== */

    "nigeria|tanzania": {

        entry:
            "Nigerian nationals were removed from Tanzania's referred-visa category on September 25, 2026. Nigerian travellers should still obtain the appropriate current tourist visa or entry permission before travel.",

        passport:
            "Carry a Nigerian passport meeting Tanzania's current passport-validity requirements.",

        documents:
            "Keep accommodation, itinerary and return or onward travel details available.",

        health:
            "Yellow Fever documentation may apply depending on the route and recent travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Check Tanzania's official immigration system before travel because visa requirements can change."

    },


    /* =====================================================
       NIGERIA → RWANDA
    ====================================================== */

    "nigeria|rwanda": {

        entry:
            "Nigerian citizens are eligible for Rwanda's African Union visa-on-arrival fee waiver arrangement for a 30-day stay.",

        passport:
            "Carry a genuine accepted Nigerian passport or travel document valid for at least 6 months.",

        documents:
            "Keep accommodation details and return or onward travel information available.",

        health:
            "A Yellow Fever vaccination certificate may be required depending on the travel route.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Rwanda permits visa on arrival for all nationalities, while qualifying African nationals receive a fee waiver. Confirm the current stay conditions before departure."

    },


    /* =====================================================
       GHANA → RWANDA
    ====================================================== */

    "ghana|rwanda": {

        entry:
            "Ghanaian ordinary passport holders are currently eligible for visa-free entry to Rwanda for up to 90 days.",

        passport:
            "Carry a genuine passport or accepted travel document valid for at least 6 months.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements according to the route and recent travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Confirm Rwanda's current entry conditions before departure."

    },


    /* =====================================================
       SOUTH AFRICA → RWANDA
    ====================================================== */

    "south-africa-passport|rwanda": {

        entry:
            "South African citizens receive visa on arrival in Rwanda with the applicable African Union fee-waiver arrangement for a 30-day stay.",

        passport:
            "Carry a passport or accepted travel document valid for at least 6 months.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements based on your route and recent travel history.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm the current Rwanda immigration position before departure."

    },


    /* =====================================================
       KENYA → RWANDA
    ====================================================== */

    "kenya-passport|rwanda": {

        entry:
            "Kenyan citizens are members of the East African Community and may enter Rwanda without a visa for qualifying stays of up to six months.",

        passport:
            "Carry a valid Kenyan passport or accepted EAC travel document.",

        documents:
            "Keep accommodation and onward or return travel information available.",

        health:
            "Check health requirements according to the route and recent travel history.",

        financial:
            "Keep sufficient-funds evidence available if requested.",

        important:
            "EAC citizens receive special entry treatment in Rwanda. Confirm the current border requirements before travel."

    },


    /* =====================================================
       TANZANIA → RWANDA
    ====================================================== */

    "tanzania-passport|rwanda": {

        entry:
            "Tanzanian citizens are members of the East African Community and may enter Rwanda without a visa for qualifying stays of up to six months.",

        passport:
            "Carry a valid Tanzanian passport or accepted EAC travel document.",

        documents:
            "Keep accommodation and onward or return travel information available.",

        health:
            "Check health requirements according to the route and recent travel history.",

        financial:
            "Keep sufficient-funds evidence available if requested.",

        important:
            "EAC citizens receive special entry treatment in Rwanda. Confirm current border requirements before departure."

    },


    /* =====================================================
       UGANDA → RWANDA
    ====================================================== */

    "uganda-passport|rwanda": {

        entry:
            "Ugandan citizens are members of the East African Community and may enter Rwanda without a visa for qualifying stays of up to six months.",

        passport:
            "Carry a valid Ugandan passport or accepted EAC travel document.",

        documents:
            "Keep accommodation and onward or return travel information available.",

        health:
            "Check health requirements according to the route and recent travel history.",

        financial:
            "Keep sufficient-funds evidence available if requested.",

        important:
            "Confirm the current EAC entry requirements before travelling."

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
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

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
            "Seychelles is visa-free for Ghanaian passport holders, subject to the country's visitor conditions and required Travel Authorisation.",

        passport:
            "Carry a valid Ghanaian passport covering the intended stay and return journey.",

        documents:
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Check current health requirements based on your recent travel history.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Complete the Travel Authorisation before departure even though a visa is not generally required."

    },


    /* =====================================================
       GHANA → CAPE VERDE
    ====================================================== */

    "ghana|cape-verde": {

        entry:
            "Ghanaian passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health and vaccination requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Ghana is currently listed by Cabo Verde as visa-exempt for up to 90 days. EASE pre-registration is still required."

    },


    /* =====================================================
       NIGERIA → CAPE VERDE
    ====================================================== */

    "nigeria|cape-verde": {

        entry:
            "Nigerian passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a Nigerian passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health and vaccination requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Nigeria is currently listed by Cabo Verde as visa-exempt for up to 90 days. EASE pre-registration is still required."

    },


    /* =====================================================
       LIBERIA → CAPE VERDE
    ====================================================== */

    "liberia|cape-verde": {

        entry:
            "Liberian passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Liberia is currently listed by Cabo Verde as visa-exempt for up to 90 days."

    },


    /* =====================================================
       SENEGAL → CAPE VERDE
    ====================================================== */

    "senegal|cape-verde": {

        entry:
            "Senegalese passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health and vaccination requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Senegal is currently listed by Cabo Verde as visa-exempt for up to 90 days."

    },


    /* =====================================================
       SIERRA LEONE → CAPE VERDE
    ====================================================== */

    "sierra-leone|cape-verde": {

        entry:
            "Sierra Leonean passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Sierra Leone is currently listed by Cabo Verde as visa-exempt for up to 90 days."

    }

};


/* =========================================================
   GENERIC AFRICAN → AFRICAN RULE
========================================================= */

function getAfricanDestinationResult(
    passport,
    destination,
    destinationData
) {

    const pairKey =
        `${passport}|${destination}`;


    /* -----------------------------------------
       EXACT VERIFIED PAIR
    ----------------------------------------- */

    if (
        africanDestinationOverrides[
            pairKey
        ]
    ) {

        return {
            ...africanDestinationOverrides[pairKey],
            verifiedPair: true
        };

    }


    /* -----------------------------------------
       ECOWAS → ECOWAS
    ----------------------------------------- */

    if (
        ecowasPassports.includes(passport) &&
        ecowasDestinations.includes(destination)
    ) {

        const ecowasData =
            ecowasDestinationData[destination];

        return {
            ...ecowasData,
            verifiedPair: true
        };

    }


    /* -----------------------------------------
       AFRICAN → RWANDA
    ----------------------------------------- */

    if (
        africanPassports.includes(passport) &&
        destination === "rwanda"
    ) {

        return {

            entry:
                "Rwanda allows African nationals to obtain visa on arrival, with qualifying African Union citizens receiving a 30-day visa fee waiver. Some nationalities have longer specific visa-free arrangements.",

            passport:
                "Carry a genuine accepted travel document valid for at least 6 months.",

            documents:
                "Keep accommodation and return or onward travel information available.",

            health:
                "Health and vaccination requirements depend on the travel route and recent travel history.",

            financial:
                "Be prepared to demonstrate sufficient funds and accommodation if requested.",

            important:
                "This is an Africa-wide Rwanda rule rather than a nationality-specific determination. Confirm the exact stay period applicable to your passport before travel.",

            verifiedPair:
                false

        };

    }


    /* -----------------------------------------
       AFRICAN → CABO VERDE
    ----------------------------------------- */

    if (
        africanPassports.includes(passport) &&
        destination === "cape-verde"
    ) {

        return {

            entry:
                "Cabo Verde has nationality-specific visa exemptions. Some African passports are currently visa-exempt while others may require a visa.",

            passport:
                "Carry a passport valid for at least 6 months from entry.",

            documents:
                "EASE pre-registration is required before travel. Additional visa or TSA requirements may apply depending on nationality.",

            health:
                "Check current health and vaccination requirements according to the route.",

            financial:
                "Keep accommodation, return or onward travel and sufficient-funds evidence available if requested.",

            important:
                "This combination is not individually listed in the Duchess verified-pair database. Check Cabo Verde's current official nationality list before travelling.",

            verifiedPair:
                false

        };

    }


    /* -----------------------------------------
       OTHER AFRICAN DESTINATIONS
    ----------------------------------------- */

    if (
        africanPassports.includes(passport) &&
        destinationData
    ) {

        return {

            entry:
                destinationData.entry,

            passport:
                destinationData.passport,

            documents:
                destinationData.documents,

            health:
                destinationData.health,

            financial:
                destinationData.financial,

            important:
                "This result contains destination guidance, but the exact passport-to-destination rule has not been individually verified in the Duchess database. Confirm the nationality-specific rule before booking or travelling.",

            verifiedPair:
                false

        };

    }


    return null;

}


/* =========================================================
   GET STANDARD DESTINATION RESULT
========================================================= */

function getStandardDestinationResult(
    passport,
    destination,
    destinationData
) {

    const pairKey =
        `${passport}|${destination}`;


    if (
        africanDestinationOverrides[
            pairKey
        ]
    ) {

        return {
            ...africanDestinationOverrides[pairKey],
            verifiedPair: true
        };

    }


    return {

        entry:
            destinationData.entry,

        passport:
            destinationData.passport,

        documents:
            destinationData.documents,

        health:
            destinationData.health,

        financial:
            destinationData.financial,

        important:
            destinationData.important,

        verifiedPair:
            false

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
                "Contact Duchess for a destination-specific passport check before making travel arrangements.";

        }


        return;

    }


    /* -----------------------------------------
       DESTINATION DATA
    ----------------------------------------- */

    let destinationData = null;

    let result = null;


    /* -----------------------------------------
       AFRICA DESTINATIONS
    ----------------------------------------- */

    if (
        africanDestinationGuidance[
            selectedDestination
        ]
    ) {

        destinationData =
            africanDestinationGuidance[
                selectedDestination
            ];

    }


    /* -----------------------------------------
       ECOWAS DESTINATION
    ----------------------------------------- */

    else if (
        ecowasDestinationData[
            selectedDestination
        ]
    ) {

        destinationData =
            ecowasDestinationData[
                selectedDestination
            ];

    }


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
       GET RESULT
    ----------------------------------------- */

    if (
        africanPassports.includes(
            selectedPassport
        )
    ) {

        result =
            getAfricanDestinationResult(
                selectedPassport,
                selectedDestination,
                destinationData
            );

    }


    if (!result) {

        result =
            getStandardDestinationResult(
                selectedPassport,
                selectedDestination,
                destinationData
            );

    }


    if (!result) {

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

        if (result.verifiedPair) {

            requirementResultDescription.textContent =
                `Passport-specific travel guidance for ${passport} travelling to ${destination}.`;

        } else {

            requirementResultDescription.textContent =
                `Destination guidance for ${passport} travelling to ${destination}. The exact nationality-specific rule should be confirmed before travel.`;

        }

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