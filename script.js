var tabContent = document.getElementsByClassName("tabcontent");

var gwcButton = document.getElementById("gwctablink");
var appleButton = document.getElementById("appletablink");

window.addEventListener('load', openGWC);

gwcButton.addEventListener("click", openGWC);
appleButton.addEventListener("click", openApple);

function openGWC(){
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    document.getElementById("gwc").style.display = "block";
  }
}

function openApple(){
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById("apple").style.display = "block";
}