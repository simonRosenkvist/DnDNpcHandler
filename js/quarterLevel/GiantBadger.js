GiantBadger = function() {

GiantBadger.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCBite = new TwentyDice(1)['amount'] + 3;
	let dmgBite = new SixDice(1)['amount'] + 1;

	let hitDCClaw = new TwentyDice(1)['amount'] + 3;
	let dmgClaw = new FourDice(2)['amount'] +1;
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/> Bite:</strong> Hit DC: ' + hitDCBite + ' Damage: ' + dmgBite + ' piercing. <br /><strong>Spear:</strong> ' + hitDCClaw + ' Damage: ' + dmgClaw + ' slashing';

			if (hitDCBite -3 == 20) {
				atkDiv.innerHTML += ' <strong>BITE CRIT!</strong><br />';
			}

			if (hitDCClaw -3 == 20) {
				atkDiv.innerHTML += ' <strong>CLAW CRIT!</strong><br />';
			}
} //end MeleeAttack

var armorClass = 10;
var hp = new EightDice(2)['amount'] +4;
var speed = '30/10';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 13;
var dex = 10;
var con = 15;
var int = 2;
var wis = 12;
var cha = 5;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 11', 'Darkvision 30ft'];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Keen Smell:</strong> has advantage on Wisdom (Perception) checks that rely on smell.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth', 'Claw'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'giantBadger');
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
	attackBtn.addEventListener('click', GiantBadger.prototype.attack);

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

div.innerHTML = '<h3>Giant Badger</h3>';
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
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end GiantBadger
