GrayOoze = function() {

GrayOoze.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] +3;
	let dmg = new SixDice(1)['amount'] +1;
	let acidDmg = new SixDice(2)['amount'];
	let other = '<p class="desc"><i>Nonmagical metal armor loses 1 AC if hit, (if armour reaches AC of 10 it is destroyed).</i></p>';

		atkDiv.innerHTML = 'Attack: Pseudopod. DC: ' + hitDC + ' Damage: ' + dmg + ' Bludgeoning, ' + acidDmg + ' acid, <br/>' + other;

} //end Attack

var armorClass = 8;
var hp = new EightDice(3)['amount'] +9;
var speed = '10';

// == moster attributes ==

var str = 12;
var dex = 6;
var con = 16;
var int = 1;
var wis = 6;
var cha = 2;
var initMod = -2;
var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['Blindsight 60ft (blind beyond)', 'Passive perception 8', 'Climb 10', 'Stealth +2', 'immune to: blind, charm, deaf, exhaustion, frightened, prone'];
var languages = ['None'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Amorphus:</strong> move through space as narrow as 1 inch wide.', '<strong>Corrode Metal:</strong> Nonmagical weapon suffer -1 damage after each hit, when at -5 weapon is destroyed. nonmagical ammunition is destroyed on hit. Can eat through metal 2inch/round.', '<strong>False Appearance:</strong> looks like an oil slick while motionless'];

// == end monster notes ==

// == armaments ==

var armaments = ['Pseudopod'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'grayOoze');
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

var atkBtn = document.createElement('button');
	atkBtn.innerHTML = 'Attack';
	atkBtn.addEventListener('click', GrayOoze.prototype.attack);

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

div.innerHTML = '<h3>Gray Ooze</h3>';
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

div.appendChild(atkBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end GrayOoze
