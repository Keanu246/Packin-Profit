var packers = 0;
var packerCost = 100;
var packerCPS = 1;
var packerTotal = 0;

function buyPacker(){
  if(coins >= packerCost){
	  coins = coins - packerCost;
	  packers = packers + 1;
	  packerCost = Math.ceil(100 * 1.10**packers);
	  document.getElementById("packers").innerHTML
	  document.getElementById("packer").innerHTML
	  document.getElementById("packerCPS").innerHTML
	}
}
