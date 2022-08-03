function start() {
    movements = 0;
    distributeCards(level[levelPresent].cards);
    document.querySelector("#mov").innerText = "00";
    MaxCounter();
    document.querySelector(".select-level").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#timeOver").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#subLevel").classList.remove("visible");

    document.querySelectorAll(".card").forEach(function(element) {
        element.addEventListener("click", discoveryCard);
    })

    if (!modoRelax) {
        startCronometro();
    } else {
        document.querySelector("#cronometro").classList.add("cronometro-hidden");
    }
}

function restarter() {
    levelPresent = 0;
    levelActual()
    start();
}

function startGameNormal() {
    modoRelax = false;
    document.querySelector("#welcome").classList.remove("visible");
    start();
    document.querySelector(".level-control").classList.add("control-hidden");
}

function startGameRelax() {
    modoRelax = true;
    document.querySelector("#welcome").classList.remove("visible");
    start();
}
