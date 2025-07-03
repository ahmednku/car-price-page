document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach((container) => {
    const wrapper = container.querySelector(".carousel-wrapper");
    const slides = wrapper.querySelectorAll(".carousel-slide");
    const prev = container.querySelector(".prev-button");
    const next = container.querySelector(".next-button");

    const getScrollAmount = () => slides[0].offsetWidth + 16;

    prev?.addEventListener("click", () => {
      wrapper.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    next?.addEventListener("click", () => {
      wrapper.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    // Drag scroll (mouse)
    let isDragging = false,
      startX = 0;
    wrapper.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - wrapper.offsetLeft;
      wrapper.style.cursor = "grabbing";
    });
    wrapper.addEventListener("mouseleave", () => {
      isDragging = false;
      wrapper.style.cursor = "grab";
    });
    wrapper.addEventListener("mouseup", () => {
      isDragging = false;
      wrapper.style.cursor = "grab";
    });
    wrapper.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft -= walk;
    });

    // Touch drag
    wrapper.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - wrapper.offsetLeft;
    });
    wrapper.addEventListener("touchend", () => (isDragging = false));
    wrapper.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft -= walk;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carPriceBox = document.getElementById("carPriceBox");
  const mobileSticky = document.querySelector(".sticky-summary"); // add class to your mobile sticky
  const mobileStickybtn = document.querySelector(".sticky-button"); // add class to your mobile sticky

  const offsetTrigger = carPriceBox.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Desktop Sticky Box (large screens)
    if (window.innerWidth >= 768) {
      if (scrollY > offsetTrigger + 300) {
        carPriceBox.classList.remove("d-none");
        carPriceBox.classList.add("sticky");
      } else {
        carPriceBox.classList.add("d-none");
        carPriceBox.classList.remove("sticky");
      }
    }

    // Mobile Sticky Summary (small screens)
    if (window.innerWidth < 768) {
      if (scrollY > 100) {
        mobileSticky?.classList.remove("d-none");
        mobileStickybtn?.classList.remove("d-none");
      } else {
        mobileSticky?.classList.add("d-none");
        mobileStickybtn?.classList.add("d-none");
      }
    }
  });
});

const sectionIds = [
  "car-detail-section",
  "section-features",
  "section-feedback",
  "section-next",
];
const navItems = document.querySelectorAll(".sticky-nav .nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollY = window.scrollY;

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        console.log("sectionTop: ", sectionTop);
        current = id;
      }
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("text-primary", "fw-semibold");
    item.classList.add("text-secondary");

    if (item.dataset.target === current) {
      item.classList.add("text-primary", "fw-semibold");
      item.classList.remove("text-secondary");
    }
  });
});

const closeCarPriceModal = () => {
    const carPriceBox = document.getElementById("carPriceBox");
    carPriceBox.classList.add("d-none");
};

const closeIcon = document.getElementById('close-car-price-icon');
closeIcon.addEventListener('click', closeCarPriceModal);