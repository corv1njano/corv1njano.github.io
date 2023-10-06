function outfit01() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/01.png");
    img.setAttribute("id", "image-view-outfit");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("outfitDemo");
    div.setAttribute("id", "outfitDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeOutfit()")
    },500)
}
function outfit02() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/02.png");
    img.setAttribute("id", "image-view-outfit");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("outfitDemo");
    div.setAttribute("id", "outfitDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeOutfit()")
    },500)
}
function outfit03() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/03.png");
    img.setAttribute("id", "image-view-outfit");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("outfitDemo");
    div.setAttribute("id", "outfitDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeOutfit()")
    },500)
}
function outfit04() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/04.png");
    img.setAttribute("id", "image-view-outfit");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("outfitDemo");
    div.setAttribute("id", "outfitDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeOutfit()")
    },500)
}
function outfit05() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/05.png");
    img.setAttribute("id", "image-view-outfit");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("outfitDemo");
    div.setAttribute("id", "outfitDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeOutfit()")
    },500)
}

function closeOutfit() {
    const page = document.getElementById("wrapper");
    page.style.display = "block";
    document.getElementById("image-view-outfit").remove();
    document.getElementById("image-text").remove();
    const body = document.getElementById("body");
    body.removeAttribute("onclick");
    document.getElementById("outfitDemoActive").setAttribute("id", "outfitDemo");
}


//----------------------- Vehicles -----------------------

function vehicle01() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "../assets/vehicles/01.png");
    img.setAttribute("id", "image-view-vehicle");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("vehicleDemo");
    div.setAttribute("id", "vehicleDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeVehicle()")
    },500)
}
function vehicle02() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "../assets/vehicles/02.png");
    img.setAttribute("id", "image-view-vehicle");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("vehicleDemo");
    div.setAttribute("id", "vehicleDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeVehicle()")
    },500)
}
function vehicle03() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "../assets/vehicles/03.png");
    img.setAttribute("id", "image-view-vehicle");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const div = document.getElementById("vehicleDemo");
    div.setAttribute("id", "vehicleDemoActive")
    div.appendChild(img);
    txt.appendChild(txtNode);
    const body = document.getElementById("body");
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "closeVehicle()")
    },500)
}

function closeVehicle() {
    const page = document.getElementById("wrapper");
    page.style.display = "block";
    document.getElementById("image-view-vehicle").remove();
    document.getElementById("image-text").remove();
    const body = document.getElementById("body");
    body.removeAttribute("onclick");
    document.getElementById("vehicleDemoActive").setAttribute("id", "vehicleDemo");
}