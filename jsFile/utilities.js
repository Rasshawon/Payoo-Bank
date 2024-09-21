function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  //hide all section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transactions-section").classList.add("hidden");
  //show the section you want
  document.getElementById(id).classList.remove("hidden");
}
