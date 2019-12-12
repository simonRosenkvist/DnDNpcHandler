Aarakocra = function() {

Aarakocra.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 4;
			let dmgMelee = new FourDice(1)['amount'] +2;
			let diveDmg = new SixDice(1)['amount'];
				atkDiv.innerHTML = 'Attack: Talons. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' slashing<br /><i>See Dive Attack for extra ' + diveDmg + ' slashing damage</i>';


		if (hitMelee - 4 == 20) {
			atkDiv.innerHTML += '<br/><strong> Crit!</strong>';
		}
}, //end oneHandMeleeAttack

Aarakocra.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 4;
	let rangeDmg = new SixDice(1)['amount'] + 2;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: Javelin. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing. Range (30/120) <br />';

		if (rangeHit - 4 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 12;
var hp = new EightDice(3)['amount'];
var speed = '20/50';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 14;
var con = 10;
var int = 11;
var wis = 12;
var cha = 11;
var initMod = 2;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 15', 'Perception +5'];
var languages = ['Auran', 'Aarakocra'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Dive Attack:</strong> If the Aarakocra is flying and dives at least 30ft towards a target and hits it with a melee attack the attack deals extra damage (1D6)', '<strong>Summoning Air Elementals:</strong> If a group of 5 or more aarakocra use their action and movement on 3 consecutive turns to performe an arial dance and must maintain concentration while doing so, when all five have finished their third turn they summon an air elemental friendly towards the aarakocra'];

// == end monster notes ==

// == armaments ==

var armaments = ['Talons', 'Javelin'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'aarakocra');
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
	atkOneBtn.addEventListener('click', Aarakocra.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Aarakocra.prototype.rangeAttack);

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

div.innerHTML = '<h3>Aarakocra</h3>';
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

} // end Aarakocra
