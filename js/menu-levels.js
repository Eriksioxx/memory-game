function writeLevel() {
    let menuLevels = document.querySelector(".select-level ul");
    level.forEach(function(element, index) {
        let controlLevel = document.createElement("li");
        controlLevel.innerHTML =
            "<button class='level' data-level=" +
            index +
            ">Level " +
            (index + 1) +
            "</button>";
        menuLevels.appendChild(controlLevel);
    })
}

function changeLevel() {
    let level = parseInt(this.dataset.level);
    levelPresent = level;
    levelActual();
    start();
}

function showMenuLevels(event) {
    event.stopPropagation();
    document.querySelector(".select-level").classList.toggle("visible");
}

function hiddenMenuLevels() {
    document.querySelector(".select-level").classList.remove("visible");
}

function clickOutMenu(event) {
    if (event.target.closest(".select-level")) {
        return;
    }
    document.querySelector(".select-level").classList.remove("visible");
}

function teclaEscCloseMenu(event) {
    console.log(event.key);
    if (event.key === "Escape") {
        hiddenMenuLevels();
    }
}