var loss = false;

window.onload = function() {
    document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loss = true;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].classList.add("youlose");
    }
}

function startClick() {
    loss = false;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].classList.remove("youlose");
    }
}

function overEnd() {
    if(loss) {
       alert ("You lose");
    } else {
       alert ("You win");
    }
}
