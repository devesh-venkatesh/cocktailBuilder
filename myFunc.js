function myFunc(liquor) {
    document.getElementById("title").style.backgroundColor = "green";
    var para = document.createElement("p");
    var node = document.createTextNode(liquor);
    para.appendChild(node);
    var element = document.getElementById("form");
    element.appendChild(para);
    
}

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

var cocktails = [
    {
        name: "manhattan",
        ingredients: ["whiskey", "sweet vermouth", "angostura"],
        prep: "Two ounces of whiskey\nTOne ounce sweet vermouth\nTwo dashes angostura"
    },    
];

function lookUp(selectedArr) {
    let results = [];
    for (var i = 0; i < cocktails.length; i++) {
        console.log(cocktails[i].ingredients);
        console.log(selectedArr);
        console.log(cocktails[i]);
        //let allFound = cocktails[i].ingredients.every( ai =>  selectedArr.includes(ai) );
        var thing = cocktails[i].ingredients.every(r => selectedArr.includes(r));
        console.log(thing);
        if (thing) {
            results.push(cocktails[i].name);
            putIt(cocktails[i]); 
        }
    }
    console.log(results);
}

function putIt(result) {
    console.log("Inside put it" + result);

}