// The code will allow for the animal button to be active on the wildlife page.//

document.addEventListener("Load", function () {
  const Quickfilter = document.querySelectorAll(".filter-btn");
  const animalList = document.querySelectorAll(".animal-card");
  });
  if (!Quickfilter.length || !animalList.length) {
  }

Quickfilter.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.getAttribute("data-type");
    
   Quickfilter.forEach(function (btn) {
      btn.classList.remove("active");
  });

    button.classList.add("active");
    
    animalList.forEach(function (card) {
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




