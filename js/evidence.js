// ======================================
// Evidence Centre Lightbox
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-card img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".close-lightbox");

    images.forEach(image => {

        image.addEventListener("click", () => {

            // Don't open broken placeholder images
            if (!image.getAttribute("src") || image.naturalWidth === 0) return;

            lightboxImage.src = image.src;
            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeLightbox() {

        lightbox.classList.remove("active");
        lightboxImage.src = "";
        document.body.style.overflow = "";

    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeLightbox();

        }

    });

});