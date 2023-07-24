var allowedSpeed = document.getElementById("allowedSpeed");
var driverSpeed = document.getElementById("speed");
var calcBtn = document.getElementById("calcBtn");
var fineMessage = document.getElementById("fineMessage");

function calcular() {
  var numDriverSpeed = parseInt(driverSpeed.value);
  var numAllowedSpeed = parseInt(allowedSpeed.value);
  var percent = (numDriverSpeed / numAllowedSpeed) * 100 - 100;
  if (
    allowedSpeed.value == "" ||
    isNaN(allowedSpeed.value) ||
    driverSpeed.value == "" ||
    isNaN(driverSpeed.value)
  ) {
    alert("Insira números válidos");
    allowedSpeed.value = "";
    driverSpeed.value = "";
    fineMessage.textContent = "";
    allowedSpeed.focus();
  } else {
    if (numDriverSpeed <= numAllowedSpeed) {
      fineMessage.textContent = "Situação: Sem Multa";
    } else if (percent > 0 && percent <= 20) {
      fineMessage.textContent = "Situação: Multa Leve";
    } else if (percent > 20) {
      fineMessage.textContent = "Situação Multa Grave";
    }
  }
}

calcBtn.addEventListener("click", calcular);
