// create modal
const modalParent = document.getElementById('modal');

modalParent.innerHTML = '<div class="modal-content"><div class="modal-header"><p>Sprache auswählen...</p><div class="svg-right"><svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" id="closeModal"><path d="M1 2C0 1 1 0 2 1L4 3M4 3 6 1C7 0 8 1 7 2L5 4 7 6C8 7 7 8 6 7L4 5 2 7C1 8 0 7 1 6L3 4 1 2"></path></svg></div></div><div class="language-selection"><a href="#"><p>Deutsch (ausgewählt)</p></a><a href="#"><p>English</p></a><a href="#"><p>日本語</p></a></div><div class="modal-line"></div><p>Deine Sprache ist nicht aufgeführt? Füge deine Sprache noch heute hinzu. <a class="modal-link" href="https://github.com/corv1njano/C-Sharp-Repo">Hier mitmachen</a>!</p></div>';



// add SVG to code
const svgPlacements = document.getElementsByClassName('copy-svg');

for (let s = 0; s < svgPlacements.length; s++) {
    svgPlacements[s].innerHTML = '<path d="M3.5 7C3.5 5 5.5 3 7.5 3H9.5L9.5 5C6.5 5 5.5 6 5.5 9H3.5M9.5 3 9.5 2C9.5 1 10.5 0 11.5 0H17.5L17.5 2H12.5C12.5 2 11.5 2 11.5 3L11.5 5H9.5M9.5 6C9.5 7 10.5 8 11.5 8L17.5 8 17.5 6 12.5 6C12.5 6 11.5 6 11.5 5L9.5 5M17.5 0 18.5 0C19.5 0 20.5 1 20.5 2L20.5 6C20.5 7 19.5 8 18.5 8L17.5 8 17.5 6C18.5 6 18.5 5 18.5 5L18.5 3C18.5 3 18.5 2 17.5 2M20.5 3 22.5 3C24.5 3 26.5 5 26.5 7L26.5 9H24.5C24.5 6 23.5 5 20.5 5M3.5 9 3.5 24H5.5L5.5 9M24.5 9 24.5 24H26.5L26.5 9M3.5 24 3.5 26C3.5 28 5.5 30 7.5 30H22.5C24.5 30 26.5 28 26.5 26L26.5 24H24.5C24.5 26 23.5 28 20.5 28H9.5C5.5 28 5.5 26 5.5 24M7.5 11C7.5 10 8.5 10 8.5 10H16.5C17.5 10 17.5 11 17.5 11 17.5 11 17.5 12 16.5 12H8.5C7.5 12 7.5 11 7.5 11M7.5 15C7.5 14 8.5 14 8.5 14H20.5C21.5 14 21.5 15 21.5 15 21.5 15 21.5 16 20.5 16H8.5C7.5 16 7.5 15 7.5 15M7.5 19C7.5 18 8.5 18 8.5 18H14.5C15.5 18 15.5 19 15.5 19 15.5 19 15.5 20 14.5 20H8.5C7.5 20 7.5 19 7.5 19"/>'
}



// create footer
const footerParent = document.getElementsByClassName('footer')[0];

footerParent.innerHTML = '<div class="footer-button"><a href="#top" class="a-button">Zurück zum Anfang</a></div><p>Kostenlose Website-Vorlage erstellt von <a class="a-link" href="https://github.com/corv1njano">corv1njano</a> mit sehr viel ❤️!</p>';



// dialog model handler
const modal = document.getElementById("modal");
const openModal = document.getElementById("modalTrigger");
const closeModal = document.getElementById('closeModal');
 
openModal.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

closeModal.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}