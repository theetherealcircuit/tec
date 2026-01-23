gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
    const header = document.querySelector(".mfh-navbar");
    const link = document.querySelector(".mfh-link");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
        link.classList.add("scrolledLink");
    } else {
        header.classList.remove("scrolled");
        link.classList.remove("scrolledLink");
    }
});

const dropdown = document.querySelector(".mfh-dropdown");
const menu = dropdown.querySelector(".mfh-dropdown-menu");

dropdown.addEventListener("mouseenter", () => {
    gsap.to(menu, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
        pointerEvents: "auto"
    });
});

dropdown.addEventListener("mouseleave", () => {
    gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: "power2.in",
        pointerEvents: "none"
    });
});

// TITLE FADE + SLIDE
gsap.to(".hero-left", {
    y: -120,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


/* ===========================
   2. BACKGROUND IMAGE FADE + ZOOM
   =========================== */
gsap.to(".animated-bg", {
    scale: 1.25,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".main-hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


/* ===========================
   3. OVERLAY DARKNESS FADE OUT (subtle)
   =========================== */
gsap.to(".hero-overlay", {
    opacity: 0.2,
    scrollTrigger: {
        trigger: ".main-hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


/* ===========================
   4. BIRD ICON SCROLL MOVEMENT
   =========================== */
gsap.to(".floating-bird", {
    y: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".floating-leaf", {
    y: -120,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main-hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


/* ===========================
   5. TEXT APPEAR ANIMATION (ON LOAD)
   =========================== */
gsap.to(".mfh-title", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
});

gsap.to(".mfh-place", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.6
});

gsap.to(".mfh-date", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.9
});

gsap.to(".reg-btn", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    delay: 1.2
});

// Floating elements - infinite
gsap.to(".floating-birds", {
    x: 400,
    duration: 12,
    repeat: -1,
    ease: "none",
});

gsap.to(".floating-leaves", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// ZIG-ZAG – Premium Animation
gsap.utils.toArray(".zigzag-block").forEach((block, i) => {

    const isReverse = block.classList.contains("reverse");

    gsap.fromTo(block,
        { opacity: 0, y: 80 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play reverse play reverse",
                scrub: false
            }
        }
    );

    /* IMAGE PARALLAX */
    gsap.from(block.querySelector(".zigzag-image img"), {
        x: isReverse ? 80 : -80,
        opacity: 0,
        scale: 1.1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: block,
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play reverse play reverse"
        }
    });

    /* TEXT PARALLAX */
    gsap.from(block.querySelector(".zigzag-content"), {
        x: isReverse ? -80 : 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: block,
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play reverse play reverse"
        }
    });

});





// ------------------------------------------------------------
// NEW HORIZONTAL SCROLL SECTION
// ------------------------------------------------------------
/* Calculate total width */
let totalW = document.querySelector(".exp-horizontal").scrollWidth;

gsap.to(".exp-horizontal", {
    x: () => -(totalW - window.innerWidth + 250),
    ease: "none",
    scrollTrigger: {
        trigger: ".exp-wrapper",
        start: "top top",
        end: () => "+=" + (totalW - window.innerWidth),
        scrub: true,
        pin: true,
    }
});

/* Card reveal animations */
gsap.utils.toArray(".exp-card").forEach((card, i) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".exp-wrapper",
            start: "top 85%",
            scrub: true,
        }
    });
});



/* Reveal animation per craft block */
gsap.utils.toArray(".craft-card").forEach((card) => {

    // Fade + Lift
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        }
    });

    // Image parallax
    let img = card.querySelector("img");

    gsap.to(img, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

});


gsap.utils.toArray(".community-card").forEach((card, i) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        }
    });
});


