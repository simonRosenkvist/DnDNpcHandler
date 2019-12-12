Bandit = function() {

Bandit.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 3;
			let dmgMelee = new SixDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: One handed scimitar cut. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' slashing';


		if (hitMelee - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} //end oneHandMeleeAttack

Bandit.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 3;
	let rangeDmg = new EightDice(1)['amount'] + 1;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: crossbow shot. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing';

		if (rangeHit - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 12;
var hp = new EightDice(2)['amount'] +2;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 11;
var dex = 12;
var con = 12;
var int = 10;
var wis = 10;
var cha = 10;
var initMod = 1;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 10'];
var languages = ['Any one language (usually Common)'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['None'];

// == end monster notes ==

// == armaments ==

var armaments = ['Leather armor', 'crossbow, (range 80/320)'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'bandit');
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
	atkOneBtn.addEventListener('click', Bandit.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Bandit.prototype.rangeAttack);

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

div.innerHTML = '<h3>Bandit</h3>';
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

} // end Bandit
