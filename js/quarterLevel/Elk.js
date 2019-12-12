Elk = function() {

Elk.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDc;
	let dmg;
	let rnd = Math.round(Math.random()*1);

	switch (rnd) {

		case 0:

			hitDC = new TwentyDice(1)['amount'] + 5;
			dmg = new SixDice(1)['amount'] + 3;	
			atkDiv.innerHTML = 'Attack: Ram. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning. <br /><i>See charge.</i>';

				if (hitDC -5 == 20) {
					atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
				}
			
					break;

		case 1:

			hitDC = new TwentyDice(1)['amount'] + 5;
			dmg = new FourDice(2)['amount'] + 3;	
			atkDiv.innerHTML = 'Attack: Hooves. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning. <br />';

				if (hitDC -5 == 20) {
					atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
				}
			
					break;
	}//end switch

}, //end MeleeAttack

Elk.prototype.charge = function() {

	let hitDC = new TwentyDice(1)['amount'] + 5;
	let dmg = new SixDice(1)['amount'] + 3;	
	let chargeDmg = new SixDice(2)['amount'];
		dmg = parseInt(dmg) + parseInt(chargeDmg);
		atkDiv.innerHTML = 'Attack: Ram Charge. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning. <br />';

			if (hitDC -5 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}//End charge

var armorClass = 10;
var hp = new TenDice(2)['amount'] +2;
var speed = 50;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 16;
var dex = 10;
var con = 12;
var int = 2;
var wis = 10;
var cha = 6;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10'];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Charge:</strong> If the Elk moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 2D6 slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Horns', 'Hooves'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'elk');
var armorClassInput = document.createElement('input');
var acSpan = document.createElement('span');

var xBtn = document.createElement('span');
	xBtn.setAttribute('class', 'delete');

var hpInput = document.createElement('input');
var hpSpan = document.createElement('span');

var speedInput = document.createElement('input');
var speedSpan = document.createElement('span');

var initiativeInput = document.createElement('input');
var initSpan = document.createElement('span');

var hitstatsDiv = document.createElement('div');
	hitstatsDiv.setAttribute('class', 'hitstatsDiv');

var attackBtn = document.createElement('button');
	attackBtn.innerHTML = 'Attack';
	attackBtn.addEventListener('click', Elk.prototype.attack);

var chargeBtn = document.createElement('button');
	chargeBtn.innerHTML = 'Charge';
	chargeBtn.addEventListener('click', Elk.prototype.charge);

var toggleDiv = document.createElement('div');
	toggleDiv.setAttribute('class', 'toggle');
	toggleDiv.setAttribute('alt', 'displayed');

var atkDiv = document.createElement('div');
	atkDiv.setAttribute('class', 'atkDiv');

var br0 = document.createElement('BR');
var br0a = document.createElement('BR');
var br1 = document.createElement('BR');
var brs1 = document.createElement('BR');

var mod = document.createElement('span');
	mod.innerHTML = 'Mod';
	mod.setAttribute('id', 'mod');

xBtn.innerHTML = 'X';

acSpan.innerHTML = 'AC';
armorClassInput.value = armorClass;

hpSpan.innerHTML = 'HP';
hpInput.value = hp;

speedSpan.innerHTML = 'Speed';
speedInput.value = speed;

initSpan.innerHTML = 'init';
initiativeInput.value = new TwentyDice(1)['amount'] + initMod;

div.innerHTML = '<h3>Elk</h3>';
div.appendChild(xBtn);
div.appendChild(br0a);

hitstatsDiv.appendChild(acSpan);
hitstatsDiv.appendChild(hpSpan);
hitstatsDiv.appendChild(speedSpan);
hitstatsDiv.appendChild(initSpan);
div.appendChild(hitstatsDiv);
div.appendChild(br0);

div.appendChild(armorClassInput);
div.appendChild(hpInput);
div.appendChild(speedInput);
div.appendChild(initiativeInput);
div.appendChild(br1);

div.appendChild(mod);
div.appendChild(brs1);

div.appendChild(stats);

div.appendChild(attackBtn);
div.appendChild(chargeBtn);	
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Elk
