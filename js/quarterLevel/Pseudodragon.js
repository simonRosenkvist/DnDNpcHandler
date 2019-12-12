Pseudodragon = function() {

Pseudodragon.prototype.attack = function() {

	var field = this.parentNode;
	var atkDiv = field.getElementsByClassName('atkDiv')[0];
	var hitDC;
	var dmg;

		var rng = Math.round(Math.random()*1);

			switch(rng) {

				case 0:

					hitDC = new TwentyDice(1)['amount'] + 4;
					dmg = new FourDice(1)['amount'] + 2;

					atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. <br />';

						if (hitDC - 4 == 20) {
							atkDiv.innerHTML += '<strong>CRIT!</strong>';
						}

							break;

				case 1:

					hitDC = new TwentyDice(1)['amount'] + 4;
					dmg = new FourDice(1)['amount'] + 2;

					atkDiv.innerHTML = 'Attack: Sting. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. <br /><i>See Poison</i><br />';
						
						if (hitDC - 4 == 20) {
							atkDiv.innerHTML += '<strong>CRIT!</strong>';
						}
							break;

			} // end switch case
	
} //end oneHandMeleeAttack

var armorClass = 13;
var hp = new FourDice(2)['amount'] +2;
var speed = '15/60';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 6;
var dex = 15;
var con = 13;
var int = 10;
var wis = 12;
var cha = 10;
var initMod = 2;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 13', ' Perception +3', 'Stealth +4', 'Blindsight 10ft', 'Darkvision 60ft'];
var languages = ['Understands: Common', 'Understands: Draconic'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Poison:</strong> After hitting with a sting attack,  the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.','<strong>Keen Senses:</strong> has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.', '<strong>Magic Resistance:</strong> has advantage on saving throws against spells and other magical effects.', '<strong>Limited Telepathy:</strong> can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth', 'Stinger'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'pseudodragon');
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
	attackBtn.addEventListener('click', Pseudodragon.prototype.attack);

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

div.innerHTML = '<h3>Pseudodragon</h3>';
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

} // end Pseudodragon
