document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".animal-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const type = button.dataset.type;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      cards.forEach(function (card) {
        const cardType = card.dataset.type;
        if (type === "all" || type === cardType) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
