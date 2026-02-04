

$(document).ready(function() {
const zurStartseite = document.getElementById("ueberschrift");
zurStartseite.addEventListener("click", () => {
      window.open("index.html", "_blank");
  });
  

const zurinselseite = document.getElementById("Box1");
zurinselseite.addEventListener("click", () => {
  window.open("Aoshima.html", "_blank");
});
  
  let $pwInput = $("#passwort");
  let $hide = $("#hidePassword");
  let $unhide = $("#showPassword");
  let $mailInput = $("#E-Mail");
  let $login = $("#LoginButton");

  $hide.on("click", function() {
    $(this).hide();
    $unhide.show();
    $pwInput.attr("type", "text"); //Inhalt zeigen
  });

  // Passwort verbergen
  $unhide.on("click", function() {
    $(this).hide();
    $hide.show();
    $pwInput.attr("type", "password"); //Inhalt verbergen
  });

  // Login Validierung
  $login.on("click", function() {
    if ($mailInput.val() === "" || $pwInput.val() === "") { //wenn ein Feld oder beide Felder leer sind
      alert("Bitte fülle alle Felder aus");
    } else {
      alert("Du hast dich erfolgreich eingeloggt");
    }
  });

  });



