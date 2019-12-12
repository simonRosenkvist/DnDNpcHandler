WingedKobold = function() {

WingedKobold.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 5;
			let dmgMelee = new FourDice(1)['amount'] + 3;
				atkDiv.innerHTML = 'Attack: Dagger. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' piercing';


		if (hitMelee - 5 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} //end oneHandMeleeAttack

WingedKobold.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 5;
	let rangeDmg = new SixDice(1)['amount'] + 3;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: Dropped Rock. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' bludgeoning (Range: directly bellow)';

		if (rangeHit - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 13;
var hp = new SixDice(3)['amount'] -3;
	if (hp < 1) {
		hp = 1;
	}
var speed = '30/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 7;
var dex = 16;
var con = 9;
var int = 8;
var wis = 7;
var cha = 8;
var initMod = 3;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['Passive perception 8', 'Darkvision 60ft'];
var languages = ['Common', 'Draconic'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Sunlight Sensitivity:</strong> While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.', '<strong>Pack Tactics:</strong> has advantage on an attack roll against a creature if at least one of the kobold´s allies is within 5 feet of the creature and the ally isnt incapacitated.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Dagger', 'Rocks'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'wingedKobold');
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
	atkOneBtn.innerHTML = 'Atk Melee';
	atkOneBtn.addEventListener('click', WingedKobold.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', WingedKobold.prototype.rangeAttack);

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

div.innerHTML = '<h3>Winged Kobold</h3>';
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

} // end WingedKobold
