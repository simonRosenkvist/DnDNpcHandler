Goblin = function() {

Goblin.prototype.oneHandMeleeAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitDC = new TwentyDice(1)['amount'] + 4;
			let dmg = new SixDice(1)['amount'] + 2;
				atkDiv.innerHTML = 'Attack: Scimitar. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' slashing';

					if (hitDC - 4 == 20) {
						atkDiv.innerHTML += ' <strong>CRIT!</strong> ';
					}

} //end oneHandMeleeAttack

Goblin.prototype.rangeAttack = function() {
	let hitDC = new TwentyDice(1)['amount'] + 4;
	let dmg = new SixDice(1)['amount'] + 2;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: shortbow shot. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. (Range 80/320ft)';

					if (hitDC - 4 == 20) {
						atkDiv.innerHTML += ' <strong>CRIT!</strong> ';
					}
} // end range attack

var armorClass = 15;
var hp = new SixDice(2)['amount'];
var speed = 30;

// == moster attributes ==
var str = 8;
var dex = 14;
var con = 10;
var int = 10;
var wis = 8;
var cha = 8;
var initMod = 2;
var stat = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Darkvision 60ft', 'Passive perception 9', 'Stealth +6'];
var languages = ['Common', 'Goblin'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Nimble Escape:</strong> Each turn can take the Disengage or Hide action as a bonus action'];

// == end monster notes ==

// == armaments ==

var armaments = ['leather armor', 'shield', 'shortbow, (range 80/320), (piercing)'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'goblin');
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

var atkOneBtn = document.createElement('button');
	atkOneBtn.innerHTML = 'Atk 1 hand';
	atkOneBtn.addEventListener('click', Goblin.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Goblin.prototype.rangeAttack);

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

div.innerHTML = '<h3>Goblin</h3>';
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

div.appendChild(stat);

div.appendChild(atkOneBtn);
div.appendChild(atkRngBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Goblin
