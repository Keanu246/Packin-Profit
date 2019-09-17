function buyPizzaBox() { //function for buying more boxes
	if(coins >= pizzaboxPrice) {
		coins = coins - pizzaboxPrice;
		pizzaboxTotal = pizzaboxTotal + 1;
		clickStr = clickStr + 1;
		pizzaboxPrice = Math.ceil(50 * 1.10**pizzaboxTotal);
		document.getElementById("pizzabox").innerHTML = 'Buy Pizza Box for ' + pizzaboxPrice + ' Coins';
		document.getElementById("pizzaboxAmmount").innerHTML = 'You have ' + pizzaboxTotal + ' Pizza Boxes';
		document.getElementById("pizzaboxProduce").innerHTML = 'Packing ' + (pizzaboxCPC * pizzaboxTotal).toFixed(1) + ' coins per click';
		document.getElementById("clickStr").innerHTML = (pizzaboxCPC * pizzaboxTotal).toFixed(1)
	}
}
