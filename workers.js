function buyPacker() { //function for buying more workers
	if(coins >= packerPrice) {
		coins = coins - packerPrice;
		packerTotal = packerTotal + 1;
		packerPrice = Math.ceil(100 * 1.10**packerTotal);
		document.getElementById("packer").innerHTML = 'Buy Packer for ' + packerPrice + ' Coins';
		document.getElementById("packerAmmount").innerHTML = 'You have ' + packerTotal + ' Packers';
		document.getElementById("packerProduce").innerHTML = 'Packing ' + (packerCPS * packerTotal).toFixed(1) + ' coins per second';
	}
}
