(() => {
    "use strict";

    const body = document.body;
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isMobile = () => window.matchMedia("(max-width: 700px)").matches;

    const closeMenu = ({ returnFocus = false } = {}) => {
        if (!menuToggle || !siteNav) return;
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.dataset.open = "false";
        siteNav.setAttribute("aria-hidden", isMobile() ? "true" : "false");
        body.classList.remove("menu-is-open");

        if (returnFocus) menuToggle.focus();
    };

    const openMenu = () => {
        if (!menuToggle || !siteNav) return;
        menuToggle.setAttribute("aria-expanded", "true");
        siteNav.dataset.open = "true";
        siteNav.setAttribute("aria-hidden", "false");
        body.classList.add("menu-is-open");
        siteNav.querySelector("a")?.focus();
    };

    const syncMenuForViewport = () => {
        if (!menuToggle || !siteNav) return;
        if (!isMobile()) {
            menuToggle.setAttribute("aria-expanded", "false");
            siteNav.dataset.open = "false";
            siteNav.setAttribute("aria-hidden", "false");
            body.classList.remove("menu-is-open");
        } else if (menuToggle.getAttribute("aria-expanded") !== "true") {
            siteNav.setAttribute("aria-hidden", "true");
        }
    };

    menuToggle?.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        if (isOpen) closeMenu({ returnFocus: true });
        else openMenu();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const target = targetId ? document.querySelector(targetId) : null;
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
            target.setAttribute("tabindex", "-1");
            target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
            if (isMobile()) closeMenu();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
            closeMenu({ returnFocus: true });
        }

        if (event.key !== "Tab" || !isMobile() || menuToggle?.getAttribute("aria-expanded") !== "true") return;

        const focusableItems = [menuToggle, ...siteNav.querySelectorAll("a")];
        const firstItem = focusableItems[0];
        const lastItem = focusableItems[focusableItems.length - 1];

        if (event.shiftKey && document.activeElement === firstItem) {
            event.preventDefault();
            lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
            event.preventDefault();
            firstItem.focus();
        }
    });

    window.addEventListener("resize", syncMenuForViewport);
    syncMenuForViewport();

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    if (reduceMotion.matches) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    } else if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -5%" });
        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const sectionLinks = navLinks.filter((link) => link.getAttribute("href") !== "#top");
    const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        const activeSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                sectionLinks.forEach((link) => {
                    const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
                    link.setAttribute("aria-current", isCurrent ? "true" : "false");
                });
            });
        }, { rootMargin: "-35% 0px -55%", threshold: 0 });
        sections.forEach((section) => activeSectionObserver.observe(section));
    }
})();
