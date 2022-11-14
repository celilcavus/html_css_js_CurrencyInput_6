var val = document.getElementById("currencyinput");
var selectType = document.getElementById("Box");
var PriceType = ["₺", "$", "€", "₽", "¥"];
var priceIcon = document.getElementById("priceIcon");

val = addEventListener("click", function () {
  switch (selectType.value) {
    case "Türk Lirası":
      priceIcon.innerText = PriceType[0];
      break;
    case "ABD Doları":
      priceIcon.innerText = PriceType[1];
      break;
    case "Euro":
      priceIcon.innerText = PriceType[2];
      break;
    case "Rus Rublesi":
      priceIcon.innerText = PriceType[3];
      break;
    case "Yen/Yuan":
      priceIcon.innerText = PriceType[4];
      break;
    default:
      priceIcon.innerText  = "";
      break;
  }
});
