// This code makes the wildlife filter buttons work on the Wildlife page.

document.addEventListener("DOMContentLoaded", function () {
  // get all the filter buttons and all the animal cards
  const quickFilters = document.querySelectorAll(".filter-btn");
  const animalCards = document.querySelectorAll(".animal-card");

  // if there are no buttons or no cards, stop
  if (!quickFilters.length || !animalCards.length) {
    return;
  }

  // add a click event to each button
  quickFilters.forEach(function (button) {
    button.addEventListener("click", function () {
      const type = button.getAttribute("data-type"); // which filter was chosen

      // remove "active" class from all buttons
      quickFilters.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // add "active" class to the clicked button
      button.classList.add("active");

      // loop through each animal card and show / hide depending on type
      animalCards.forEach(function (card) {
        const cardType = card.getAttribute("data-type");

        if (type === "all" || type === cardType) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

