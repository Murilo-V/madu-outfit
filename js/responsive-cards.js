const mediaQuerie = window.matchMedia("(max-width: 660px)");

  changeImage(mediaQuerie);
  mediaQuerie.addListener(changeImage);

function changeImage(mediaQuerie) {
    const groupCards = document.getElementById('group-cards');

    if (mediaQuerie.matches) {
        groupCards.classList.remove("d-flex");
        groupCards.classList.remove("justify-content-between");
    }  
  }