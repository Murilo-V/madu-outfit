function openNav() {
    document.getElementById("container-fluid").style.marginLeft = "250px";
    document.getElementById("sidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0, 54, 104,0.5)";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("container-fluid").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }