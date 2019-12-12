DiceBoard = function() {
	
	DiceBoard.prototype.roll = function(e) {
		var board = e.target.parentNode;
		var nr = parseInt(e.target.className);
		var print = board.getElementsByClassName('diceResult')[0];
		var modifierValue = parseInt(board.getElementsByClassName('modifier')[0].value);

			rnd = Math.ceil(Math.random()*nr);

			if (isNaN(modifierValue) == true) {
				modifierValue = 0;
			}

			rnd = rnd + modifierValue;
			print.innerHTML = rnd;

			if (nr == 20 && rnd - modifierValue == 20) {
				alert('Crit!');
			}
	}

DiceBoard.prototype.delete = function(e) {
	var board = e.target.parentNode;
		board.parentNode.removeChild(board);
	}

	var div = document.createElement('div');
		div.setAttribute('class', 'diceBoard');

	var delBtn = document.createElement('span');
		delBtn.innerHTML = 'X';
		delBtn.setAttribute('class', 'delete');
		delBtn.addEventListener('click', DiceBoard.prototype.delete);

	var modifier = document.createElement('input');
		modifier.setAttribute('class', 'modifier');
		modifier.setAttribute('placeholder', 'modifier');
		modifier.setAttribute('type', 'number');

	var dFour = document.createElement('button');
		dFour.innerHTML = 'Roll D4';
		dFour.setAttribute('class', '4');
		dFour.addEventListener('click', DiceBoard.prototype.roll);

	var dSix = document.createElement('button');
		dSix.innerHTML = 'Roll D6';
		dSix.setAttribute('class', '6');
		dSix.addEventListener('click', DiceBoard.prototype.roll);

	var dEight = document.createElement('button');
		dEight.innerHTML = 'Roll D8';
		dEight.setAttribute('class', '8');
		dEight.addEventListener('click', DiceBoard.prototype.roll);

	var dTen = document.createElement('button');
		dTen.innerHTML = 'Roll D10';
		dTen.setAttribute('class', '10');
		dTen.addEventListener('click', DiceBoard.prototype.roll);

	var dTwenty = document.createElement('button');
		dTwenty.innerHTML = 'Roll D20';
		dTwenty.setAttribute('class', '20');
		dTwenty.addEventListener('click', DiceBoard.prototype.roll);

	var result = document.createElement('span');
		result.setAttribute('class', 'diceResult');

		div.appendChild(delBtn);
		div.appendChild(result);
		div.appendChild(dFour);
		div.appendChild(dSix);
		div.appendChild(dEight);
		div.appendChild(dTen);
		div.appendChild(dTwenty);
		div.appendChild(modifier);

		return(div);

}