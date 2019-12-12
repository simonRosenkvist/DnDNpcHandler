Guard = function() {

Guard.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new SixDice(1)['amount'] + 1;
		
		atkDiv.innerHTML = 'Attack: Spear. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing';

			if (hitDC -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}, //end oneHandMeleeAttack

Guard.prototype.twoHandAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new EightDice(1)['amount'] + 1;
		
		atkDiv.innerHTML = 'Attack: Spear. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing';

			if (hitDC -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}, // end two hand attack

Guard.prototype.rangeAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new SixDice(1)['amount'] + 1;
		
		atkDiv.innerHTML = 'Attack: Thrown Spear. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. Range (20/60)';

			if (hitDC -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
} //end range attack

var armorClass = 16;
var hp = new EightDice(2)['amount'] +2;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 13;
var dex = 12;
var con = 12;
var int = 10;
var wis = 11;
var cha = 10;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 12', 'Perception +2'];
var languages = ['Any one (usually Common)'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['None'];

// == end monster notes ==

// == armaments ==

var armaments = ['Chain Shirt', 'Shield', 'Spear'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'guard');
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
	attackBtn.innerHTML = 'Atk 1 Hand';
	attackBtn.addEventListener('click', Guard.prototype.attack);

var twoHandAtkBtn = document.createElement('button');
	twoHandAtkBtn.innerHTML = 'Atk 2 Hand';
	twoHandAtkBtn.addEventListener('click', Guard.prototype.twoHandAttack);

var rangeAtkBtn = document.createElement('button');
	rangeAtkBtn.innerHTML = 'Atk Range';
	rangeAtkBtn.addEventListener('click', Guard.prototype.rangeAttack);

var toggleDiv = document.createElement('div');
	toggleDiv.setAttribute('class', 'toggle');
	toggleDiv.setAttribute('alt', 'displayed');

var atkDiv = document.createElement('div');
	atkDiv.setAttribute('class', 'atkDiv');

var br0 = document.createElement('BR');
var br0a = document.createElement('BR');
var br1 = document.createElement('BR');
var brs1 = document.createElement('BR');
var br2 = document.createElement('BR');
var br3 = document.createElement('BR');

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

div.innerHTML = '<h3>Guard</h3>';
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
div.appendChild(twoHandAtkBtn);
div.appendChild(rangeAtkBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Guard
