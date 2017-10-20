window.onload = function() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].onmouseover = overBoundary;
    }
};

function overBoundary() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].style.backgroundColor = "red";
    }
}