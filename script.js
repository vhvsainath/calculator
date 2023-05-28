function calculateSplit() {
  var totalAmount = parseFloat(document.getElementById("totalAmount").value);
  var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

  if (isNaN(totalAmount) || isNaN(numberOfPeople) || totalAmount <= 0 || numberOfPeople < 1) {
    document.getElementById("splitAmount").innerText = "Invalid input";
    return;
  }

  var splitAmount = totalAmount / numberOfPeople;
  document.getElementById("splitAmount").innerText = "Split Amount: $" + splitAmount.toFixed(2);
}
