// GRIT site — shared nav behavior (mobile menu + dropdown)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  document.querySelectorAll(".has-dropdown > button.nav-link").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var parent = btn.closest(".has-dropdown");
      var wasOpen = parent.classList.contains("open");
      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
      if (!wasOpen) parent.classList.add("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
    if (links && links.classList.contains("open") && !e.target.closest(".nav-pill")) {
      links.classList.remove("open");
    }
  });
});
