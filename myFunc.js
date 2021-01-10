// cocktails array with cocktail objects
var cocktails = [
    {
        name: "Manhattan",
        ingredients: ["whiskey", "sweet vermouth", "angostura"],
        prep:  `Two ounces of whiskey<br>
        One ounce of sweet vermouth<br>
        Two dashes of angostura`
    },
    {
        name: "Gimlet",
        ingredients: ["gin", "lime", "simple syrup"],
        prep: `Two ounces of gin<br>
        One ounce of simple syrup<br>
        Juice of half a lime` 
    },
    {
        name: "Tequila Sunrise",
        ingredients: ["tequila", "orange juice", "grenadine"],
        prep: `Two ounces of tequila<br>
        Four ounces of orange juice<br>
        One dash of grenadine` 
    },
    {
        name: "Whiskey Old-Fashioned",
        ingredients: ["whiskey", "simple syrup", "angostura"],
        prep: `Two ounces of whiskey<br>
        Half an ounce of simple syrup<br>
        Two dashes of angostura` 
    },
    {
        name: "Martini",
        ingredients: ["gin", "dry vermouth", "orange bitters"],
        prep: `Two ounces of gin<br>
        One ounce of dry vermouth<br>
        One dash of orange bitters` 
    },
    {
        name: "Cosmopolitan",
        ingredients: ["vodka", "orange liqueur", "lime", "cranberry juice"],
        prep: `Two ounces of gin<br>
        One ounce of orange liqueur<br>
        Juice of half a lime<br>
        One dash of cranberry juice` 
    },
    {
        name: "Margarita",
        ingredients: ["tequila", "orange liqueur", "lime", "simple syrup"],
        prep: `Two ounces of tequila<br>
        Half an ounce of orange liqueur<br>
        Juice of half a lime<br>
        Half an ounce of simple syrup` 
    },
    {
        name: "Tom Collins",
        ingredients: ["gin", "lemon", "soda", "simple syrup"],
        prep: `Two ounces of gin<br>
        Half an ounce of simple syrup<br>
        Juice of half a lemon<br>
        Top with soda` 
    },
    {
        name: "Daiquiri",
        ingredients: ["rum", "lime", "simple syrup"],
        prep: `Two ounces of rum<br>
        One ounce of simple syrup<br>
        Juice of half a lime` 
    },
    {
        name: "Bee's Knees",
        ingredients: ["gin", "lemon", "honey syrup"],
        prep: `Two ounces of gin<br>
        Half an ounce of honey syrup<br>
        Juice of half a lemon` 
    },
    {
        name: "Negroni",
        ingredients: ["gin", "campari", "sweet vermouth"],
        prep: `One ounce of gin<br>
        One ounce of campari<br>
        One ounce of sweet vermouth` 
    },
    {
        name: "Sidecar",
        ingredients: ["brandy", "orange liqueur", "lemon"],
        prep: `Two ounces of brandy<br>
        One ounce of orange liqueur<br>
        Juice of half a lemon` 
    }     
];

// function is called when user presses submit button
function allInputs() {
    // take all of the ingredients and put them in a NodeList Object
    var total = document.querySelectorAll(".ing");
    // create array variable for results
    var selected = [];
    // sift through each ingredient and push the checked ones
    for(var i = 0; i < total.length; i++) {
        if(total[i].checked) {
            selected.push(total[i].value);
        }
    }
    // call function and pass ingredients array
    lookUp(selected);
}

// checks which cocktails can be made,
// array of user selected ingredients is passed in
function lookUp(selectedArr) {
    let results = [];
    for (var i = 0; i < cocktails.length; i++) {
        var thing = cocktails[i].ingredients.every(r => selectedArr.includes(r));
        if (thing) {
            results.push(cocktails[i].name);
            putIt(cocktails[i]); 
        }
    }
}

// prints out cocktail recipes onto webpage
function putIt(result) {
    // store object properties in local variables
    var cocktailName = result.name;
    var ingred = result.ingredients;
    var prepare = result.prep;

    // heading element for cocktail name
    var hedd = document.createElement("H3");
    hedd.innerHTML = cocktailName;
    document.getElementById("recipes").appendChild(hedd);

    // ul element for cocktail ingredients
    var list = document.createElement("UL");
    for (var i = 0; i < ingred.length; i++) {
        var item = document.createElement("LI");

        item.appendChild(document.createTextNode(ingred[i]));

        list.appendChild(item);
    }
    document.getElementById("recipes").appendChild(list);

    // p element for instructions
    var instruct = document.createElement("P");
    instruct.innerHTML = prepare;
    document.getElementById("recipes").appendChild(instruct);
}