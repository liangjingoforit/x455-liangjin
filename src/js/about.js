// not working so far
/*************************************************************************
 * For loading the footer.
 * The footer will not work if you open the file directly rather than on a web server.
 *************************************************************************/

(function () {
    "use strict";
  
    $(function () {
      $(".about-container").load("footer.html");
    });
  })();