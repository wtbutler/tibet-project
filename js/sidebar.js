/* Set the width of the textbar to 250px and the left margin of the page content to 250px */
function openNav() {
    //document.getElementById("myTextbar").style.width = "250px";
    const element = document.querySelector(".textbar");
    const style = getComputedStyle(element)
    const width = style.width;
    document.getElementById("myTextbar").style.right = "0px";
    document.getElementById("main").style.marginRight = width;
    console.log("Tried to open");
}

/* Set the width of the textbar to 0 and the left margin of the page content to 0 */
function closeNav() {
    //document.getElementById("myTextbar").style.width = "0";
    const element = document.querySelector(".textbar");
    const style = getComputedStyle(element)
    const width = style.width;
    document.getElementById("myTextbar").style.right = '-'+width;
    document.getElementById("main").style.marginRight = "0";
    console.log("Tried to close");
} 

function loadHome() {
    var pathname = "https://wtbutler.github.io/tibet-project/home/home.html";
    fetch(pathname)
        .then(response => response.text())
        .then(text => document.getElementById("desc").innerHTML = text);
    openNav();
}

function loadBibliography() {
    var pathname = "https://wtbutler.github.io/tibet-project/home/bibli.html";
    fetch(pathname)
        .then(response => response.text())
        .then(text => document.getElementById("desc").innerHTML = text);
    openNav();
}

function loadGlossary() {
    var pathname = "https://wtbutler.github.io/tibet-project/home/gloss.html";
    fetch(pathname)
        .then(response => response.text())
        .then(text => document.getElementById("desc").innerHTML = text);
    openNav();
}

function loadMemo() {
    var pathname = "https://wtbutler.github.io/tibet-project/home/memo.html";
    fetch(pathname)
        .then(response => response.text())
        .then(text => document.getElementById("desc").innerHTML = text);
    openNav();
}
