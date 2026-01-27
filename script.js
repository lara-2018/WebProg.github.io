let Zustand = "hide"
let PwInput = document.getElementById("passwort");
 let hide = document.querySelector("#hidePassword");
 let unhide = document.querySelector("#showPassword");

hide.addEventListener("click", () => {
  hide.style.display = "none";
  unhide.style.display = "block";
  PwInput.type = "text"; //Inhalt zeigen
})

unhide.addEventListener("click", () => {
  unhide.style.display = "none";
  hide.style.display = "block";
  PwInput.type = "password"; //Inhalt verbergen
})

let MailInput = document.getElementById("E-Mail");
let Login = document.getElementById("LoginButton");

Login.addEventListener("click", () => {
  if (MailInput.value === "" || PwInput.value === "") { //wenn ein Feld oder beide Felder leer sind
    alert("Bitte fülle alle Felder aus");
  } else {
    alert("Du hast dich erfolreich eingeloggt");
  }
})
