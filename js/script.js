var load = document.getElementById("preloader");
function loading(){
    load.style.display = 'none';

}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  /* To set random images */
  window.onload = function () {
    var images = ['images/avatar1.jpg', 'images/avatar2.jpg', 'images/avatar3.jpg', 'images/step2.jpg'];
    var image = images[Math.floor(Math.random() * images.length)];
    
  }