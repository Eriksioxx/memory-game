function discoveryCard() {
    let discoveries;
    let pendingCards;

    let faceUpCards = document.querySelectorAll(".discovery:not(.successful)");
    if (faceUpCards.length > 1) {
        return;
    }
    this.classList.add("discovery");

    document.querySelector("#sound-carta").cloneNode().play();

    discoveries = document.querySelectorAll(".discovery:not(.successful)");
    if (discoveries.length < 2) {
        return;
    }

    compare(discoveries);
    updateCounter();
    pendingCards = document.querySelectorAll(".card:not(.successful)");
    if (pendingCards.length === 0) {
        setTimeout(finalize, 1000);
    }

}

function compare(faceUpCardsCompare) {
    if (faceUpCardsCompare[0].dataset.succhia === faceUpCardsCompare[1].dataset.succhia) {
        success(faceUpCardsCompare)
    } else {
        error(faceUpCardsCompare)
    }
}