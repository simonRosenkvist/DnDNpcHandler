TenDice = function(amount) {
	
	this.amount = amount;

	var val = 0;

	for (let i = 0; i < amount; i++) {
		let dice = Math.ceil(Math.random()* 10);
		val = val + dice;
	}
	this.amount = val;
	return val;

}