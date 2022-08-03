function updateCounter() {
    let movementsText;
    movements++;
    movementsText = movements;

    if (movements > level[levelPresent].movementsMax && !modoRelax) {
        gameOver();
        return;
    }

    if (movements < 10) {
        movementsText = "0" + movements;
    }
    document.querySelector("#mov").innerText = movementsText;
}

function MaxCounter() {
    let movementsMaxText = level[levelPresent].movementsMax;
    if (movementsMaxText < 10) {
        movementsMaxText = "0" + movementsMaxText;
    }
    document.querySelector("#mov-total").innerText = movementsMaxText;
}