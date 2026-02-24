/* 
Zachary Grohotolski
IST 256
DOM Interactivity
*/

// ================= ACCORDION =================
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("active");
    });
});

// ================= DARK MODE =================
const toggleButton = document.getElementById("darkModeToggle");

if (toggleButton) {
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

// ================= IMAGE HOVER (optional fix) =================
const projectImage = document.getElementById("projectImage");

if (projectImage) {
    projectImage.addEventListener("mouseover", function () {
        projectImage.style.transform = "scale(1.1)";
    });

    projectImage.addEventListener("mouseout", function () {
        projectImage.style.transform = "scale(1)";
    });
}