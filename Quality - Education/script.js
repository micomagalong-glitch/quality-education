const sections = document.querySelectorAll("section");

    function revealSections() {
        const trigger = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < trigger) {
                section.classList.add("visible")
            }
        });
    }

window.addEventListener("scroll", revealSections);
revealSections();
function updateDimensions() {
    const width = window.innerWidth;

    const box = document.querySelector(".box"); // change class if needed

    if (!box) return;

    // Desktop
    if (width > 1024) {
        box.style.width = "600px";
        box.style.height = "400px";
    }
    // Tablet
    else if (width > 768) {
        box.style.width = "400px";
        box.style.height = "300px";
    }
    // Mobile
    else {
        box.style.width = "250px";
        box.style.height = "200px";
    }
}

updateDimensions();

window.addEventListener("resize", updateDimensions);