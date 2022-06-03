var sandwich = {
    bread: "sourdough",
    protein: "london broil",
    cheese: "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};

console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

var s1 = sandwichFactory("wheat", "turkey", "provolone", "mustard", "fried onions", "arugula");
console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pica = {};
    pica.crustType = crustType;
    pica.sauceType = sauceType;
    pica.cheeses = cheeses;
    pica.toppings = toppings;
    return pica;
}

var pica1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage");
console.log(pica1);
var pica2 = pizzaOven("hand tossed", "marinara", "mozzarella", "feta", "mushrooms", "olives", "onions");
console.log(pica2);


var crustTypes = ["hand tossed",
    "deep dish",
    "thin",
    "crispy"
];
var cheeses = ["mozzarella",
    "cheddar",
    "colby",
    "white cheese",
    "rind"
];
var sauceTypes = ["pesto",
    "spicy",
    "tomato sauce",
    "barbeque",
    "marinara"
];
var toppings = ["onion",
    "sausage",
    "mushrooms",
    "patatoes",
    "rucola",
    "olives"
];

function rRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function pickRandom(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPica() {
    var pizza = {};
    pizza.crustType = pickRandom(crustTypes);
    pizza.sauceType = pickRandom(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (var i = 0; i < rRange(3, 2); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for (var i = 0; i < rRange(4, 1); i++) {
        pizza.toppings.push(pickRandom(toppings));
    }
    return pizza;
}

console.log(randomPizza());
