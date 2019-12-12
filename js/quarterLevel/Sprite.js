Sprite = function() {

Sprite.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 2;
			let dmgMelee = 1;
				atkDiv.innerHTML = 'Attack: Shortsword. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' slashing<br />';


		if (hitMelee - 2 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
}, //end oneHandMeleeAttack

Sprite.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 6;
	let rangeDmg = 1;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: Shortbow. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing. Range (40/160) <br /><i>See Poison</i><br />';

		if (rangeHit - 6 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 15;
var hp = new FourDice(1)['amount'];
var speed = '10/40';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 3;
var dex = 18;
var con = 10;
var int = 14;
var wis = 13;
var cha = 11;
var initMod = 4;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 13', 'Perception +3', 'Stealth +8'];
var languages = ['Common', 'Elvish', 'Sylvan'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Poison:</strong> after hit by a arrow, the target must succeed on a dc 10 constitution saving throw or become poisoned for 1 minute If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.', '<strong>Heart Sight:</strong> The sprite touches a creature and magically knows the creature´, s current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature´s alignment. Celestials, fiends, and undead automatically fail the saving throw.', '<strong>Invisibility:</strong>  The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Shortbow', 'Longsword'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'sprite');
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
	atkOneBtn.addEventListener('click', Sprite.prototype.oneHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Sprite.prototype.rangeAttack);

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

div.innerHTML = '<h3>Sprite</h3>';
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

} // end Sprite
