function img01() {
    const page = document.getElementById("wrapper");
    page.style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src", "assets/outfits/01.png");
    img.setAttribute("id", "image-view");
    var txt = document.createElement("p");
    var txtNode = document.createTextNode("Click anywhere to close the image.");
    txt.setAttribute("id", "image-text");
    const body = document.getElementById("body");
    body.appendChild(img);
    txt.appendChild(txtNode);
    body.appendChild(txt);
    setTimeout(function(){
        body.setAttribute("onclick", "test()")
    },500)
}

function test() {
    const page = document.getElementById("wrapper");
    page.style.display = "block";
    document.getElementById("image-view").remove();
    document.getElementById("image-text").remove();
    const body = document.getElementById("body");
    body.removeAttribute("onclick");
}