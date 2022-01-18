// variables
let Input = document.querySelector(".input");
let len = 18;
const generate = document.querySelector(".generate");
const copyClipBoard = document.querySelector(".copy");
const clearInput = document.querySelector(".clear");
// chars
let chars =
  "0123456789abcdefghijklmnopqrstuvweyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Generate Password
generate.addEventListener("click", function () {
  let randomPass = Array(len)
    .fill(chars)
    .map(function (e) {
      return e[Math.floor(Math.random() * e.length)];
    })
    .join("");
  Input.value = randomPass;
});
// copy button
copyClipBoard.addEventListener("click", function () {
  if (Input.value || Input.value != startsWith("")) {
    Input.select();
    Input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(Input.value);
    alert("Password Copied 😉 !");
  }
});
// clear button
clearInput.addEventListener("click", function () {
  Input.value = "";
});
