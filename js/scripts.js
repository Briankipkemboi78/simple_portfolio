document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector("#lightbox .close");

    // Select all lightbox-trigger links
    document.querySelectorAll(".lightbox-trigger").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor action
            lightbox.style.display = "flex"; // Show lightbox
            lightboxImg.src = this.href; // Set image src
        });
    });

    // Close the lightbox when clicking on the close button
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jumping behavior
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for spacing
                    behavior: "smooth"
                });

                // Remove active class from all links and add to the clicked link
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });
});

