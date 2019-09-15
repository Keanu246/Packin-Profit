class Box
{
	constructor(name, productivity, price)
	{
		this.name = name;
		this.level = 0;
		this.price = price;
		this.productivity = productivity;

		// variables for displaying
		// definition of areas
		this.area = document.createElement("span");
		this.area.id = name;

		this.level_display = document.createElement("span");
		this.level_display.id = this.name + "_level";

		this.productivity_display = document.createElement("span");
		this.productivity_display.id = this.name + "_productivity";

		this.price_display = document.createElement("span");
		this.price_display.id = this.name + "_price";

		this.button = document.createElement("button");
		this.button.innerHTML = "Upgrade";
	        this.button.onclick = this.improve.bind(this);

		// put together
		this.area.append(document.createTextNode(name + " Level: "));
		this.area.append(this.level_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Cojns per Tap: "));
		this.area.append(this.productivity_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Upgrade Price: "));
		this.area.append(this.price_display);
		this.area.append(document.createElement("br"));

		this.area.append(this.button);
		this.area.append(document.createElement("br"));
		this.area.append(document.createElement("br"));
        
        	setInterval(this.produce.bind(this), 1000);
	}
	
	get_price() 
	{
		return (this.price / 2) * (this.level * this.level + 1) + (this.price / 2) * (this.level + 1)
	}
	
	upgrade()
	{
        	if(coins >= this.get_price())
        	{
        		coins -= this.get_price();
        		this.level += 1;
        		altogether_productivity += this.productivity;
        		this.renew_display();
        		clicker.renew_display();
        	}
        	else
        	{
			alert("Not enough coins!");
		}
	}

	renew_display()
	{
		this.level_display.innerHTML = this.level;
		this.productivity_display.innerHTML = this.get_production_value();
		this.price_display.innerHTML = this.get_price();
	}


	set_visible()
	{
		boxes.append(this.area);
		this.renew_display();
	}

	produce()
	{
		coins += this.get_production_value();
		coins_produced += this.get_production_value();
	}
	
	get_production_value()
	{
		return this.level * this.productivity;
	}
}

var boxes = document.getElementById("boxes");

clicker = new Box();
pizza_box = new Box("Pizza_Box", 1, 50);
pizza_box.set_visible();
cardboard_box = new Box("Cardboard_Box", 25, 10000);
