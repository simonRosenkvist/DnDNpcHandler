Hobgoblin = function() {

Hobgoblin.prototype.oneHandMeleeAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitDC = new TwentyDice(1)['amount'] + 3;
			let dmg = new EightDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: Longsword. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' slashing';

} //end oneHandMeleeAttack

Hobgoblin.prototype.twoHandMeleeAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

			let hitDC = new TwentyDice(1)['amount'] + 3;
			let dmg = new TenDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: Longsword. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' slashing';

} //end two handed melee attack

Hobgoblin.prototype.rangeAttack = function() {
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new EightDice(1)['amount'] + 1;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: longbow shot. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing';
} // end range attack

var armorClass = 18;
var hp = new EightDice(2)['amount'] +2;
var speed = 30;

// == moster attributes ==

var str = 13;
var dex = 12;
var con = 12;
var int = 10;
var wis = 10;
var cha = 9;
var initMod = 1;
var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Darkvision 60ft', 'Passive perception 10'];
var languages = ['Common', 'Goblin'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Martial Advantage:</strong> Once per turn may deal extra 2D6 damage to a creature if that creature is within 5ft of another hobgoblin ally that is not incapacitated'];

// == end monster notes ==

// == armaments ==

var armaments = ['chain mail', 'shield', 'longsword', 'longbow, (range 150/600), (piercing)'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'hobgoblin');
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
	atkOneBtn.addEventListener('click', Hobgoblin.prototype.oneHandMeleeAttack);

var atkTwoBtn = document.createElement('button');
	atkTwoBtn.innerHTML= 'Atk 2 hand';
	atkTwoBtn.addEventListener('click', Hobgoblin.prototype.twoHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Hobgoblin.prototype.rangeAttack);

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

div.innerHTML = '<h3>Hobgoblin</h3>';
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
div.appendChild(atkTwoBtn);
div.appendChild(atkRngBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Hobgoblin
