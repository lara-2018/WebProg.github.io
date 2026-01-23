const NavStartseite = document.getElementById("nav1");

NavStartseite.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=IxX_QHay02M", "_blank");
    });

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// let PwInput = $("Passwort").val();
// let hide = $(".fa-eye").val();
// let unhide = $(".fa-eye-slash hide").val();

let PwInput = document.getElementById("Passwort");
let hide = document.getElementById(".fa-eye");
let unhide = document.getElementById(".fa-eye-slash hide");

hide.addEventListener("click", () => {
    hide.style.display = "none";
    unhide.style.display = "block";
    PwInput.type = "text";
})

unhide.addEventListener("click", () => {
    unhide.style.display = "none";
    hide.style.display = "block";
    PwInput.type = "password";
})