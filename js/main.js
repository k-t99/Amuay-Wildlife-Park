document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelectorAll(".filter-btn");
  const animalCard = document.querySelectorAll(".animal-card");
  });
  if (!filterButtons.length || !animalCards.length) {
  }

filterButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.getAttribute("data-type");
    
    filterButton.forEach(function (btn) {
      btn.classList.remove("active");
  });

    button.classList.add("active");
    
    animalCard.forEach(function (card) {
      const cardType = card.getAttribute("data-type);

    if (type === "all" || type === cardType) {
        card.style.distplay = "";
        } else {
          card.style.distplay = "non";
        }
      });
    });
  });
});




