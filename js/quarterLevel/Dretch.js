Dretch = function() {

Dretch.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCBite = new TwentyDice(1)['amount'] + 2;
	let dmgBite = new SixDice(1)['amount'];
	let hitDCClaw = new TwentyDice(1)['amount'] + 3;
	let dmgClaw = new FourDice(2)['amount'];
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/> Bite:</strong> Hit DC: ' + hitDCBite + ' Damage: ' + dmgBite + ' piercing. <br /><strong>Spear:</strong> ' + hitDCClaw + ' Damage: ' + dmgClaw + ' slashing';

			if (hitDCBite -2 == 20) {
				atkDiv.innerHTML += ' <strong>BITE CRIT!</strong><br />';
			}

			if (hitDCClaw -3 == 20) {
				atkDiv.innerHTML += ' <strong>SPEAR CRIT!</strong><br />';
			}
} //end oneHandMeleeAttack

var armorClass = 11;
var hp = new SixDice(4)['amount'] +4;
var speed = '20';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 11;
var dex = 11;
var con = 12;
var int = 5;
var wis = 8;
var cha = 3;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 9', 'Darkvision 60', ];
var languages = ['Dretch'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Damage Resistance:</strong> Cold, Fire, Lightning', '<strong>Damage Immunities:</strong> poison', '<strong>Condition Immunities:</strong> Poisoned', '<strong>Fetid Cloud (1/Day):</strong> A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can´t take reactions.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth', 'Claws'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'dretch');
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
	attackBtn.addEventListener('click', Dretch.prototype.attack);

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

div.innerHTML = '<h3>Dretch</h3>';
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

} // end Dretch
