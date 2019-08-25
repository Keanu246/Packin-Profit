var coins = 200;

function coinClick(number){
    coins = coins + number;
    document.getElementById("coins").innerHTML = coins;
};

var holyboxes = 0;

var packers = 0;

function buyPacker(){
    var cursorCost = Math.floor(200 * Math.pow(1.2,packers));     //works out the cost of this packer
    if(coins >= packerCost){                                   //checks that the player can afford the packer
        packers = packers + 1;                                   //increases number of packers
    	coins = coins - packerCost;                          //removes the coins spent
        document.getElementById('packerCoins').innerHTML = packerCoins; //adds coins per second per packer
        document.getElementById('packers').innerHTML = packers;  //updates the number of packers for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of coins for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.2,packers));       //works out the cost of the next packer
    document.getElementById('packerCost').innerHTML = nextCost;  //updates the packer cost for the user
};

window.setInterval(function(){
	
	coinClick(packers);
	
}, 1000);
