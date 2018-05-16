function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand +", price is: " + this.price + " and the color is: " + this.color + " size: " + this.size + "'" +".");

}

var iPhone6S = new Phone("Apple", 2250, "Gold", 5.7),
 samsungGalaxyS8  = new Phone("Samsung", 2700, "White", 5.2),
 onePlusOne = new Phone("OnePlus", 2400, "Black", 5.5),
 xiaomiMeizu4 = new Phone("Xiaomi", 1800, "Black", 5.9);

 iPhone6S.printInfo();
 samsungGalaxyS8.printInfo();
 onePlusOne.printInfo();
 xiaomiMeizu4.printInfo();