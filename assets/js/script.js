'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// phone reveal anti-scraping
const phoneRevealLink = document.querySelector("[data-phone-reveal]");
const humanModal = document.querySelector("[data-human-modal]");
const humanOverlay = document.querySelector("[data-human-overlay]");
const humanClose = document.querySelector("[data-human-close]");
const humanCancel = document.querySelector("[data-human-cancel]");
const humanConfirm = document.querySelector("[data-human-confirm]");

const openHumanModal = function () {
  humanModal?.classList.add("active");
  document.body.style.overflow = "hidden";
}

const closeHumanModal = function () {
  humanModal?.classList.remove("active");
  document.body.style.overflow = "";
}

const revealPhone = function () {
  if (!phoneRevealLink) return;

  const cc = phoneRevealLink.dataset.phoneCc;
  const part1 = phoneRevealLink.dataset.phonePart1;
  const part2 = phoneRevealLink.dataset.phonePart2;
  const part3 = phoneRevealLink.dataset.phonePart3;
  const part4 = phoneRevealLink.dataset.phonePart4;
  const part5 = phoneRevealLink.dataset.phonePart5;

  const dial = `+${cc}${part1}${part2}${part3}${part4}${part5}`;
  const display = `+${cc} ${part1} ${part2} ${part3} ${part4} ${part5}`;

  phoneRevealLink.textContent = display;
  phoneRevealLink.href = `tel:${dial}`;
  phoneRevealLink.classList.remove("is-blurred");
  phoneRevealLink.dataset.revealed = "true";
}

phoneRevealLink?.addEventListener("click", function (e) {
  if (phoneRevealLink.dataset.revealed === "true") return;
  e.preventDefault();
  openHumanModal();
});

humanOverlay?.addEventListener("click", closeHumanModal);
humanClose?.addEventListener("click", closeHumanModal);
humanCancel?.addEventListener("click", closeHumanModal);
humanConfirm?.addEventListener("click", function () {
  revealPhone();
  closeHumanModal();
});



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    const dateElement = this.querySelector("[data-testimonials-date]");
    if (dateElement) {
      modalDate.setAttribute("datetime", dateElement.getAttribute("datetime"));
      modalDate.innerHTML = dateElement.innerHTML;
    }
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// project preview modal
const projectModal = document.querySelector("[data-project-modal]");
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalCta = document.querySelector("[data-project-modal-cta]");
const projectModalOverlay = document.querySelector("[data-project-overlay]");
const projectModalClose = document.querySelector("[data-project-close]");

const openProjectModal = ({ src, alt, title, category, projectUrl }) => {
  projectModalImg.src = src;
  projectModalImg.alt = alt || "";
  projectModalTitle.textContent = title || alt || "Project";
  projectModalCategory.textContent = category || "";

  if (projectUrl) {
    projectModalCta.href = projectUrl;
    projectModalCta.classList.remove("is-hidden");
  } else {
    projectModalCta.removeAttribute("href");
    projectModalCta.classList.add("is-hidden");
  }

  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  projectModal.classList.remove("active");
  projectModalImg.src = "";
  projectModalImg.alt = "";
  projectModalTitle.textContent = "";
  projectModalCategory.textContent = "";
  projectModalCta.removeAttribute("href");
  projectModalCta.classList.add("is-hidden");
  document.body.style.overflow = "";
};

// prevent anchor default and open modal when clicking anywhere on project card
const projectLinks = document.querySelectorAll(".project-item a");
projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const img = link.querySelector("img");
    const title = link.querySelector(".project-title");
    const category = link.querySelector(".project-category");

    if (img) {
      openProjectModal({
        src: img.src,
        alt: img.alt,
        title: title?.textContent?.trim(),
        category: category?.textContent?.trim(),
        projectUrl: link.dataset.projectUrl
      });
    }
  });
});

projectModalOverlay?.addEventListener("click", closeProjectModal);
projectModalClose?.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// handle form submission
form.addEventListener("submit", function (e) {
  // FormSubmit will handle the submission
  // The form will submit normally to FormSubmit's endpoint
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
