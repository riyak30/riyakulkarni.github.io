document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;
  const label = dropdown.querySelector(".dropdown-label");
  label.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("dropdown--open");
  });
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("dropdown--open");
    }
  });
});
