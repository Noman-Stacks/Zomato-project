// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Animate menu items on hover
    const menuLinks = document.querySelectorAll("header ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s ease-in-out";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Click animation on main image
    const mainImage = document.querySelector("main img");
    mainImage.addEventListener("click", () => {
        mainImage.classList.add("clicked");
        setTimeout(() => {
            mainImage.classList.remove("clicked");
        }, 300);
    });
});
