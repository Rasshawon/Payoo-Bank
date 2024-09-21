document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // we can do it by this way but it's not appropriate cause we should not repeat
    // const addMoney = document.getElementById("input-add-money").value;
    // const addMoneyNumber = parseFloat(addMoney);
    // const pinNumber = document.getElementById("input-pin-number").value;
    // console.log(addMoney, pinNumber);

    // //wrong way to verify pin
    // if (pinNumber === "1234") {
    //   const balance = document.getElementById("account-balance").innerText;
    //   const balanceNumber = parseFloat(balance);
    //   const newBalance = balanceNumber + addMoneyNumber;

    //   document.getElementById("account-balance").innerText = newBalance;
    // } else {
    // }
    // ** how actually should do
    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("Failed to add Money");
      return;
    }
    //**wrong way to verify pin
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
      //add to transactions
      const div = document.createElement("div");
      div.classList.add("bg-blue-300");
      div.innerHTML = `
   <h4 class="text-2xl font-bold">cash out</h4>
   <p>${addMoney} added. New Balance ${newBalance} </p>
   `;
      document.getElementById("transacton-container").appendChild(div);
    } else {
      alert("Failed to add the money");
    }
  });
