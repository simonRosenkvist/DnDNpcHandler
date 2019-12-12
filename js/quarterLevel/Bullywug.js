Bullywug = function() {

Bullywug.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCBite = new TwentyDice(1)['amount'] + 3;
	let dmgBite = new FourDice(1)['amount'] + 1;
	let hitDCSpear = new TwentyDice(1)['amount'] + 3;
	let dmgSpearOne = new SixDice(1)['amount'] +1;
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/> Bite:</strong> Hit DC: ' + hitDCBite + ' Damage: ' + dmgBite + ' bludgeoning. <br /><strong>Spear:</strong> ' + hitDCSpear + ' Damage: ' + dmgSpearOne + ' piercing';

			if (hitDCBite -3 == 20) {
				atkDiv.innerHTML += ' <strong>BITE CRIT!</strong><br />';
			}

			if (hitDCSpear -3 == 20) {
				atkDiv.innerHTML += ' <strong>SPEAR CRIT!</strong><br />';
			}
}, //end oneHandMeleeAttack


Bullywug.prototype.attackTwo = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCBite = new TwentyDice(1)['amount'] + 3;
	let dmgBite = new FourDice(1)['amount'] + 1;
	let hitDCSpear = new TwentyDice(1)['amount'] + 3;
	let dmgSpearTwo = new EightDice(1)['amount'] +1;
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/> Bite:</strong> Hit DC: ' + hitDCBite + ' Damage: ' + dmgBite + ' bludgeoning. <br /><strong>Spear:</strong> ' + hitDCSpear + ' Damage: ' + dmgSpearTwo + ' piercing';

			if (hitDCBite -3 == 20) {
				atkDiv.innerHTML += ' <strong>BITE CRIT!</strong><br />';
			}

			if (hitDCSpear -3 == 20) {
				atkDiv.innerHTML += ' <strong>SPEAR CRIT!</strong><br />';
			}
} //end twoHandMeleeAttack


var armorClass = 15;
var hp = new EightDice(2)['amount'] +2;
var speed = '20/40';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 12;
var dex = 12;
var con = 13;
var int = 7;
var wis = 10;
var cha = 7;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Stealth +3'];
var languages = ['Bullywug'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Amphibious:</strong> Can breathe air and water', '<strong>Speak with Frogs and Toads:</strong> Can communicate simple concepts to frogs and toads when it speaks in Bullywug', '<strong>Swamp Camouflage:</strong> has advantage on Dexterity (Stealth) checks made to hide in swampy terrain', '<strong>Standing Leap:</strong> Can long jump up to 20 feet and its high jump is up to 10 feet, with or without a running start'];

// == end monster notes ==

// == armaments ==

var armaments = ['Spear', 'Hide armor', 'Shield'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'bullywug');
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
	attackBtn.addEventListener('click', Bullywug.prototype.attack);

var twoAttackBtn = document.createElement('button');
	twoAttackBtn.innerHTML = '2 Hand Atk';
	twoAttackBtn.addEventListener('click', Bullywug.prototype.attackTwo);

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

div.innerHTML = '<h3>Bullywug</h3>';
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
div.appendChild(twoAttackBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Bullywug
