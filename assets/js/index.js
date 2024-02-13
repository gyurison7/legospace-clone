// header
$("header .anchor-menu").click(function (e) {
  e.preventDefault();
  $(".gnb").slideToggle();
  $(".whole-wrapper").toggleClass("blur");
  $("body").toggleClass("block-scroll");
});

function gnbClose() {
  $(".gnb").slideUp();
  $(".whole-wrapper").removeClass("blur");
  $("body").removeClass("block-scroll");
}

$(".gnb .close, .gnb a").click(function () {
  gnbClose();
});

$(document).click(function (e) {
  if (
    $(".whole-wrapper").hasClass("blur") &&
    $("body").hasClass("block-scroll") &&
    !$(e.target).closest(".gnb, .anchor-menu").length
  ) {
    gnbClose();
  }
});

// sc-main
gsap.to(".sc-main .atom", {
  scrollTrigger: {
    trigger: ".sc-main",
    start: "5% 0%",
    end: "150% 0%",
    scrub: true,
    // markers: true,
  },
  yPercent: 67,
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

// sc-beginning ~ sc-since
gsap.to(".sc-since .ufo", {
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "20% 0%",
    end: "80% 0%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
  x: function () {
    return -window.innerWidth / 2;
  },
  xPercent: -40,
});

const counter1 = { counter: 0 };
gsap.to(counter1, {
  counter: 1978,
  duration: 2,
  scrollTrigger: {
    trigger: ".sc-beginning",
    start: "50% 0%",
    end: "100% 0%",
    // markers: true,
  },
  onUpdate: () => {
    document.getElementById("year-1978").innerHTML = Math.round(counter1.counter);
  },
});

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
let ufoMotion;
let spaceshipMotion;
function updateAnimation() {
  if (ufoMotion) {
    ufoMotion.scrollTrigger.kill(); // 기존의 ScrollTrigger 인스턴스를 제거
    ufoMotion.kill(); // 기존의 GSAP 애니메이션 인스턴스를 제거
  }
  if (spaceshipMotion) {
    spaceshipMotion.scrollTrigger.kill();
    spaceshipMotion.kill();
  }

  const xValue = window.innerWidth;

  ufoMotion = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-creator",
      start: "0% 0%",
      end: "100% 100%",
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });
  ufoMotion
    .to(".sc-creator .ufo2", { yPercent: 50 }, "a")
    .to(".sc-creator .ufo2", { x: xValue }, "b")
    .to(".sc-creator .ufo3", { xPercent: 100 }, "b")
    .to(".sc-creator .ufo3", { yPercent: 40 }, "c");

  const yValue = window.innerWidth > 1536 ? 1521 : window.innerWidth > 1366 ? 1116 : 1227;

  spaceshipMotion = gsap.to(".sc-creator .spaceship3", {
    scrollTrigger: {
      trigger: ".sc-creator",
      start: "50% 0%",
      end: "130% 0%",
      scrub: true,
      invalidateOnRefresh: true,
    },
    y: yValue,
  });
}

window.addEventListener("resize", updateAnimation);

updateAnimation();

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
    start: "0% 100%",
    end: "40% 0%",
    scrub: true,
    // markers: true,
  },
});
scatterMotion
  .to(".sc-first-sets .pile-y1", { x: -1051, y: 375 }, "a")
  .to(".sc-first-sets .pile-y2", { x: -961, y: 203 }, "a")
  .to(".sc-first-sets .pile-y3", { x: -657, y: 292, rotate: "-29deg" }, "a")
  .to(".sc-first-sets .pile-y4", { x: -91, y: 271 }, "a")
  .to(".sc-first-sets .pile-dg1", { x: -914, y: 237 }, "a")
  .to(".sc-first-sets .pile-dg2", { x: -127, y: 356 }, "a")
  .to(".sc-first-sets .pile-dg3", { x: -144, y: 282 }, "a")
  .to(".sc-first-sets .pile-dg4", { x: -23, y: 357 }, "a")
  .to(".sc-first-sets .pile-g1", { x: -691, y: 298 }, "a")
  .to(".sc-first-sets .pile-g2", { x: -307, y: 290 }, "a")
  .to(".sc-first-sets .pile-g3", { x: -178, y: 207 }, "a")
  .to(".sc-first-sets .pile-g4", { x: -67, y: 277 }, "a")
  .to(".sc-first-sets .pile-g5", { x: 52, y: 326 }, "a")
  .to(".sc-first-sets .pile-y1", { y: 1014 }, "b")
  .to(".sc-first-sets .pile-y2", { y: 939, rotate: "75deg" }, "b")
  .to(".sc-first-sets .pile-y3", { y: 927, rotate: "60deg" }, "b")
  .to(".sc-first-sets .pile-y4", { x: -6, y: 950, rotate: "-35deg" }, "b")
  .to(".sc-first-sets .pile-dg1", { x: -67, y: 669 }, "b")
  .to(".sc-first-sets .pile-dg2", { y: 844 }, "b")
  .to(".sc-first-sets .pile-dg3", { x: -5, y: 1018 }, "b")
  .to(".sc-first-sets .pile-dg4", { y: 584 }, "b")
  .to(".sc-first-sets .pile-g1", { y: 1018 }, "b")
  .to(".sc-first-sets .pile-g2", { y: 687 }, "b")
  .to(".sc-first-sets .pile-g3", { x: -9, y: 892 }, "b")
  .to(".sc-first-sets .pile-g4", { x: -6, y: 754 }, "b")
  .to(".sc-first-sets .pile-g5", { x: -4, y: 1142, rotate: "-49deg" }, "b");

// sc-classic-space
const slideMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "10% 0%",
    end: "70% 100%",
    scrub: true,
    // markers: true,
  },
});
slideMotion.to(".sc-classic-space .classic-space-list", { xPercent: -100 });

let counter2 = { counter: 0 };
gsap.to(counter2, {
  counter: 1987,
  duration: 2,
  scrollTrigger: {
    trigger: ".sc-classic-space",
    start: "40% 0%",
    end: "70% 100%",
    // markers: true,
  },
  onUpdate: () => {
    document.getElementById("year-1987").innerHTML = Math.round(counter2.counter);
  },
});

const spaceMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-classic-space .bottom-section",
    start: "0% 20%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
});
spaceMotion
  .from(".sc-classic-space .big-blue-lego", { y: 180 }, "a")
  .from(".sc-classic-space .cruiser", { y: 287 }, "a");

// .sc-spacesuits
const alienMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-spacesuits",
    start: "0% 80%",
    end: "50% 100%",
    scrub: true,
    // markers: true,
  },
});
alienMotion2
  .to(".sc-spacesuits .alien1", { x: 335, y: -8, rotate: "15deg" }, "a")
  .to(".sc-spacesuits .alien2", { x: -234, y: -13, rotate: "-20deg" }, "a");

document.addEventListener("mousemove", function (e) {
  gsap.to(".follow-ufo", {
    x: e.clientX - $(".follow-ufo").innerWidth() / 2,
  });
});

$(".sc-spacesuits .suit-list li").hover(function () {
  $(this).toggleClass("on");
});

// sc-lego-value
const photoMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-lego-value",
    start: "0% 70%",
    end: "70% 100%",
    scrub: true,
    // markers: true,
  },
});
photoMotion
  .to(".sc-lego-value .photo", { rotate: "-10deg" }, "a")
  .from(".sc-lego-value .attach", { x: 366 }, "a");

// sc-2011
gsap.to(".sc-2011 .rocket", {
  scrollTrigger: {
    trigger: ".sc-2011",
    start: "0% 90%",
    end: "50% 100%",
    scrub: true,
    // markers: true,
  },
  x: -430,
});

gsap.to(".sc-2011 .boarding-line", {
  scrollTrigger: {
    trigger: ".sc-2011",
    start: "0% 40%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
  xPercent: 100,
});

$(".sc-2011 .pick-the-characters button").click(function () {
  const target = $(this).attr("class").split(" ")[0].substring(4);
  $(`.${target}`).toggleClass("show");
  $(this).toggleClass("show");

  $(".sc-2011 .strong-wrapper").addClass("hide");

  // 모든 요소가 show를 안가지고 있으면 제목 다시 노출
  let flag = false;
  $(".pick-the-characters")
    .children()
    .each(function () {
      if ($(this).hasClass("show")) {
        flag = true;
      }
    });
  if (!flag) $(".sc-2011 .strong-wrapper").removeClass("hide");
});

//footer
gsap.to(".launch-rocket", {
  scrollTrigger: {
    trigger: ".footer",
    start: "0% 100%",
    end: "10% 0%",
    scrub: true,
    // markers: true,
  },
  y: -900,
});
