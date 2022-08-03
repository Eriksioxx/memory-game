let modoRelax = false;
let movements = 0;
let cronometro;
const cardGroup = [
    ["🦄", "🍦"],
    ["🌈", "👽"],
    ["👾", "🤖", "👹", "👺"],
    ["🤡", "💩", "🎃", "🙀"],
    ["☠️", "👾", "😽", "😼"]
];

let levelPresent = 0;

let level = [
    {
        cards: cardGroup[0],
        movementsMax: 3
    },
    {
        cards: cardGroup[0].concat(cardGroup[1]),
        movementsMax: 8
    },
    {
        cards: cardGroup[0].concat(cardGroup[1], cardGroup[2]),
        movementsMax: 12
    },
    {
        cards: cardGroup[0].concat(cardGroup[1], cardGroup[2],
            cardGroup[3]
        ),
        movementsMax: 25
    },
    {
        cards: cardGroup[0].concat(cardGroup[1], cardGroup[2],
            cardGroup[3], cardGroup[4]
        ),
        movementsMax: 60
    },
];

