const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
    document.querySelector(".portfolio-navbar").classList.toggle("show");
})

// QUILIFICATIONS MENU

const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
    event.preventDefault();
    const clickedItemId = event.target.dataset.id;
    if (clickedItemId) {
        resumeHeading.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        resumeTabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        const correspondingTab = document.getElementById(clickedItemId);
        correspondingTab.classList.add("active");
    }
};