gsap.registerPlugin(ScrollTrigger);

/* 1 — Loader */
setTimeout(() => {
    gsap.to(".loader", {
        opacity: 0,
        duration: 0.7,
        onComplete: () => document.querySelector(".loader").style.display = "none"
    });

    gsap.to("#page", { opacity: 1, duration: 1 });
}, 3500);

/* 2 — Hero entrance */
gsap.from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",
    delay: 0.4
});

gsap.from(".hero-sub", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    delay: 0.7
});

gsap.utils.toArray(".block").forEach((block) => {

    let img = block.querySelector(".block-img");
    let text = block.querySelector(".block-text");

    gsap.timeline({
        scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,     // <-- reverse animation works
            toggleActions: "play reverse play reverse",
        }
    })
        .to(block, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        })
        .to(img, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
        }, "<")
        .to(text, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
        }, "<");
});