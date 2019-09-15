var workers = document.getElementById("workers");

packer = new Worker("Packer", 1, 100);
packer.set_visible();
robot = new Worker("Robot", 50, 50000);
factory_line = new Worker("Factory_Line", 2000, 30000000);
technician = new Worker("Technician", 60000, 8500000000);

setInterval(renew_coins, 1000);
