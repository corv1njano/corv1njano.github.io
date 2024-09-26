// create modal
const modalParent = document.getElementById('modal');

modalParent.innerHTML = '<div class="modal-content"><div class="modal-header"><p>Sprache auswählen...</p><div class="svg-right"><svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" id="closeModal"><path d="M1 2C0 1 1 0 2 1L4 3M4 3 6 1C7 0 8 1 7 2L5 4 7 6C8 7 7 8 6 7L4 5 2 7C1 8 0 7 1 6L3 4 1 2"></path></svg></div></div><div class="language-selection"><a href="#"><p>Deutsch (ausgewählt)</p></a><a href="#"><p>English</p></a><a href="#"><p>日本語</p></a></div><div class="modal-line"></div><p>Deine Sprache ist nicht aufgeführt? Füge deine Sprache noch heute hinzu. <a class="modal-link" href="https://github.com/corv1njano/C-Sharp-Repo">Hier mitmachen</a>!</p></div>';



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