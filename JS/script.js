"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".signup__btn");
const body = document.querySelector("body");
const logo = document.querySelector(".website-logo");
const section = document.querySelector("#section");
const nav = document.querySelector(".nav");
const navLink = document.querySelector(".nav-link");
const navLinks = document.querySelectorAll(".nav-links");
const header = document.querySelector(".header");

// Modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("disableScroll");
};

// Close Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("disableScroll");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Scrolling

logo.addEventListener("click", function (e) {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});

// Navigation Implementing

const handleHower = function (e) {
  if (e.target.classList.contains("nav-links")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav-links");
    const logo = link.closest(".nav").querySelector(".website-logo");
    const btn = link.closest(".nav").querySelector(".signupBtn");
    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    btn.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHower.bind(0.5));
nav.addEventListener("mouseout", handleHower.bind(1));

// Sticky navigation
