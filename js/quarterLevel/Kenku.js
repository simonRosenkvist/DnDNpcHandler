Kenku = function() {

Kenku.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 5;
			let dmgMelee = new SixDice(1)['amount'] + 3;
				atkDiv.innerHTML = 'Attack: Shortsword. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' piercing</br>';


		if (hitMelee - 5 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
}, //end oneHandMeleeAttack

Kenku.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 5;
	let rangeDmg = new SixDice(1)['amount'] + 3;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: Shortbow. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing. Range (80/320) <br />';

		if (rangeHit - 5 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 13;
var hp = new EightDice(3)['amount'];
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 16;
var con = 10;
var int = 11;
var wis = 10;
var cha = 10;
var initMod = 3;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 12', 'Deception +4', 'Perception +2', 'Stealth +5'];
var languages = ['Understands: Auran, Common', 'Speaks: through mimicry'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Ambusher:</strong> First round of combat has advantage on any creature it surprised', '<strong>Mimicry:</strong> Can mimic any sound it has heard including voices, DC 14 wis to tell the sound is an imitation'];

// == end monster notes ==

// == armaments ==

var armaments = ['Shortbow, (range 30/120)', 'Shortsword'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'kenku');
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
	atkOneBtn.addEventListener('click', Kenku.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Kenku.prototype.rangeAttack);

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

div.innerHTML = '<h3>Kenku</h3>';
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

div.appendChild(atkOneBtn);
div.appendChild(atkRngBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Kenku
