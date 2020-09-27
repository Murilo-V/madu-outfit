const X = window.matchMedia("(max-width: 650px)");
const Y = window.matchMedia("(max-height: 1200px)");

changeImage(X, Y);
X.addListener(changeImage);

function changeImage() {
  const imgSlide1 = document.getElementById('slide1');
  const imgSlide2 = document.getElementById('slide2');
  if (X.matches) {
    if (Y.matches) {
      imgSlide1.innerHTML = '<img style="width: 100%; height: 100%" src="images/slide1-mobile.svg" alt="MaduOutfit">'
      imgSlide2.innerHTML = '<img style="width: 100%; height: 100%" src="images/slide2-mobile.svg" alt="Roupas que falam por você.">';
    }
  }
}