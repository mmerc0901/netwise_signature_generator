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

/* ==========================================
   Update Signature Data
========================================== */

function updateSignatureData() {

    signature.firstWord = firstWordInput.value.trim();

    signature.secondWord = secondWordInput.value.trim();

    signature.position = positionInput.value.trim();

    signature.phone = phoneInput.value.trim();

    signature.email = emailInput.value.trim();

}

/* ==========================================
   Generate Signature HTML
========================================== */

function generateSignatureHTML() {

    const positionHTML = signature.position.trim() !== ""
        ? `
            <div style="
                font-family:'Open Sans', Arial, sans-serif;
                font-size:16pt;
                font-weight:400;
                color:#000000;
                margin-top:2px;
                margin-bottom:18px;
            ">
                ${signature.position}
            </div>
        `
        : "";

    return `
<table cellpadding="0" cellspacing="0" border="0">

<tr>

<td valign="top" style="padding-right:28px;">

<img
src="${CONFIG.logo}"
width="${CONFIG.logoWidth}"
alt="Netwise Logo">

</td>

<td valign="middle">

<div style="
font-family:'Open Sans', Arial, sans-serif;
font-size:24pt;
font-weight:700;
line-height:1.05;
">

<span style="color:${CONFIG.firstWordColor};">
${signature.firstWord}
</span>

<span style="color:${CONFIG.secondWordColor};">
${signature.secondWord}
</span>

</div>

${positionHTML}

<table cellpadding="0" cellspacing="0" border="0">

<tr>

<td width="28">

<img
src="${CONFIG.phoneIcon}"
width="18">

</td>

<td style="
font-family:'Open Sans', Arial, sans-serif;
font-size:16pt;
font-weight:600;
color:${CONFIG.detailColor};
padding:6px 0;
">

${signature.phone}

</td>

</tr>

<tr>

<td width="28">

<img
src="${CONFIG.emailIcon}"
width="18">

</td>

<td style="
font-family:'Open Sans', Arial, sans-serif;
font-size:16pt;
font-weight:600;
color:${CONFIG.detailColor};
padding:6px 0;
">

${signature.email}

</td>

</tr>

</table>

</td>

</tr>

</table>
`;

}

/* ==========================================
   Render Signature
========================================== */

function renderSignature() {

    updateSignatureData();

    const html = generateSignatureHTML();

    previewContainer.innerHTML = html;

    htmlOutput.value = html;

}

/* ==========================================
   Copy HTML
========================================== */

function copyHTML() {

    navigator.clipboard.writeText(htmlOutput.value);

    copyButton.textContent = "✓ HTML Copied";

    copyButton.classList.add("success");

    setTimeout(() => {

        copyButton.textContent = "Copy HTML";

        copyButton.classList.remove("success");

    }, 2000);

}

/* ==========================================
   Event Listeners
========================================== */

firstWordInput.addEventListener("input", renderSignature);

secondWordInput.addEventListener("input", renderSignature);

positionInput.addEventListener("input", renderSignature);

phoneInput.addEventListener("input", renderSignature);

emailInput.addEventListener("input", renderSignature);

copyButton.addEventListener("click", copyHTML);

/* ==========================================
   Initialize
========================================== */

function initializeGenerator() {

    firstWordInput.value = signature.firstWord;

    secondWordInput.value = signature.secondWord;

    positionInput.value = signature.position;

    phoneInput.value = signature.phone;

    emailInput.value = signature.email;

    renderSignature();

}

initializeGenerator();
