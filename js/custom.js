$(document).ready(function () {
  ////////////////////////////// ///////////////////////
  // Text Animation
  ////////////////////////////// ///////////////////////
  // lines
  const animate_lines = document.querySelectorAll(".animate_lines");
  animate_lines.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.08;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.lines, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.lines, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // words
  const animate_words = document.querySelectorAll(".animate_words");
  animate_words.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.01;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.words, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.words, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // chars
  const animate_chars = document.querySelectorAll(".animate_chars");
  animate_chars.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.003;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // Text Invert With Scroll
  const split = new SplitText(".text_invert", { type: "lines" });

  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });

  const inputs = document.querySelectorAll(
    ".inputfield input, .inputfield textarea , .inputfield select"
  );

  function highlight(event) {
    const label = event.target.previousElementSibling;
    label.classList.add("h");
  }

  function dehighlight(event) {
    const label = event.target.previousElementSibling;
    // Check if the input has no value and is not focused
    if (event.target.value === "" && !event.target.matches(":focus")) {
      label.classList.remove("h");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", highlight);
    input.addEventListener("blur", dehighlight);
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      // Check if data-aos-delay is not already set
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });

  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });

  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});
