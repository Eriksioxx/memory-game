function subLevel() {
    levelPresent++;
}
function levelActual() {
    let levelText = levelPresent + 1;

    if (levelText < 10) {
        levelText = "0" + levelText;
    }
    document.querySelector("#level").innerText = levelText;
}
function loadNewLevel() {
    subLevel();
    levelActual();
    start();
}