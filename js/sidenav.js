function openNav() {
    const container =  document.getElementById("container-fluid");
    document.getElementById("sidenav").style.width = "250px";
    container.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0, 54, 104,0.5)";
  }
  
  
  function closeNav() {
    const container =  document.getElementById("container-fluid");
    document.getElementById("sidenav").style.width = "0";
    container.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }