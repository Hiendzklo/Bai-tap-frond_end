document.getElementById("toggleButton").addEventListener("click", function () {
  var passwordInput = document.getElementById("passwordInput");
  var inputType = passwordInput.type;

  if (inputType === "password") {
    passwordInput.type = "text"; // Change to text to reveal password
  } else {
    passwordInput.type = "password"; // Change back to password to hide
  }
});
