// The code will allow for the animal button to be active on the wildlife page.//

document.addEventListener("load", function () {
  const quickfilter = document.querySelectorAll(".filter-btn");
  const animalList = document.querySelectorAll(".animal-card");

  if (!quickfilter.length || !animalList.length) {
  return;
  }

quickfilter.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.getAttribute("data-type");
    
   quickfilter.forEach(function (btn) {
    btn.classList.remove("active");
  });

    button.classList.add("active");
    
    animalList.forEach(function (card) {
      const cardType = card.getAttribute("data-type);

    if (type === "all" || type === cardType) {
        card.style.display = "";
        } else {
         card.style.distplay = "none";
           });
    });
  });
});




