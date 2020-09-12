const sidenav = document.getElementById('sidenav');
const container = document.getElementById('container-fluid');

document.body.style.transition = '500ms';
document.body.style.transitionProperty = 'background-color';

function openNav() {
    container.style.marginLeft = '250px';
    sidenav.style.width = '250px';
    document.body.style.overflow = 'hidden'
    document.body.style.backgroundColor = 'rgba(0, 54, 104,0.5)';
    window.scrollTo(0,0);
  }
  
function closeNav() {
    sidenav.style.width = '0';
    container.style.marginLeft = '0';
    document.body.style.overflow = 'visible'
    document.body.style.backgroundColor = 'white';
    window.scrollTo(0,0);
  }