// The code will allow for the animal button to be active on the wildlife page.//

document.addEventListener("load", function () {
  const quickFilter = document.querySelectorAll(".filter-btn");
  const animalCard = document.querySelectorAll(".animal-card");

  if (!quickFilter.length || !animalCard.length) {
  return;
  }

quickFilter.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.getAttribute("data-type");
    
   quickFilter.forEach(function (btn) {
    btn.classList.remove("active");
  });

    button.classList.add("active");
    
    animalCard.forEach(function (card) {
      const cardType = card.getAttribute("data-type);

    if (type === "all" || type === cardType) {
        card.style.display = "";
        } else {
         card.style.distplay = "none";
           });
    });
  });
});




