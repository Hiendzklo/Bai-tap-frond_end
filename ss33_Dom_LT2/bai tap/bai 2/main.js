document.getElementById("checkButton").addEventListener("click", function () {
  var text = document.getElementById("inputText").value;
  var charCount = text.length;
  document.getElementById("charCount").textContent = charCount + " ký tự";
});
