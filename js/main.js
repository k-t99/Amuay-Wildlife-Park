// The code will allow for the animal button to be active on the wildlife page.//

document.addEventListener("load", function () {
  const Quickfilter = document.querySelectorAll(".filter-btn");
  const animalList = document.querySelectorAll(".animal-card");

  if (!Quickfilter.length || !animalList.length) {
  }

Quickfilter.forEach(function (Quickfilter) {
  Quickfilter.addEventListener("click", function () {
    const type = Quickfilter.getAttribute("data-type");
    
   Quickfilter.forEach(function (Quickfilter) {
     Quickfilter.classList.remove("active");
  });

    Quickfilter.classList.add("active");
    
    animalList.forEach(function (animalList) {
      const cardType = animalList.getAttribute("data-type);

    if (type === "all" || type === animalList) {
        animalList.style.display = "";
        } else {
         animalList.style.distplay = "none";
           });
    });
  });
});




