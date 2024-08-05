  // begin added for accordion
  function myAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className =
        x.previousElementSibling.className.replace("w3-brown", "w3-orange");
    } else {
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className =
        x.previousElementSibling.className.replace("w3-orange", "w3-brown");
    }
  }
  // end added for accordion