function buyPizzaBox() { //function for buying more boxes
	if(coins >= pizzaboxPrice) {
		coins = coins - pizzaboxPrice;
		pizzaboxTotal = pizzaboxTotal + 1;
		clickStr = clickStr + 1;
		pizzaboxPrice = Math.ceil(50 * 1.10**pizzaboxTotal);
		document.getElementById("pizzabox").innerHTML = 'Buy Pizza Box for ' + pizzaboxPrice + ' Coins';
		document.getElementById("pizzaboxAmmount").innerHTML = 'You have ' + pizzaboxTotal + ' Pizza Boxes';
		document.getElementById("pizzaboxProduce").innerHTML = 'Packing ' + pizzaboxTotal.toFixed(1) + ' coins per click';
	}
}

function buyCardboardBox() { //function for buying more boxes
	if(coins >= cardboardboxPrice) {
		coins = coins - pizzaboxPrice;
		cardboardboxTotal = cardboardboxTotal + 1;
		clickStr = clickStr + 20;
		cardboardboxPrice = Math.ceil(10000 * 1.20**cardboardboxTotal);
		document.getElementById("cardboardbox").innerHTML = 'Buy Cardboard Box for ' + cardboardboxPrice + ' Coins';
		document.getElementById("cardboardboxAmmount").innerHTML = 'You have ' + cardboardboxTotal + ' Cardboard Boxes';
		document.getElementById("cardboardboxProduce").innerHTML = 'Packing ' + cardboardboxTotal.toFixed(1) + ' coins per click';
	}
}
