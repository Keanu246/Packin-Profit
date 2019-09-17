function BuyPizzaBox() { // function to buy more boxes

	if (coins >= pizzaboxCost) {
		coins = coins - pizzaboxCost;
		clickStr = clickStr + 1;
		pizzaboxTotal = pizzaboxTotal + 1;
		pizzaboxPrice = pizzaboxPrice * 1.10;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("pizzaboxPrice", pizzaboxPrice);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + pizzaboxPrice.toFixed(1);
	}
}
