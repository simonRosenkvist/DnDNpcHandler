Troglodyte = function() {

Troglodyte.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	let clawHitOne = new TwentyDice(1)['amount'] + 4;
	let clawHitTwo = new TwentyDice(1)['amount'] + 4;
	let biteHit = new TwentyDice(1)['amount'] +4;
	let clawDmgOne = new FourDice(1)['amount'] + 2;
	let clawDmgTwo = new FourDice(1)['amount'] + 2;
	let biteDmg = new FourDice(1)['amount'] +2;

		atkDiv.innerHTML = '<strong>Multiattack: <br /></strong>';

				atkDiv.innerHTML += '<strong>Attack 1' + ':</strong> Claw. Hit DC: ' + clawHitOne + ' Damage: ' + clawDmgOne + ' slashing.';
					
					if (clawHitOne - 4 == 20) {
						atkDiv.innerHTML += '<strong> CRIT!</strong>';
						}
							atkDiv.innerHTML += '<br/>';

				atkDiv.innerHTML += '<strong>Attack 2' + ':</strong> Claw. Hit DC: ' + clawHitTwo + ' Damage: ' + clawDmgTwo + ' slashing.';
					
					if (clawHitTwo - 4 == 20) {
						atkDiv.innerHTML += '<strong> CRIT!</strong>';
						}
							atkDiv.innerHTML += '<br/>';

				atkDiv.innerHTML += '<strong>Attack 3' + ':</strong> Bite. Hit DC: ' + biteHit + ' Damage: ' + biteDmg + ' piercing.';
					
					if (clawHitTwo - 4 == 20) {
						atkDiv.innerHTML += '<strong> CRIT!</strong>';
						}
							atkDiv.innerHTML += '<br/>';
} //end oneHandMeleeAttack

var armorClass = 11;
var hp = new EightDice(2)['amount'] + 4;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 14;
var dex = 10;
var con = 14;
var int = 6;
var wis = 10;
var cha = 6;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Darkvision 60ft', 'Stealth +2'];
var languages = ['Troglodyte'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Chameleon Skin:</strong> Advantage on dex (stealth checks) made to hide', '<strong>Stench:</strong> any creature other than a troglodyte that starts its turn within 5ft of a troglodyte must pass a DC12 Con save or become poisoned until the start of the creatures next turn. On a success the target is immune to the stench of all troglodytes for one hour.', '<strong>Sunlight Sensitivity:</strong> Disadvantage on all attack rolls and wisdom (percetion checks) that rely on sight while in sunlight'];

// == end monster notes ==

// == armaments ==

var armaments = ['Claws', 'Teeth'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'troglodyte');
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
	attackBtn.addEventListener('click', Troglodyte.prototype.attack);

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

div.innerHTML = '<h3>Troglodyte</h3>';
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

} // end Troglodyte
