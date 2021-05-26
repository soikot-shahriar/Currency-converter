var input = document.getElementById('input');
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myresult);
inputType.addEventListener("change", myresult);
resultType.addEventListener("change", myresult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myresult() {

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  if (inputTypeValue === "usd" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "usd" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 0.7882;
  } else if (inputTypeValue === "usd" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.6159;
  } else if (inputTypeValue === "usd" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 0.7882;
  } else if (inputTypeValue === "usd" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 109.39;
  } else if (inputTypeValue === "usd" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 0.9508;
  } else if (inputTypeValue === "usd" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 1.1155;
  } else if (inputTypeValue === "usd" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1.1469;
  }



  if (inputTypeValue === "eur" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 1.2688;
  } else if (inputTypeValue === "eur" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "eur" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.7815;
  } else if (inputTypeValue === "eur" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 138.80;
  } else if (inputTypeValue === "eur" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 1.2064;
  } else if (inputTypeValue === "eur" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 1.4155;
  } else if (inputTypeValue === "eur" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1.4552;
  }


  if (inputTypeValue === "gbp" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 1.6236;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 1.2798;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 177.63;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 1.5438;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 1.8112;
  } else if (inputTypeValue === "gbp" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1.8621;
  }


  if (inputTypeValue === "jpy" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 0.0091;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "eur") {
    result.value = Number(input.value) * .00072;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.0056;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 0.8693;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 0.0102;
  } else if (inputTypeValue === "jpy" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 0.0105;
  }


  if (inputTypeValue === "chf" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 1.0516;
  } else if (inputTypeValue === "chf" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 0.8286;
  } else if (inputTypeValue === "chf" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.6478;
  } else if (inputTypeValue === "chf" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 115.06;
  } else if (inputTypeValue === "chf" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "chf" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 1.1731;
  } else if (inputTypeValue === "chf" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1.2064;
  }


  if (inputTypeValue === "cad" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 0.8965;
  } else if (inputTypeValue === "cad" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 0.7064;
  } else if (inputTypeValue === "cad" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.5521;
  } else if (inputTypeValue === "cad" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 98.07;
  } else if (inputTypeValue === "cad" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 0.8524;
  } else if (inputTypeValue === "cad" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 1;
  } else if (inputTypeValue === "cad" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1.0283;
  }


  if (inputTypeValue === "aud" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 0.8719;
  } else if (inputTypeValue === "aud" && resultTypeValue === "eur") {
    result.value = Number(input.value) * 0.6871;
  } else if (inputTypeValue === "aud" && resultTypeValue === "gbp") {
    result.value = Number(input.value) * 0.5370;
  } else if (inputTypeValue === "aud" && resultTypeValue === "jpy") {
    result.value = Number(input.value) * 95.39;
  } else if (inputTypeValue === "aud" && resultTypeValue === "chf") {
    result.value = Number(input.value) * 0.8290;
  } else if (inputTypeValue === "aud" && resultTypeValue === "cad") {
    result.value = Number(input.value) * 0.9727;
  } else if (inputTypeValue === "aud" && resultTypeValue === "aud") {
    result.value = Number(input.value) * 1;
  }






}