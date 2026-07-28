/* ==========================================
   Netwise Signature Generator
   script.js
========================================== */


/* ==========================================
   Configuration
========================================== */

const CONFIG = {

    logo: "assets/Logo_2026.png",

    phoneIcon: "assets/icon-phone.png",

    emailIcon: "assets/icon-mail.png",

    logoWidth: 170,

    firstWordColor: "#0d064f",

    secondWordColor: "#000000",

    detailColor: "#0d064f"

};


/* ==========================================
   DOM References
========================================== */

const firstWordInput = document.getElementById("firstWord");

const secondWordInput = document.getElementById("secondWord");

const positionInput = document.getElementById("position");

const phoneInput = document.getElementById("phone");

const emailInput = document.getElementById("email");

const previewContainer = document.getElementById("previewContainer");

const htmlOutput = document.getElementById("htmlOutput");

const copyButton = document.getElementById("copyButton");


/* ==========================================
   Signature Data
========================================== */

const signature = {

    firstWord: "Customer",

    secondWord: "Support",

    position: "Technical Support Specialist",

    phone: "0952.483.2095",

    email: "cs1@netwiseit.org"

};
