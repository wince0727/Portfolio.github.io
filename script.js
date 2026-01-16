const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("nav-links");


menuIcon.addEventListener("click", () => {
    navLinks.style.display = "flex";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});


closeIcon.addEventListener("click", () => {
    navLinks.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = "none";
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});
