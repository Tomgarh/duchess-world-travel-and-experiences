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

    nigeria: "Nigeria",
    liberia: "Liberia",
    ghana: "Ghana",
    senegal: "Senegal",
    "sierra-leone": "Sierra Leone",
    gambia: "The Gambia",
    guinea: "Guinea",
    "guinea-bissau": "Guinea-Bissau",
    "cote-divoire": "Côte d'Ivoire",
    benin: "Benin",
    togo: "Togo",
    "cape-verde": "Cabo Verde",

    kenya: "Kenya",
    tanzania: "Tanzania + Zanzibar",
    "south-africa": "South Africa",
    morocco: "Morocco",
    egypt: "Egypt",
    rwanda: "Rwanda",
    seychelles: "Seychelles",

    other: "Other Destination"

};


/* =========================================================
   PASSPORT NAMES
========================================================= */

const passportNames = {

    nigeria: "Nigerian Passport",
    ghana: "Ghanaian Passport",
    liberia: "Liberian Passport",
    senegal: "Senegalese Passport",
    "sierra-leone": "Sierra Leonean Passport",
    gambia: "Gambian Passport",
    guinea: "Guinean Passport",
    "guinea-bissau": "Guinea-Bissau Passport",
    "cote-divoire": "Côte d'Ivoire Passport",
    benin: "Beninese Passport",
    togo: "Togolese Passport",
    "cape-verde": "Cabo Verdean Passport",

    "south-africa-passport": "South African Passport",
    "kenya-passport": "Kenyan Passport",
    "tanzania-passport": "Tanzanian Passport",
    "rwanda-passport": "Rwandan Passport",
    "ethiopia-passport": "Ethiopian Passport",
    "uganda-passport": "Ugandan Passport",
    "morocco-passport": "Moroccan Passport",

    uk: "UK Passport",
    france: "French Passport",
    germany: "German Passport",
    italy: "Italian Passport",
    spain: "Spanish Passport",
    netherlands: "Dutch Passport",
    belgium: "Belgian Passport",
    switzerland: "Swiss Passport",
    austria: "Austrian Passport",
    sweden: "Swedish Passport",
    norway: "Norwegian Passport",
    denmark: "Danish Passport",
    finland: "Finnish Passport",
    ireland: "Irish Passport",
    portugal: "Portuguese Passport",
    poland: "Polish Passport",
    "czech-republic": "Czech Passport",
    greece: "Greek Passport",

    usa: "U.S. Passport",
    canada: "Canadian Passport",
    mexico: "Mexican Passport",

    china: "Chinese Passport",
    japan: "Japanese Passport",
    "south-korea": "South Korean Passport",
    india: "Indian Passport",
    singapore: "Singaporean Passport",

    australia: "Australian Passport",
    "new-zealand": "New Zealand Passport",

    other: "Other Passport"

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
    "uganda-passport",
    "morocco-passport"

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
   DESTINATION GUIDANCE
========================================================= */

const destinationGuidance = {

    kenya: {

        entry:
            "Kenya applies nationality-specific entry rules. Some African passport holders are exempt from the eTA requirement while other nationalities may need an approved eTA or another applicable entry permission.",

        passport:
            "Carry a passport meeting Kenya's current validity and blank-page requirements. The current general passport standard for Kenya's eTA process is at least 6 months' validity after planned arrival and at least one blank page.",

        documents:
            "Keep accommodation details, arrival and departure itinerary, return or onward travel information and other supporting documents available.",

        health:
            "Yellow Fever documentation may apply depending on the traveller's route and recent travel history.",

        financial:
            "Travellers should be prepared to show accommodation, onward or return travel and other supporting information if requested.",

        important:
            "Kenya's eTA system contains nationality-specific exemptions. Do not assume that the same rule applies to every passport."

    },


    tanzania: {

        entry:
            "Tanzania applies nationality-specific visa and entry rules. Citizens of countries on Tanzania's visa-exempt list do not require a visa for qualifying visits.",

        passport:
            "Carry a valid passport or accepted travel document with at least 6 months' validity.",

        documents:
            "Keep accommodation information, itinerary and return or onward travel details available.",

        health:
            "Yellow Fever documentation may apply depending on the traveller's route and previous travel history.",

        financial:
            "Keep accommodation, onward or return travel and sufficient-funds evidence available if requested.",

        important:
            "For Zanzibar, check the latest Zanzibar-specific travel insurance and entry requirements before departure."

    },


    "south-africa": {

        entry:
            "South Africa applies nationality-specific visitor entry rules. Some passport holders may be visa-exempt while others require a visitor visa before travel.",

        passport:
            "Carry a valid passport or accepted travel document that satisfies South African immigration and airline requirements.",

        documents:
            "Depending on nationality, travellers may need accommodation details, itinerary, financial evidence, return or onward travel and other supporting documents.",

        health:
            "Yellow Fever documentation may apply depending on countries visited or transited before entering South Africa.",

        financial:
            "Travellers may be asked to demonstrate sufficient funds and provide accommodation and return or onward travel information.",

        important:
            "Check the latest South African immigration and border requirements before departure."

    },


    morocco: {

        entry:
            "Morocco's entry requirements depend on nationality, residence, passport type and travel circumstances. Use Morocco's official entry-eligibility system to determine the applicable route.",

        passport:
            "Carry a valid ordinary passport covering the intended trip. Additional passport requirements may apply depending on the visa route.",

        documents:
            "Depending on the applicable entry route, travellers may need accommodation details, itinerary, proof of funds, travel insurance or other supporting documents.",

        health:
            "Check current Moroccan health requirements according to your itinerary and recent travel history.",

        financial:
            "Travellers may be expected to demonstrate sufficient funds, accommodation arrangements and onward or return travel.",

        important:
            "Morocco's entry route can differ by nationality. Verify the current requirement before travelling."

    },


    egypt: {

        entry:
            "Egypt's entry requirements depend on nationality. Some nationalities may qualify for an e-Visa while others use a different visa or consular route.",

        passport:
            "Travellers should carry a passport with sufficient validity for the intended trip.",

        documents:
            "Depending on the applicable visa route, travellers may need accommodation information, itinerary, invitation documents or other supporting evidence.",

        health:
            "Check current Egyptian health requirements according to the itinerary and recent travel history.",

        financial:
            "Keep accommodation, return or onward travel and sufficient-funds evidence available if requested.",

        important:
            "Do not assume that every passport has the same Egyptian visa route. Confirm nationality-specific requirements before travel."

    },


    rwanda: {

        entry:
            "Rwanda allows citizens of all countries to obtain a visa on arrival. Citizens of countries with applicable African Union arrangements may receive a visa-fee exemption for qualifying short stays, while EAC citizens receive special entry treatment.",

        passport:
            "Rwanda generally requires a genuine accepted travel document valid for at least 6 months.",

        documents:
            "Keep accommodation details, return or onward travel information and other supporting documents available.",

        health:
            "Travellers arriving from Yellow Fever risk areas may need a valid Yellow Fever vaccination certificate.",

        financial:
            "Be prepared to demonstrate accommodation and sufficient funds if requested.",

        important:
            "Rwanda has different stay arrangements depending on nationality. Confirm the exact rule applicable to the passport before travel."

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
   ECOWAS DESTINATION DATA
========================================================= */

function createEcowasDestination() {

    return {

        entry:
            ecowasEntry,

        passport:
            "Carry a valid passport or accepted ECOWAS travel document.",

        documents:
            "Keep identification, accommodation and return or onward travel information available.",

        health:
            "Health and vaccination requirements depend on route and travel history.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "ECOWAS free movement does not remove applicable border, immigration and health procedures.",

        verifiedPair:
            false

    };

}


const ecowasDestinationData = {

    nigeria: createEcowasDestination(),
    liberia: createEcowasDestination(),
    ghana: createEcowasDestination(),
    senegal: createEcowasDestination(),
    "sierra-leone": createEcowasDestination(),
    gambia: createEcowasDestination(),
    guinea: createEcowasDestination(),
    "guinea-bissau": createEcowasDestination(),
    "cote-divoire": createEcowasDestination(),
    benin: createEcowasDestination(),
    togo: createEcowasDestination(),

    "cape-verde": {

        entry:
            "Cabo Verde has nationality-specific visa exemptions. Eligible ECOWAS nationals may be visa-exempt for qualifying stays, but the exact maximum stay depends on nationality. EASE pre-registration is still required.",

        passport:
            "Passport should be valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health and vaccination requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "The exact visa exemption and maximum permitted stay must be checked against Cabo Verde's current nationality-specific list.",

        verifiedPair:
            false

    }

};


/* =========================================================
   VERIFIED PASSPORT → DESTINATION RULES
========================================================= */

const passportDestinationRules = {


    /* =====================================================
       KENYA
    ===================================================== */

    "nigeria|kenya": {

        entry:
            "Nigerian passport holders are currently listed among African nationalities exempt from Kenya's eTA for qualifying stays of up to 60 days.",

        passport:
            "Carry a Nigerian passport valid for at least 6 months after planned arrival and with at least one blank page.",

        documents:
            "Keep your arrival and departure itinerary, accommodation booking and contact information available.",

        health:
            "Yellow Fever documentation may apply depending on the route and recent travel history.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Nigeria is currently in Kenya's 60-day eTA-exempt category. Confirm the current exemption and entry conditions before departure.",

        verifiedPair:
            true

    },


    "ghana|kenya": {

        entry:
            "Ghanaian passport holders are currently listed among nationalities exempt from Kenya's eTA for qualifying stays of up to 90 days.",

        passport:
            "Carry a Ghanaian passport meeting Kenya's current validity requirements and with at least one blank page.",

        documents:
            "Keep your itinerary, accommodation booking and contact information available.",

        health:
            "Yellow Fever documentation may apply depending on the route.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Ghana is currently in Kenya's 90-day eTA-exempt category. Confirm the current entry conditions before travel.",

        verifiedPair:
            true

    },


    "cape-verde|kenya": {

        entry:
            "Cabo Verdean passport holders are currently listed among African nationalities exempt from Kenya's eTA for qualifying stays of up to 60 days.",

        passport:
            "Carry a Cabo Verdean passport valid for at least 6 months after planned arrival and with at least one blank page.",

        documents:
            "Keep your itinerary, accommodation booking and contact information available.",

        health:
            "Yellow Fever documentation may apply depending on the route.",

        financial:
            "Keep accommodation and onward or return travel information available.",

        important:
            "Cabo Verde is currently in Kenya's 60-day eTA-exempt category. Confirm the current entry conditions before departure.",

        verifiedPair:
            true

    },


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
            "Use Kenya's official eTA system before beginning the journey.",

        verifiedPair:
            true

    },


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
            "Confirm the current eTA conditions before departure.",

        verifiedPair:
            true

    },


    "south-africa-passport|kenya": {

        entry:
            "South African ordinary passport holders are exempt from Kenya's eTA for qualifying stays of up to 90 days.",

        passport:
            "Carry a valid South African passport with at least 6 months' validity after planned arrival and at least one blank page.",

        documents:
            "Keep your arrival and departure itinerary, accommodation details and other supporting travel information available.",

        health:
            "Yellow Fever documentation may be required depending on the route.",

        financial:
            "Keep evidence of sufficient funds and your accommodation and onward or return travel arrangements available if requested.",

        important:
            "South African ordinary passport holders do not need a Kenya eTA for qualifying stays of up to 90 days.",

        verifiedPair:
            true

    },


    "tanzania-passport|kenya": {

        entry:
            "Tanzanian citizens are exempt from Kenya's eTA. Tanzania is an East African Partner State.",

        passport:
            "Carry a valid Tanzanian passport or accepted EAC travel document.",

        documents:
            "Keep accommodation details, travel itinerary and onward or return travel information available.",

        health:
            "Check Kenya's current health and vaccination requirements according to the route.",

        financial:
            "Keep evidence of sufficient funds and your travel arrangements available if requested.",

        important:
            "Tanzanian citizens do not need a Kenya eTA for qualifying entry.",

        verifiedPair:
            true

    },


    /* =====================================================
       TANZANIA
    ===================================================== */

    "ghana|tanzania": {

        entry:
            "Ghanaian passport holders are listed among nationalities that do not require a Tanzanian visa for qualifying visits.",

        passport:
            "Carry a valid Ghanaian passport meeting Tanzania's current passport requirements.",

        documents:
            "Keep accommodation details, itinerary and return or onward travel information available.",

        health:
            "Yellow Fever documentation may apply depending on the route and previous travel history.",

        financial:
            "Keep evidence of sufficient funds and accommodation available if requested.",

        important:
            "Ghana is on Tanzania's visa-exempt list. Confirm the latest entry conditions before travel.",

        verifiedPair:
            true

    },


    "kenya-passport|tanzania": {

        entry:
            "Kenyan citizens do not require a Tanzanian tourist visa for qualifying visits.",

        passport:
            "Carry a valid Kenyan passport or accepted EAC travel document.",

        documents:
            "Keep accommodation details, itinerary and onward or return travel information available.",

        health:
            "Check Tanzania's current Yellow Fever requirements for your route.",

        financial:
            "Keep sufficient funds and supporting travel information available if requested.",

        important:
            "Kenyan citizens are visa-exempt for qualifying entry to Tanzania.",

        verifiedPair:
            true

    },


    "south-africa-passport|tanzania": {

        entry:
            "South African passport holders are visa-exempt for entry into Tanzania for qualifying visits.",

        passport:
            "Carry a valid South African passport or accepted travel document with at least 6 months' validity.",

        documents:
            "Keep your return or onward ticket, accommodation details and other supporting travel information available.",

        health:
            "Yellow Fever certification may be required depending on the countries visited or transited before Tanzania.",

        financial:
            "Keep evidence of sufficient funds for the intended stay.",

        important:
            "If entering Zanzibar, check the latest Zanzibar-specific travel insurance and entry requirements before departure.",

        verifiedPair:
            true

    },


    "nigeria|tanzania": {

        entry:
            "Nigerian passport holders are not listed among Tanzania's visa-exempt nationalities. Nigerian travellers should obtain the appropriate Tanzanian visa or other applicable entry permission before travel.",

        passport:
            "Carry a Nigerian passport meeting Tanzania's current passport-validity requirements.",

        documents:
            "Prepare accommodation details, itinerary, return or onward travel information and supporting documents required for the applicable visa.",

        health:
            "Tanzania's health guidance lists Nigeria among countries from which travellers require a valid Yellow Fever vaccination certificate for entry.",

        financial:
            "Keep evidence of sufficient funds, accommodation and onward or return travel available if requested.",

        important:
            "Check Tanzania's official immigration system before travel for the current visa category and application procedure.",

        verifiedPair:
            true

    },


    /* =====================================================
       RWANDA
    ===================================================== */

    "nigeria|rwanda": {

        entry:
            "Nigerian citizens qualify for Rwanda's African Union visa-fee waiver arrangement for qualifying stays of up to 30 days.",

        passport:
            "Carry a genuine accepted Nigerian passport or travel document valid for at least 6 months.",

        documents:
            "Keep accommodation details and return or onward travel information available.",

        health:
            "A Yellow Fever vaccination certificate may be required depending on the travel route.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Rwanda permits visa on arrival for all nationalities, while qualifying African nationals receive a visa-fee waiver.",

        verifiedPair:
            true

    },


    "ghana|rwanda": {

        entry:
            "Ghanaian citizens qualify for Rwanda's African Union visa-fee waiver arrangement for qualifying stays of up to 30 days.",

        passport:
            "Carry a genuine accepted Ghanaian passport or travel document valid for at least 6 months.",

        documents:
            "Keep accommodation details and return or onward travel information available.",

        health:
            "Check current health requirements according to the route.",

        financial:
            "Keep evidence of sufficient funds and accommodation available if requested.",

        important:
            "Confirm Rwanda's current entry conditions before departure.",

        verifiedPair:
            true

    },


    "cape-verde|rwanda": {

        entry:
            "Cabo Verdean citizens qualify for Rwanda's African Union visa-fee waiver arrangement for qualifying stays of up to 30 days.",

        passport:
            "Carry a valid Cabo Verdean passport or accepted travel document.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements according to the route.",

        financial:
            "Keep evidence of sufficient funds available if requested.",

        important:
            "Confirm Rwanda's current entry conditions before departure.",

        verifiedPair:
            true

    },


    "south-africa-passport|rwanda": {

        entry:
            "South African citizens qualify for Rwanda's African Union visa-fee waiver arrangement for a 30-day stay.",

        passport:
            "Carry a passport or accepted travel document valid for at least 6 months.",

        documents:
            "Keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements based on your route.",

        financial:
            "Be prepared to demonstrate sufficient funds and accommodation if requested.",

        important:
            "Confirm the current Rwanda immigration position before departure.",

        verifiedPair:
            true

    },


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
            "EAC citizens receive special entry treatment in Rwanda.",

        verifiedPair:
            true

    },


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
            "EAC citizens receive special entry treatment in Rwanda.",

        verifiedPair:
            true

    },


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
            "Confirm the current EAC entry requirements before travelling.",

        verifiedPair:
            true

    },


    /* =====================================================
       SEYCHELLES
    ===================================================== */

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
            "Visa-free entry does not remove the requirement to obtain the Seychelles Travel Authorisation before departure.",

        verifiedPair:
            true

    },


    "ghana|seychelles": {

        entry:
            "Seychelles is visa-free for Ghanaian passport holders, subject to visitor conditions and the required Travel Authorisation.",

        passport:
            "Carry a valid Ghanaian passport covering the intended stay and return journey.",

        documents:
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Check current health requirements based on your recent travel history.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Complete the Travel Authorisation before departure even though a visa is not generally required.",

        verifiedPair:
            true

    },


    "cape-verde|seychelles": {

        entry:
            "Seychelles is visa-free for Cabo Verdean passport holders, subject to visitor conditions and the required Travel Authorisation.",

        passport:
            "Carry a valid Cabo Verdean passport covering the intended stay and return journey.",

        documents:
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Check current health requirements based on your recent travel history.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Complete the Travel Authorisation before departure.",

        verifiedPair:
            true

    },


    "south-africa-passport|seychelles": {

        entry:
            "Seychelles is visa-free for South African passport holders, subject to visitor conditions and the required Travel Authorisation.",

        passport:
            "Carry a valid South African passport covering the intended stay and return journey.",

        documents:
            "Have confirmed accommodation, a return or onward ticket and the required Travel Authorisation.",

        health:
            "Check current health requirements based on recent travel history.",

        financial:
            "Seychelles publishes a minimum visitor funds requirement of US$150 per day or equivalent.",

        important:
            "Complete the Travel Authorisation before departure.",

        verifiedPair:
            true

    },


    /* =====================================================
       CABO VERDE
    ===================================================== */

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
            "Nigeria is currently listed by Cabo Verde as visa-exempt for up to 90 days. EASE pre-registration is still required.",

        verifiedPair:
            true

    },


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
            "Ghana is currently listed by Cabo Verde as visa-exempt for up to 90 days. EASE pre-registration is still required.",

        verifiedPair:
            true

    },


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
            "Liberia is currently listed by Cabo Verde as visa-exempt for up to 90 days.",

        verifiedPair:
            true

    },


    "senegal|cape-verde": {

        entry:
            "Senegalese passport holders are currently visa-exempt for qualifying stays of up to 90 days in Cabo Verde.",

        passport:
            "Carry a passport valid for at least 6 months from entry.",

        documents:
            "Complete EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "Check current health requirements according to the route.",

        financial:
            "Keep evidence of accommodation and sufficient funds available if requested.",

        important:
            "Senegal is currently listed by Cabo Verde as visa-exempt for up to 90 days.",

        verifiedPair:
            true

    },


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
            "Sierra Leone is currently listed by Cabo Verde as visa-exempt for up to 90 days.",

        verifiedPair:
            true

    },


    /* =====================================================
       MOROCCO → CABO VERDE
    ===================================================== */

    "morocco-passport|cape-verde": {

        entry:
            "Moroccan passport holders are currently visa-exempt for stays of up to 30 days in Cabo Verde.",

        passport:
            "Carry a Moroccan passport valid for at least 6 months from the date of entry into Cabo Verde.",

        documents:
            "Complete the mandatory EASE pre-registration before travel and keep accommodation and return or onward travel information available.",

        health:
            "No routine vaccination requirement is currently stated specifically for Moroccan passport holders. Additional health or vaccination documentation may apply depending on the travel route and recent travel history.",

        financial:
            "Keep evidence of accommodation, return or onward travel and sufficient funds available if requested at the border.",

        important:
            "Moroccan citizens are currently visa-exempt for up to 30 days. EASE pre-registration is still mandatory before travel.",

        verifiedPair:
            true

    }

};


/* =========================================================
   GET TRAVEL RESULT
========================================================= */

function getTravelResult(
    passport,
    destination
) {

    const pairKey =
        `${passport}|${destination}`;


    /* -----------------------------------------------------
       EXACT PASSPORT + DESTINATION RULE
    ----------------------------------------------------- */

    if (
        passportDestinationRules[pairKey]
    ) {

        return {
            ...passportDestinationRules[pairKey]
        };

    }


    /* -----------------------------------------------------
       ECOWAS → ECOWAS
    ----------------------------------------------------- */

    if (
        ecowasPassports.includes(passport) &&
        ecowasDestinations.includes(destination)
    ) {

        return {
            ...ecowasDestinationData[destination],

            verifiedPair:
                false,

            important:
                "ECOWAS citizens may benefit from regional free-movement arrangements, but this result is a general regional guide rather than an individual nationality verification. Confirm the current entry, travel-document and health requirements before departure."

        };

    }


    /* -----------------------------------------------------
       AFRICAN PASSPORT → RWANDA
    ----------------------------------------------------- */

    if (
        africanPassports.includes(passport) &&
        destination === "rwanda"
    ) {

        return {

            entry:
                "Rwanda allows citizens of all countries to obtain a visa on arrival. Qualifying African Union citizens receive applicable visa-fee exemptions for short stays, while EAC citizens receive special entry treatment.",

            passport:
                "Carry a genuine accepted travel document valid for at least 6 months.",

            documents:
                "Keep accommodation and return or onward travel information available.",

            health:
                "Health and vaccination requirements depend on the travel route and recent travel history.",

            financial:
                "Be prepared to demonstrate sufficient funds and accommodation if requested.",

            important:
                "This is a general Rwanda rule rather than an individually verified passport combination. Confirm the exact stay period applicable to your passport before travel.",

            verifiedPair:
                false

        };

    }


    /* -----------------------------------------------------
       AFRICAN PASSPORT → CABO VERDE
    ----------------------------------------------------- */

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
                "EASE pre-registration is required before travel. Additional visa or Airport Security Tax requirements may apply depending on nationality.",

            health:
                "Check current health and vaccination requirements according to the route.",

            financial:
                "Keep accommodation, return or onward travel and sufficient-funds evidence available if requested.",

            important:
                "This passport-to-destination combination has not been individually verified in the Duchess database. Check Cabo Verde's current official nationality list before travelling.",

            verifiedPair:
                false

        };

    }


    /* -----------------------------------------------------
       DESTINATION GENERAL GUIDANCE
    ----------------------------------------------------- */

    if (
        destinationGuidance[destination]
    ) {

        const data =
            destinationGuidance[destination];

        return {

            ...data,

            verifiedPair:
                false

        };

    }


    /* -----------------------------------------------------
       ECOWAS FALLBACK
    ----------------------------------------------------- */

    if (
        ecowasDestinationData[destination]
    ) {

        return {

            ...ecowasDestinationData[destination],

            verifiedPair:
                false

        };

    }


    return null;

}


/* =========================================================
   UPDATE REQUIREMENTS DISPLAY
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


    /* -----------------------------------------------------
       NOTHING SELECTED
    ----------------------------------------------------- */

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


    /* -----------------------------------------------------
       OTHER DESTINATION
    ----------------------------------------------------- */

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
                "Contact Duchess World Travel & Experiences for a destination-specific passport check before making travel arrangements.";

        }


        return;

    }


    /* -----------------------------------------------------
       GET RESULT
    ----------------------------------------------------- */

    const result =
        getTravelResult(
            selectedPassport,
            selectedDestination
        );


    if (!result) {

        return;

    }


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


    /* -----------------------------------------------------
       SHOW RESULT
    ----------------------------------------------------- */

    passportDefault.classList.remove(
        "active"
    );

    passportDynamic.classList.add(
        "active"
    );


    /* -----------------------------------------------------
       DESTINATION LABEL
    ----------------------------------------------------- */

    if (requirementDestinationLabel) {

        requirementDestinationLabel.textContent =
            destination.toUpperCase();

    }


    /* -----------------------------------------------------
       RESULT TITLE
    ----------------------------------------------------- */

    if (requirementResultTitle) {

        requirementResultTitle.textContent =
            `${passport} → ${destination}`;

    }


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    if (requirementResultDescription) {

        if (result.verifiedPair) {

            requirementResultDescription.textContent =
                `Passport-specific travel guidance for ${passport} travelling to ${destination}.`;

        } else {

            requirementResultDescription.textContent =
                `General destination guidance for ${passport} travelling to ${destination}. Confirm the exact nationality-specific rule before travel.`;

        }

    }


    /* -----------------------------------------------------
       ENTRY
    ----------------------------------------------------- */

    if (entryGuidance) {

        entryGuidance.textContent =
            result.entry ||
            generalTravelNotes.documents;

    }


    /* -----------------------------------------------------
       PASSPORT
    ----------------------------------------------------- */

    if (passportGuidance) {

        passportGuidance.textContent =
            result.passport ||
            generalTravelNotes.passport;

    }


    /* -----------------------------------------------------
       DOCUMENTS
    ----------------------------------------------------- */

    if (documentGuidance) {

        documentGuidance.textContent =
            result.documents ||
            generalTravelNotes.documents;

    }


    /* -----------------------------------------------------
       HEALTH
    ----------------------------------------------------- */

    if (healthGuidance) {

        healthGuidance.textContent =
            result.health ||
            generalTravelNotes.health;

    }


    /* -----------------------------------------------------
       FINANCIAL
    ----------------------------------------------------- */

    if (financialGuidance) {

        financialGuidance.textContent =
            result.financial ||
            generalTravelNotes.financial;

    }


    /* -----------------------------------------------------
       IMPORTANT
    ----------------------------------------------------- */

    if (importantGuidance) {

        importantGuidance.textContent =
            result.important ||
            generalTravelNotes.important;

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
   INITIAL REQUIREMENTS CHECK
========================================================= */

updateTravelRequirements();


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