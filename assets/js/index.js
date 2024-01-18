// sc-splash
window.addEventListener("load", function () {
  setTimeout(function () {
    const splash = document.querySelector(".sc-splash");
    splash.style.opacity = "0";

    setTimeout(function () {
      splash.style.display = "none";
    }, 500);
  }, 3000);
});

// header
$("header .anchor-menu").click(function (e) {
  e.preventDefault();
  $(".gnb").slideToggle();
  $("header .header-top").hide();
  $(".container").toggleClass("blur");
  $("footer").toggleClass("blur");
  $("body").toggleClass("block-scroll");
});

$(".gnb .close, .gnb a").click(function () {
  $(".gnb").slideUp();
  $("header .header-top").show();
  $(".container").removeClass("blur");
  $("footer").removeClass("blur");
  $("body").removeClass("block-scroll");
});

// sc-main
gsap.to(".sc-main .center-section", {
  scrollTrigger: {
    trigger: ".sc-main",
    start: "5% 0%",
    end: "150% 0%",
    scrub: true,
    // markers: true,
  },
  yPercent: 122,
});

gsap.to(".sc-main .atom", {
  scrollTrigger: {
    trigger: ".sc-main",
    start: "20% 0%",
    end: "150% 0%",
    scrub: true,
    // markers: true,
  },
  scale: 0.25,
});

// sc-beginning
const alienMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "0% 0%",
    end: "100% 70%",
    scrub: true,
    // markers: true,
  },
});
alienMotion
  .to(".sc-beginning .alien1", { x: 215 }, "a")
  .to(".sc-beginning .alien2", { x: -154 }, "a");

gsap.to(".sc-beginning .ufo", {
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "20% 0%",
    end: "85% 0%",
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
    start: "50% 0%",
    end: "100% 0%",
    toggleActions: "play none none none",
    // markers: true,
  },
  onUpdate: () => {
    document.getElementById("year-1978").innerHTML = Math.round(
      counter1.counter
    );
  },
});

// sc-since
gsap.to(".sc-since .spaceship2", {
  scrollTrigger: {
    trigger: ".sc-since",
    start: "45% 0%",
    end: "100% 0%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
  x: function () {
    return window.innerWidth / 2;
  },
});

// sc-creator
// gsap.from(".sc-creator .creator", {
//   scrollTrigger: {
//     trigger: ".sc-creator",
//     start: "0% 100%",
//     end: "0% 0%",
//     scrub: true,
//     // markers: true,
//   },
//   y: 125,
// });

// sc-creator
const ufoMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "0% 0%",
    end: "45% 0%",
    scrub: true,
    // markers: true,
  },
});
ufoMotion
  .to(".sc-creator .ufo2", { y: 197 })
  .to(".sc-creator .ufo2", { x: 1271 }, "a")
  .to(".sc-creator .ufo3", { x: 541 }, "a")
  .to(".sc-creator .ufo3", { y: 150 });

gsap.to(".sc-creator .spaceship3", {
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "50% 0%",
    end: "130% 0%",
    scrub: true,
    // markers: true,
  },
  yPercent: 147,
});

// sc-first-sets
gsap.to(".sc-first-sets .shuttle", {
  scrollTrigger: {
    trigger: ".sc-first-sets",
    start: "20% 0%",
    end: "100% 40%",
    scrub: true,
    // markers: true,
  },
  x: -415,
});

// sc-first-sets sc-classic-space 사이 블럭 더미
const scatterMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "2% 100%",
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
  .to(".sc-first-sets .pile-y1", { y: 814 }, "b")
  .to(".sc-first-sets .pile-y2", { y: 739, rotate: "75deg" }, "b")
  .to(".sc-first-sets .pile-y3", { y: 727, rotate: "60deg" }, "b")
  .to(".sc-first-sets .pile-y4", { x: -6, y: 750, rotate: "-35deg" }, "b")
  .to(".sc-first-sets .pile-dg1", { x: -67, y: 469 }, "b")
  .to(".sc-first-sets .pile-dg2", { y: 644 }, "b")
  .to(".sc-first-sets .pile-dg3", { x: -5, y: 818 }, "b")
  .to(".sc-first-sets .pile-dg4", { y: 484 }, "b")
  .to(".sc-first-sets .pile-g1", { y: 818 }, "b")
  .to(".sc-first-sets .pile-g2", { y: 487 }, "b")
  .to(".sc-first-sets .pile-g3", { x: -9, y: 692 }, "b")
  .to(".sc-first-sets .pile-g4", { x: -6, y: 554 }, "b")
  .to(".sc-first-sets .pile-g5", { x: -4, y: 942, rotate: "-49deg" }, "b");

// sc-classic-space
const slideMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "5% 0%",
    end: "80% 100%",
    scrub: true,
    // markers: true,
  },
});
slideMotion
  .to(".sc-classic-space .top-section", { y: "80%" }, "a")
  .to(".sc-classic-space .classic-space-list", { x: "-90%" }, "a+=0.1");

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

const spaceMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "50% 0%",
    end: "100% 70%",
    scrub: true,
    // markers: true,
  },
});
spaceMotion
  .from(".sc-classic-space .big-blue-lego", { y: "30%" }, "a")
  .from(".sc-classic-space .cruiser", { y: "20%" }, "a");

// .sc-spacesuits
const alienMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-spacesuits",
    start: "0% 80%",
    end: "40% 100%",
    scrub: true,
    // markers: true,
  },
});
alienMotion2
  .to(".sc-spacesuits .alien1", { x: 335, y: -8, rotate: "15deg" }, "a")
  .to(".sc-spacesuits .alien2", { x: -234, y: -13, rotate: "-20deg" }, "a");

document.addEventListener("mousemove", function (e) {
  gsap.to(".follow-ufo", {
    x: e.clientX - 900,
    duration: 0.3,
  });
});

$(".sc-spacesuits .colors-area > div").hover(function () {
  const target = $(this).attr("class").split(" ")[0];
  $(`.text-${target}, .bubble-${target}`).toggleClass("show");
  $(this).toggleClass("show");
});

// sc-lego-value
const photoMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-lego-value",
    start: "0% 80%",
    end: "70% 100%",
    scrub: true,
    // markers: true,
  },
});
photoMotion
  .to(".sc-lego-value .photo", { rotate: "-9deg" }, "a")
  .from(".sc-lego-value .attach", { x: 366 }, "a");

// sc-2011
gsap.to(".sc-2011 .rocket", {
  scrollTrigger: {
    trigger: ".sc-2011",
    start: "0% 90%",
    end: "30% 100%",
    scrub: true,
    // markers: true,
  },
  x: -430,
});

gsap.to(".sc-2011 .boarding-line", {
  scrollTrigger: {
    trigger: ".sc-2011",
    start: "0% 50%",
    end: "80% 100%",
    scrub: true,
    // markers: true,
  },
  xPercent: 100,
});

$(".sc-2011 .pick-the-characters button").click(function () {
  const target = $(this).attr("class").split(" ")[0].substring(4);
  $(`.${target}`).toggleClass("show");
  $(this).toggleClass("show");
  $(".sc-2011 .bottom-section strong, .sc-2011 .arrow").addClass("hide");
  // 모든 요소가 show를 안가지고 있으면 제목 다시 노출
  let flag = false;
  $(".pick-the-characters")
    .children()
    .each(function () {
      if ($(this).hasClass("show")) {
        flag = true;
      }
    });
  if (!flag)
    $(".sc-2011 .bottom-section strong, .sc-2011 .arrow").removeClass("hide");
});

//footer
gsap.set(".launch-rocket", { xPercent: -50 });
gsap.to(".launch-rocket", {
  scrollTrigger: {
    trigger: ".footer",
    start: "0% 100%",
    end: "10% 0%",
    scrub: true,
    // markers: true,
  },
  y: -570,
});
