var pizzabox = 0;
var pizzaboxCoins = document.getElementById('coinClick');

function buyPizzaBox(){
  var pizzaboxCost = Math.floor(50 * Math.pow(1.10,pizzaboxes));
  if(coins >= pizzaboxCost){
     pizzaboxes = pizzaboxes + 1;
     coins = coins - pizzaboxCost;
     coins = coins - pizzaboxCoins + 1;
     document.getElementById('pizzaboxes').innerHTML = pizzaboxes;
     document.getElementById('coins').innerHTML = coins;
     document.getElementById('pizzaboxCoins').innerHTML = pizzaboxCoins;
  };
  var nextCost = Math.floor(50 * Math.pow(1.10,pizzaboxes));
  document.getElementById('pizzaboxCost').innerHTML = nextCost; 
};
