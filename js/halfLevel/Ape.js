Ape = function() {

Ape.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	let hitOne = new TwentyDice(1)['amount'] + 5;
	let hitTwo = new TwentyDice(1)['amount'] + 5;
	let dmgOne = new SixDice(1)['amount'] + 3;
	let dmgTwo = new SixDice(1)['amount'] + 3;

		atkDiv.innerHTML = '<strong>Multiattack: <br /></strong>';

				atkDiv.innerHTML += '<strong>Attack 1' + ':</strong> Fist. Hit DC: ' + hitOne + ' Damage: ' + dmgOne + ' bludgeoning.';
					
					if (hitOne - 5 == 20) {
						atkDiv.innerHTML += '<strong> CRIT! </strong>';
						}
							atkDiv.innerHTML += '<br/>';

				atkDiv.innerHTML += '<strong>Attack 2' + ':</strong> Fist. Hit DC: ' + hitTwo + ' Damage: ' + dmgTwo + ' bludgeoning.';
					
					if (hitTwo - 5 == 20) {
						atkDiv.innerHTML += '<strong> CRIT! </strong>';
						}
							atkDiv.innerHTML += '<br/>';

}, //end oneHandMeleeAttack

Ape.prototype.range = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	let hitRng = new TwentyDice(1)['amount'] + 5;
	let dmgRng = new SixDice(1)['amount'] + 3;

		atkDiv.innerHTML = 'Attack: Thrown Rock. Hit DC: ' + hitRng + ' Damage: ' + dmgRng + ' bludgeoning';

			if (hitRng - 5 == 20) {
				atkDiv.innerHTML += '<strong>CRIT! </strong>';
			}
}

var armorClass = 12;
var hp = new EightDice(3)['amount'] + 6;
var speed = '30/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 16;
var dex = 14;
var con = 14;
var int = 6;
var wis = 12;
var cha = 7;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 13', 'Athletics +5', 'Perception +3'];
var languages = ['None'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = [];

// == end monster notes ==

// == armaments ==

var armaments = ['Fist', 'Rocks'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'ape');
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
	attackBtn.addEventListener('click', Ape.prototype.attack);

var rngBtn = document.createElement('button');
	rngBtn.innerHTML = 'Range Atk';
	rngBtn.addEventListener('click', Ape.prototype.range);

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

div.innerHTML = '<h3>Ape</h3>';
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
div.appendChild(rngBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Ape
