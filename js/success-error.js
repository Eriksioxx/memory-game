function success(theCards) {
    theCards.forEach(function(element) {
        element.classList.add("successful");
    });
    document.querySelector("#sound-acierto").play();
}

function error(theCards) {
    theCards.forEach(function(element) {
        element.classList.add("error");
    })

    document.querySelector("#sound-error").play();

    setTimeout(function() {
        theCards.forEach(function(element) {
            element.classList.remove("discovery");
            element.classList.remove("error");
        });
    }, 1000);
}

