function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

function showMessage() {
    alert(
        "This is a demo banking website.\n\n" +
        "Internet banking and other services are not connected to a real bank system."
    );
}

// Close mobile menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});
