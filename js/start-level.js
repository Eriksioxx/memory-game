// Write the levels dynamically
writeLevel();

// Assign events start
document.querySelectorAll(".restart").forEach(function(element) {
    element.addEventListener("click", restarter);
});

document
    .querySelector("#game-normal")
    .addEventListener("click", startGameNormal);
document
    .querySelector("#game-relax")
    .addEventListener("click", startGameRelax);

document
    .querySelector("#level-control")
    .addEventListener("click", showMenuLevels);
document
    .querySelector("#close-levels")
    .addEventListener("click", hiddenMenuLevels);

document.querySelectorAll(".level").forEach(function(elemento) {
    elemento.addEventListener("click", changeLevel);
});

document.querySelector("#upload").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutMenu);

document.addEventListener("keydown", teclaEscCloseMenu);

// We show welcome screen
document.querySelector("#welcome").classList.add("visible");