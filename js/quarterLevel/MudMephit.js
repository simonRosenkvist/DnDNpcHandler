MudMephit = function() {
	
	breathRng = 6;

MudMephit.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	if (breathRng == 6) {
		atkDiv.innerHTML = 'Target must make a DC 11 Dexterity saving throw or be restrained for 1 minute. Can repeat the saving throw at end of each turn. (Medium or smaller).';
	}
	else {
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new SixDice(1)['amount'] + 1;
		
		atkDiv.innerHTML = 'Attack: Claws. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning.';

			if (hitDC -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}

	} // end else

	breathRng = Math.ceil(Math.random()*6);
	
} //end oneHandMeleeAttack

var armorClass = 11;
var hp = new SixDice(6)['amount'] +6;
var speed = '20/20';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 8;
var dex = 12;
var con = 12;
var int = 9;
var wis = 11;
var cha = 7;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'darkvision 60', 'Stealth +3'];
var languages = ['Aquan', 'Terran'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Damage Immunities:</strong> Poison', '<strong>Condition Immunities:</strong> Poisoned', '<strong>Death Burst:</strong> Upon death, explodes in a burst of sticky mud. Each Medium or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creatures next turn.', '<strong>False Appearance:</strong> While motionless, it is indistinguishable from an ordinary mound of mud.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Fists'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'mudMephit');
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
	attackBtn.addEventListener('click', MudMephit.prototype.attack);

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

div.innerHTML = '<h3>Mud Mephit</h3>';
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

} // end MudMephit
