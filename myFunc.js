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
    var selected = [];
    for(var i = 0; i < total.length; i++) {
        if(total[i].checked) {
            selected.push(total[i].value);
        }
    }
    
    console.log(selected);
}