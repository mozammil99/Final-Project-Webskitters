document.addEventListener("DOMContentLoaded", () => {
  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const currentlyActive = document.querySelector(".faq-item.active");
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove("active");
      }
      item.classList.toggle("active");
    });
  });

  // Search Tabs
  const searchTabs = document.querySelectorAll(".search-tabs button");
  searchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(".search-tabs button.active")
        .classList.remove("active");
      tab.classList.add("active");
    });
  });

  // Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileMenuContainer = document.getElementById("mobile-menu-container");

  function buildMobileMenu() {
    // Create menu structure
    const mobileNav = document.createElement("div");
    mobileNav.classList.add("mobile-nav");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("mobile-nav-close");
    closeBtn.innerHTML = "&times;";
    mobileNav.appendChild(closeBtn);

    const mobileNavLinks = document.createElement("ul");
    mobileNavLinks.classList.add("mobile-nav-links");

    // Get the current page's file name to apply active styles
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    // 1. Get header nav items
    const desktopNavLinks = document.querySelectorAll(".nav-links a");
    desktopNavLinks.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = link.textContent;
      a.href = link.href;

      const linkPage = link.getAttribute("href").split("/").pop();
      // Check if the current link is the active page
      if (linkPage === currentPage) {
        a.style.color = "var(--primary-color)";
      }
      li.appendChild(a);
      mobileNavLinks.appendChild(li);
    });

    // 2. Add Contact Us link
    const contactLink = document.querySelector(".nav-contact");
    if (contactLink) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = "Contact Us";
      a.href = contactLink.href;
      li.appendChild(a);
      mobileNavLinks.appendChild(li);
    }

    // 3. Get top bar items
    const topBarItems = document.querySelectorAll(".top-bar .top-bar-item");
    topBarItems.forEach((item) => {
      const li = document.createElement("li");
      const mobileItem = document.createElement("div");
      mobileItem.classList.add("mobile-top-bar-item");
      mobileItem.innerHTML = item.innerHTML;
      // REMOVED: mobileItem.style.pointerEvents = "none";
      li.appendChild(mobileItem);
      mobileNavLinks.appendChild(li);
    });

    mobileNav.appendChild(mobileNavLinks);
    mobileMenuContainer.appendChild(mobileNav);

    // Add event listeners
    hamburger.addEventListener("click", () => {
      mobileNav.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });

    // Close menu when a link is clicked
    mobileNavLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }

  buildMobileMenu();

  const navLinks = document.querySelectorAll(".nav-links a");

  // Get the current page's file name (e.g., 'index.html')
  const currentPage = window.location.pathname.split("/").pop();

  // Loop through each link
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    // If the link's href matches the current page, add the 'active' class
    // Special case for the home page which might be '/' or 'index.html'
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 900,
});

const propertySwiper = new Swiper(".propertySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: { slidesPerView: 1, spaceBetween: 25, centeredSlides: false },
    768: { slidesPerView: 2, spaceBetween: 25, centeredSlides: false },
    992: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
  },

  navigation: {
    nextEl: ".property-button-next",
    prevEl: ".property-button-prev",
  },
});
