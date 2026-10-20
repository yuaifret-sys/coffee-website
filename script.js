const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
    const setMobileMenuOpen = (isOpen) => {
        navLinks.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "បិទមឺនុយ" : "បើកមឺនុយ");
    };

    menuToggle.addEventListener("click", () => {
        setMobileMenuOpen(!navLinks.classList.contains("active"));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMobileMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMobileMenuOpen(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            setMobileMenuOpen(false);
        }
    });
}