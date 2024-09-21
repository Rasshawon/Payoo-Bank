document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOut)) {
      alert("Failed to add Money,not a num");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      if (cashOut > balance) {
        alert("you don't have enough money to withdraw");
        return;
      }
      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;
      //add to transaction
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
   <h4 class="text-2xl font-bold">cash out</h4>
   <p>${cashOut} withdraw. New Balance ${newBalance} </p>
   `;
      document.getElementById("transacton-container").appendChild(div);
    } else {
      alert("Failed to add the money");
    }
  });
