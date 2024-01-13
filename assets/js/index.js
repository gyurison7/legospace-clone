// sc-main
gsap.to(".sc-main .img-wrapper", {
  scrollTrigger: {
    trigger: ".sc-main",
    start: "5% 0%",
    end: "100% 0%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
  y: 700,
  // y: function () {},
  scale: 0.25,
});

// sc-beginning
const beginningMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "0% 0%",
    end: "40% 50%",
    scrub: true,
    // markers: true,
  },
});
beginningMotion
  .to(".sc-beginning .alien1", { x: 215 }, "a")
  .to(".sc-beginning .alien2", { x: -154 }, "a");

gsap.to(".sc-beginning .ufo", {
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "10% 0%",
    end: "50% 20%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
  x: function () {
    return -window.innerWidth / 2;
  },
});

const counter1 = { counter: 0 };
gsap.to(counter1, {
  counter: 1978,
  duration: 2,
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "25% 0%",
    end: "75% 100%",
    toggleActions: "play none none none",
    // markers: true,
  },
  onUpdate: () => {
    document.getElementById("year-1978").innerHTML = Math.round(
      counter1.counter
    );
  },
});

gsap.to(".sc-beginning .spaceship2", {
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "100% 70%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
  x: 904,
});

// sc-creator
gsap.from(".sc-creator .creator", {
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "0% 100%",
    end: "0% 0%",
    scrub: true,
    // markers: true,
  },
  y: 125,
});

const creatorMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "0% 0%",
    end: "55% 100%",
    scrub: true,
    // markers: true,
  },
});
creatorMotion
  .to(".sc-creator .ufo2", {
    y: 197,
  })
  .to(
    ".sc-creator .ufo2",
    {
      x: function () {
        return window.innerWidth;
      },
    },
    "a"
  )
  .to(
    ".sc-creator .ufo3",
    {
      x: 541,
    },
    "a"
  )
  .to(".sc-creator .ufo3", {
    y: 150,
  });

gsap.to(".sc-creator .spaceship3", {
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "35% 0%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
  y: 882,
});

// sc-first-sets
gsap.to(".sc-first-sets .shuttle", {
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "93% 100%",
    end: "100% 50%",
    scrub: true,
    // markers: true,
  },
  x: -415,
});

// sc-first-sets sc-classic-space 사이 블럭 더미
const scatterMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "-1% 100%",
    end: "40% 0%",
    scrub: true,
    // markers: true,
  },
});
scatterMotion
  .to(".sc-first-sets .pile-y1", { x: -851, y: 275 }, "a")
  .to(".sc-first-sets .pile-y2", { x: -761, y: 103 }, "a")
  .to(".sc-first-sets .pile-y3", { x: -457, y: 192, rotate: "-29deg" }, "a")
  .to(".sc-first-sets .pile-y4", { x: -91, y: 171 }, "a")
  .to(".sc-first-sets .pile-dg1", { x: -714, y: 137 }, "a")
  .to(".sc-first-sets .pile-dg2", { x: -127, y: 256 }, "a")
  .to(".sc-first-sets .pile-dg3", { x: -144, y: 182 }, "a")
  .to(".sc-first-sets .pile-dg4", { x: -23, y: 257 }, "a")
  .to(".sc-first-sets .pile-g1", { x: -591, y: 198 }, "a")
  .to(".sc-first-sets .pile-g2", { x: -307, y: 190 }, "a")
  .to(".sc-first-sets .pile-g3", { x: -178, y: 107 }, "a")
  .to(".sc-first-sets .pile-g4", { x: -67, y: 177 }, "a")
  .to(".sc-first-sets .pile-g5", { x: 52, y: 226 }, "a")
  .to(".sc-first-sets .pile-y1", { y: 610 }, "b")
  .to(".sc-first-sets .pile-y2", { y: 377, rotate: "17deg" }, "b")
  .to(".sc-first-sets .pile-y3", { y: 467, rotate: "32deg" }, "b")
  .to(".sc-first-sets .pile-y4", { x: -6, y: 462, rotate: "6deg" }, "b")
  .to(".sc-first-sets .pile-dg1", { x: -67, y: 194 }, "b")
  .to(".sc-first-sets .pile-dg2", { y: 449 }, "b")
  .to(".sc-first-sets .pile-dg3", { x: -5, y: 711 }, "b")
  .to(".sc-first-sets .pile-dg4", { y: 117 }, "b")
  .to(".sc-first-sets .pile-g1", { y: 627 }, "b")
  .to(".sc-first-sets .pile-g2", { y: 162 }, "b")
  .to(".sc-first-sets .pile-g3", { x: -9, y: 214 }, "b")
  .to(".sc-first-sets .pile-g4", { x: -6, y: 325 }, "b")
  .to(".sc-first-sets .pile-g5", { x: -4, y: 721, rotate: "-49deg" }, "b");

// sc-classic-space
const spaceMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "5% 0%",
    end: "85% 100%",
    scrub: true,
    // markers: true,
  },
});
spaceMotion
  .to(".sc-classic-space .top-section-content", { x: -1800 }, "a")
  .to(".sc-classic-space .top-section", { y: 900 }, "a");

let counter2 = { counter: 0 };
gsap.to(counter2, {
  counter: 1987,
  duration: 2,
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "40% 0%",
    end: "70% 100%",
    toggleActions: "play none none none",
    // markers: true,
  },
  onUpdate: () => {
    document.getElementById("year-1987").innerHTML = Math.round(
      counter2.counter
    );
  },
});

const spaceMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "50% 0%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
});
spaceMotion2
  .from(".sc-classic-space .big-blue-lego", { y: "30%" }, "a")
  .from(".sc-classic-space .cruiser", { y: "20%" }, "a");
