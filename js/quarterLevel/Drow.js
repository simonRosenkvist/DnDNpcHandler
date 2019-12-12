Drow = function() {

Drow.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 4;
			let dmgMelee = new SixDice(1)['amount'] + 2;
				atkDiv.innerHTML = 'Attack: Shortsword. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' slashing';


		if (hitMelee - 4 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
}, //end oneHandMeleeAttack

Drow.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 4;
	let rangeDmg = new SixDice(1)['amount'] + 2;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: hand Crossbow shot. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing. Range (30/120) <br /><i>Read Poison. DC 13 Constitution saving throw or be poisoned for 1 hour</i>';

		if (rangeHit - 4 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
}, // end range attack

Drow.prototype.spell = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = '<strong>At will:</strong> Dancing lights <br/> <strong>1/day each:</strong> Darkness, Faerie fire';
}

// == stuff when hit or run ==

var armorClass = 15;
var hp = new EightDice(3)['amount'];
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 14;
var con = 10;
var int = 11;
var wis = 11;
var cha = 12;
var initMod = 2;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 12', 'Darkvision 120ft', 'Perception +2', 'Stealth +4'];
var languages = ['Elvish', 'Undercommon'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Poison:</strong> Target of hand crossbow hit must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.', '<strong>Fey Ancestry:</strong> Has advantage on saving throws against being charmed. Magic can’t put the drow to sleep.', '<strong>Innate Spellcasting:</strong> Charisma (spell save DC 11).', '<strong>Sunlight Sensitivity:</strong> While in sunlight, has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Chain shirt', 'Hand crossbow, (range 30/120)', 'Shortsword'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'drow');
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
	atkOneBtn.addEventListener('click', Drow.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Drow.prototype.rangeAttack);

var spellBtn = document.createElement('button');
	spellBtn.innerHTML = 'spell';
	spellBtn.addEventListener('click', Drow.prototype.spell);

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

div.innerHTML = '<h3>Drow</h3>';
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
div.appendChild(spellBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Drow
