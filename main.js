function openTab(evt, pageName){
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}

var totalCPS = 0;
var coins = 0;
var coinstext = document.getElementById("coins");
var holyboxes = 0;
var holyboxestext = document.getElementById("holyboxes");
var clickStr = 1;
var clickCost = 100;
var refreshRateVar = 100;
var packerPrice = 100;
var packerTotal = 0;
var packerCPS = 1;
var robotPrice = 25000;
var robotTotal = 0;
var robotCPS = 25;
var factorylinePrice = 5000000;
var factoryTotal = 0;
var factoryBPS = 400;

function addCoins() {
	coins = coins + clickStr;
	//console.log(getCookie("coins"))l;
	document.getElementById("coins").innerHTML = coins.toFixed(1) + ' Coins';
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}
