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

// Portfolio Filter

const filterContainer = document.querySelector(".portfolio-filter-nav");
const galleryItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (e) => {
    e.preventDefault();
    filterContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-id");
    galleryItems.forEach((item) => {
        if (item.classList.contains(filterValue) || filterValue === "all") {
            item.classList.remove("hide");
            item.classList.add("show");
        } else {
            item.classList.remove("show");
            item.classList.add("hide");
        }
    });
});