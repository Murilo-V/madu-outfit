const mediaQuerie = window.matchMedia("(max-width: 660px)");

changeImage(mediaQuerie);
mediaQuerie.addListener(changeImage);

function changeImage() {
 
    const groupCards = document.getElementsByClassName("group-cards");

    if (mediaQuerie.matches) {
        for (i=0; i < groupCards.length; i++) {
            groupCards[i].classList.remove("d-flex");
            groupCards[i].classList.remove("justify-content-between");
        }
    }       
}