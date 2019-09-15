var packers = 0;
var packerCoins = 1;
var robots = 0;
var robotCoins = 50;

function buyPacker(){
  var packerCost = Math.floor(200 * Math.pow(1.10,packers));
  if(coins >= packerCost){
     packers = packers + 1;
     coins = coins - packerCost;
     document.getElementById('packers').innerHTML = packers;
     document.getElementById('coins').innerHTML = coins;
     document.getElementById('packerCoins').innerHTML = packerCoins;
  };
  var nextCost = Math.floor(200 * Math.pow(1.1,packers));
  document.getElementById('packerCost').innerHTML = nextCost; 
};

window.setInterval(function(){
	
  packerCoins(packers);
  robotCoins(robots);
	
}, 1000);
