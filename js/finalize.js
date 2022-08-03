function finalize() {
    clearInterval(cronometro);
    if (levelPresent < level.length - 1) {
        document.querySelector("#subLevel").classList.add("visible");
    } else {
        document.querySelector("#endGame").classList.add("visible");
    }
}