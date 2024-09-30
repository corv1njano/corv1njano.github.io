// set nav image to favicon
const favicon = document.createElement('link');
favicon.setAttribute('rel','shortcut icon');
favicon.setAttribute('type','image/x-icon');
favicon.href = document.getElementsByClassName('nav-left')[0].children[0].getAttribute('src');
document.head.appendChild(favicon);



// create left nav menu
const navMenu = document.getElementsByClassName('left')[0];
const navMenuContent = {
    "navboxes": [
        {
            "title": "Grundlagen",
            "links": [
                // {
                //     "name": "<span class=\"tag tag-green\">LEICHT</span><hr>",
                //     "href": "#"
                // },
                {
                    "name": "\"Hallo Welt\"-Programm",
                    "href": "/grundlagen/hallo-welt-programm.html"
                },
                {
                    "name": "C#-Synax verstehen",
                    "href": "/grundlagen/c-sharp-syntax-verstehen.html"
                },
                {
                    "name": "Kommentare & Namen",
                    "href": "/grundlagen/#"
                },
                {
                    "name": "Numiersche Datentypen",
                    "href": "/grundlagen/#"
                },
                {
                    "name": "Textbasierte Datentypen",
                    "href": "/grundlagen/#"
                },
                {
                    "name": "Boolesche Werte",
                    "href": "/grundlagen/#"
                },
                {
                    "name": "if-Anweisungen",
                    "href": "/grundlagen/#"
                },
                {
                    "name": "switch-Cases",
                    "href": "/grundlagen/#"
                }
            ]
        }
    ]
};

for (let b = 0; b < navMenuContent.navboxes.length; b++) {
    var navBox = document.createElement('div');
    navBox.classList.add('nav-box');

    const divVisual = document.createElement('div');
    divVisual.classList.add('nav-visual');
    const divHide = document.createElement('div');
    divHide.classList.add('hide-content');

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgElement.setAttribute('viewBox','0 -17 30 90');
    svgElement.setAttributeNS('http://www.w3.org/2000/xmlns/','xmlns:xlink','http://www.w3.org/1999/xlink');
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathElement.setAttribute('d','M0 10M10 5 30 25C35 30 30 35 30 35L10 55C5 60 0 58 0 50L0 10C0 2 5 0 10 5');
    svgElement.appendChild(pathElement);

    var navBoxTitle = document.createElement('p');
    navBoxTitle.innerHTML = navMenuContent.navboxes[b].title;

    const linksLength = navMenuContent.navboxes[b].links.length;

    for (let k = 0; k < linksLength; k++) {
        var navBoxLinks = document.createElement('a');
        navBoxLinks.innerHTML = navMenuContent.navboxes[b].links[k].name;
        navBoxLinks.setAttribute('href',navMenuContent.navboxes[b].links[k].href);

        divHide.appendChild(navBoxLinks);
    }

    divVisual.appendChild(svgElement);
    divVisual.appendChild(navBoxTitle);

    navBox.appendChild(divVisual);
    navBox.appendChild(divHide);
    navMenu.appendChild(navBox);
}




// smooth opening animation
const boxes = document.getElementsByClassName('nav-box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.lastElementChild;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}



// create side navbar
const h1tag = document.getElementsByTagName('h1');
const navRight = document.getElementById('navRight');

const headP = document.createElement('p');
headP.innerHTML = h1tag[0].innerHTML;
headP.classList.add('right-head');
navRight.appendChild(headP);

const h2tags = document.getElementsByTagName('h2');

for (let h = 0; h < h2tags.length; h++) {
    h2tags[h].setAttribute('id','section'+h);

    var linkP = document.createElement('p');
    var linkA = document.createElement('a');
    linkP.innerHTML = h2tags[h].innerHTML + '<br>';
    linkP.classList.add('right-link');
    linkA.setAttribute('href','#'+h2tags[h].getAttribute('id'));
    linkA.appendChild(linkP);
    navRight.appendChild(linkA);
}

navRight.childNodes[0].addEventListener('click', function() {
    window.scrollTo(0,0);
});




// copy in page links
const links = document.getElementsByClassName('page-text-link');

for (let l = 0; l < links.length; l++) {
    links[l].addEventListener('click', function() {
        if (l == 0) {
            var location = window.location.href.replace(/#.*/,'');
            navigator.clipboard.writeText(location);
        } else if (l > 0) {
            var location = window.location.href.replace(/#.*/,'') + '#' + this.getAttribute('id');
            navigator.clipboard.writeText(location);
        }
    });
}




// copy code
const copyBtn = document.getElementsByClassName('code-clipboard');
const copySpace = document.getElementsByClassName('code-right');

for (let c = 0; c < copyBtn.length; c++) {
    copyBtn[c].addEventListener('click', function() {
        copyBtn[c].classList.add('not-active');
        copyBtn[c].children[0].style.display = 'none';
        copyBtn[c].lastElementChild.innerHTML = 'Code kopiert!';

        const code = document.getElementsByClassName('code-display')[c];

        var rawCode = code.innerHTML;
        var newCode = rawCode.replace(/<span class="cyan">/g,'').replace(/<span class="green">/g,'').replace(/<span class="light-green">/g,'').replace(/<span class="purple">/g,'').replace(/<span class="orange">/g,'').replace(/<span class="light-orange">/g,'').replace(/<span class="blue">/g,'').replace(/<span class="light-blue">/g,'').replace(/<span class="gray">/g,'').replace(/<span class="yellow">/g,'').replace(/<span class="dark-yellow">/g,'').replace(/<\/span>/g,'').replace(/<p>/g,'').replace(/<\/p>/g,'').replace(/<br>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\u2002/g,'  ').replace(/                        /g,'').replace(/\n                    /g,'');
        navigator.clipboard.writeText(newCode);
        console.log(newCode);

        setTimeout(function () {
            copyBtn[c].classList.remove('not-active');
            copyBtn[c].children[0].style.display = 'block';
            copyBtn[c].lastElementChild.innerHTML = 'Kopieren';
        }, 2000);
    });
}




// generate line counter
const indexCount = document.getElementsByClassName('code-index');
const codeBoxCounter = document.getElementsByClassName('code-view');

for (let x = 0; x < codeBoxCounter.length; x++) {
    var clen = codeBoxCounter[x].children[1].children.length;

    for (let b = 0; b < clen; b++) {
        var counterTag = document.createElement('p');
        counterTag.classList.add('code-counter');
        indexCount[x].appendChild(counterTag);
    }
}



// function to set current article as highlighted in left menu bar
sca();