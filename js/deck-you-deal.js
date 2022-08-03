function deckOfCards(theCards) {
    let result;
    let totalCard = theCards.concat(theCards);
    result = totalCard.sort(function() {
        return 0.5 - Math.random();
    });
    return result;
}

function distributeCards(theCards) {
    const table = document.querySelector("#table");

    const cardDiscoveries = deckOfCards(theCards);

    table.innerHTML = "";

    cardDiscoveries.forEach(function(element) {

        let card = document.createElement("div");

        card.innerHTML =
            "<div class='card' data-succhia=" +
            element +
            ">" +
            "<div class='card_container'>" +
            element +
            "</div>" +
            "</div>";

        table.appendChild(card);
    })
}