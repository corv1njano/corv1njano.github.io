var images = document.getElementsByClassName("outfit-item");
var i;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        var outfitId = this.firstElementChild.getAttribute("src");
        document.getElementById("wrapper").style.display = "none";
        var img = document.createElement("img");
        var div = document.createElement("div");
        var txt = document.createElement("p");
        img.setAttribute("src", outfitId);
        img.classList.add("outfit-image-active");
        div.classList.add("outfit-div-active");
        txt.innerHTML = "Klicke irgendwo, um das Bild zu schließen.";
        txt.classList.add("image-text");
        const body = document.getElementById("body");
        body.appendChild(div).appendChild(img);
        body.appendChild(txt);
        setTimeout(function () {
            body.setAttribute("onclick", "closeOutfit()")
        }, 500);
    });
}
function closeOutfit() {
    document.getElementsByClassName("outfit-div-active")[0].remove();
    document.getElementsByClassName("image-text")[0].remove();
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("body").removeAttribute("onclick");
}

var images = document.getElementsByClassName("vehicle-item");
var i;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        var outfitId = this.firstElementChild.getAttribute("src");
        document.getElementById("wrapper").style.display = "none";
        var img = document.createElement("img");
        var div = document.createElement("div");
        var txt = document.createElement("p");
        img.setAttribute("src", outfitId);
        img.classList.add("vehicle-image-active");
        div.classList.add("vehicle-div-active");
        txt.innerHTML = "Klicke irgendwo, um das Bild zu schließen.";
        txt.classList.add("image-text");
        const body = document.getElementById("body");
        body.appendChild(div).appendChild(img);
        body.appendChild(txt);
        setTimeout(function () {
            body.setAttribute("onclick", "closeVehicle()")
        }, 500);
    });
}
function closeVehicle() {
    document.getElementsByClassName("vehicle-div-active")[0].remove();
    document.getElementsByClassName("image-text")[0].remove();
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("body").removeAttribute("onclick");
}