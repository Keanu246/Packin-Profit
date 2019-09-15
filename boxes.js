var pizzabox = 0;

function buyPizzaBox(){
  var pizzaboxCost = Math.floor(100 * Math.pow(1.10,pizzaboxes));
  if(coins >= pizzaboxCost){
     pizzaboxes = pizzaboxes + 1;
     coinClick = coinClick + 1;
     coins = coins - pizzaboxCost;
     document.getElementById('pizzaboxes').innerHTML = pizzaboxes;
     document.getElementById('coins').innerHTML = coins;
     document.getElementById('coinClick').innerHTML = coinClick;
  };
  var nextCost = Math.floor(100 * Math.pow(1.1,pizzaboxes));
  document.getElementById('pizzaboxCost').innerHTML = nextCost; 
};
