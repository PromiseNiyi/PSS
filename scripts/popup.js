document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.getElementById("small-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const menu = document.getElementById("menu");
    const blurOverlay = document.getElementById("blur-overlay");
    const menuItems = document.querySelectorAll("#menu ul li a");

    openMenuButton.addEventListener("click", () => {
        menu.classList.remove("hidden");
        menu.style.opacity = "1";
        blurOverlay.classList.remove("hidden");
        blurOverlay.style.opacity = "1";
    });

    // closeMenuButton.addEventListener("click", () => {
        // menu.style.opacity = "0";
        // blurOverlay.style.opacity = "0";
        // setTimeout(() => {
            // menu.classList.add("hidden");
            // blurOverlay.classList.add("hidden");
        // }, 300); // Match this duration with the CSS transition duration
    // });


    closeMenuButton.addEventListener("click", () => {
        closeMenu();
    });

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            closeMenu();
        });
    });

    function closeMenu() {
        menu.style.opacity = "0";
        blurOverlay.style.opacity = "0";
        setTimeout(() => {
            menu.classList.add("hidden");
            blurOverlay.classList.add("hidden");
        }, 300); // Match this duration with the CSS transition duration
    }


    blurOverlay.addEventListener("click", () => {
        menu.style.opacity = "0";
        blurOverlay.style.opacity = "0";
        setTimeout(() => {
            menu.classList.add("hidden");
            blurOverlay.classList.add("hidden");
        }, 300); // Match this duration with the CSS transition duration
    });

});

