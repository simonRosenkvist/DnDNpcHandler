PoisonousSnake = function() {

PoisonousSnake.prototype.attack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitDC = new TwentyDice(1)['amount'] + 5;
			let poisonDmg = new FourDice(2)['amount'];
				atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitDC + ' Damage: 1 piercing, <br /><i>DC 10 con-test </i>' + poisonDmg + ' poison damgae on fail or ' + Math.round(poisonDmg/2) + ' on success. <br/>';

			if (hitDC -5 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
} //end oneHandMeleeAttack

var armorClass = 13;
var hp = new FourDice(1)['amount'];
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 2;
var dex = 16;
var con = 11;
var int = 1;
var wis = 10;
var cha = 3;
var initMod = 3;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Blindsight 10ft'];
var languages = ['None'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Reaction: Parry</strong> adds 2 to its AC against one melee attack that would hit it. Must hold a melee weapon and see opponent to use.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Breastplate', 'Rapier'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'poisonousSnake');
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
	attackBtn.addEventListener('click', PoisonousSnake.prototype.attack);

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

div.innerHTML = '<h3>Poisonous Snake</h3>';
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

} // end PoisonousSnake
