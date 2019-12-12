VioletFungus = function() {

VioletFungus.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let nrOfAtks = Math.ceil(Math.random()*4);
	let count = 1;

		atkDiv.innerHTML = '<strong>Multiattack: <br /></strong>';

		for (let i = 0; i < nrOfAtks; i++) {
			let hitDC = new TwentyDice(1)['amount'] + 2;
			let dmg = new EightDice(1)['amount'];

				atkDiv.innerHTML += '<strong>Attack ' + count + ':</strong> Rotting Touch. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' necrotic.';
				count ++;
					if (hitDC -2 == 20) {
						atkDiv.innerHTML += ' <strong>CRIT!</strong>';
					}
					atkDiv.innerHTML += '<br />';
				}
} //end oneHandMeleeAttack

var armorClass = 5;
var hp = new EightDice(4)['amount'];
var speed = 40;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 3;
var dex = 1;
var con = 10;
var int = 1;
var wis = 3;
var cha = 1;
var initMod = -5;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 6', 'Blindsight 30ft (blind beyond)', ];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Condition Immunities:</strong> Blinded, Deafened, Frightened', '<strong>False Appearance:</strong> While motionless, it is indistinguishable from an ordinary fungus.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Rotting Touch'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'violetFungus');
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
	attackBtn.addEventListener('click', VioletFungus.prototype.attack);

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

div.innerHTML = '<h3>Violet Fungus</h3>';
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

} // end VioletFungus
