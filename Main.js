/* 
Name: [Zachary Grohotolski]
Student ID: [5277]
Course: [IST 256]
Assignment: DOM Interactivity
Date: [2/8/2026]
*/


// Buttons
var skillsButton = document.getElementById("skills");
var aboutButton = document.getElementById("about");
var projectButton = document.getElementById("experience");
var contactButton = document.getElementById("contact");

// Sections
var skillsSection = document.getElementById("skillsSection");
var aboutSection = document.getElementById("aboutSection");
var projectSection = document.getElementById("projectSection");
var contactSection = document.getElementById("contactSection");

// Default view
if (skillsSection) skillsSection.style.display = "block";
if (aboutSection) aboutSection.style.display = "none";
if (projectSection) projectSection.style.display = "none";
if (contactSection) contactSection.style.display = "none";

// Functions to show sections
function showSkills() {
    skillsSection.style.display = "block";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    contactSection.style.display = "none";
}

function showAbout() {
    skillsSection.style.display = "none";
    aboutSection.style.display = "block";
    projectSection.style.display = "none";
    contactSection.style.display = "none";
}

function showProject() {
    skillsSection.style.display = "none";
    aboutSection.style.display = "none";
    projectSection.style.display = "block";
    contactSection.style.display = "none";
}

function showContact() {
    skillsSection.style.display = "none";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    contactSection.style.display = "block";
}

// Attach button events
if (skillsButton) skillsButton.onclick = showSkills;
if (aboutButton) aboutButton.onclick = showAbout;
if (projectButton) projectButton.onclick = showProject;
if (contactButton) contactButton.onclick = showContact;

// Hover effect for project image
var projectImage = document.getElementById("ProjectImage");

function enlargeImage() {
    projectImage.style.transform = "scale(1.1)";
}

function normalImage() {
    projectImage.style.transform = "scale(1)";
}

if (projectImage) {
    projectImage.onmouseover = enlargeImage;
    projectImage.onmouseout = normalImage;
}

// Contact form button
var submitButton = document.getElementById("submitButton");

function showMessage() {
    window.alert("Your message has been sent!");
}

if (submitButton) submitButton.onclick = showMessage;
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});