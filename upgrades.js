var packerUpgrade = false;
var packerUpgrade2 = false;

function checkUpgrades() {
	console.log(packerUpgrade);
	if(packerTotal >= 10 && packerUpgrade != true) {
		var packerUpgradeElements = document.getElementsByClassName("packerUpgrade");
		for (i = 0; i < packerUpgradeElements.length; i++){
			packerUpgradeElements[i].style.display = "inline";
		}
	}
}
