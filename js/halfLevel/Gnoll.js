Gnoll = function() {

Gnoll.prototype.oneHandMeleeAttack = function() {

	let rnd = Math.ceil(Math.random() * 2);
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	switch (rnd) {
		case 1:
			let hitSpearOneHand = new TwentyDice(1)['amount'] + 4;
			let dmgSpearOneHand = new SixDice(1)['amount'] + 2;
				atkDiv.innerHTML = 'Attack: One handed spear thrust Hit DC: ' + hitSpearOneHand + ' Damage: ' + dmgSpearOneHand + ' piercing';
					break;

		case 2:
			let hitBite = new TwentyDice(1)['amount'] + 4;
			let dmgBite = new FourDice(1)['amount'] + 2;
				atkDiv.innerHTML= 'Attack: Bite Hit DC: ' + hitBite + ' Damage: ' + dmgBite;
					break;
	} //end switch 

} //end oneHandMeleeAttack

Gnoll.prototype.twoHandMeleeAttack = function() {
	let rnd = Math.ceil(Math.random() * 2);
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	switch(rnd) {
		case 1:
			let hitSpearTwoHand = new TwentyDice(1)['amount'] + 4;
			let dmgSpearTwoHand = new EightDice(1)['amount'] + 2;
				atkDiv.innerHTML = 'Attack: Two handed spear thrust. Hit DC: ' + hitSpearTwoHand + ' Damage: ' + dmgSpearTwoHand + ' piercing';
					break;

		case 2:
			let hitBite = new TwentyDice(1)['amount'] + 4;
			let biteDmg = new FourDice(1)['amount'] + 2;
				atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitBite + ' Damage: ' + biteDmg + ' piercing';
					break;
	}// end switch case

} //end two handed melee attack

Gnoll.prototype.rangeAttack = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 3;
	let rangeDmg = new EightDice(1)['amount'] + 1;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: longbow shot. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing';
} // end range attack

// == stuff when hit or run ==

var armorClass = 15;
var hp = new EightDice(5)['amount'];
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 14;
var dex = 12;
var con = 11;
var int = 6;
var wis = 10;
var cha = 7;
var initMod = 1;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['darkvision 60ft', 'passive perception 10'];
var languages = ['Gnoll'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Rampage:</strong> When this monster reduces a creature to zero hp on its turn with a melee attack, it may take a bonus action to move half speed and make a bite attack'];

// == end monster notes ==

// == armaments ==

var armaments = ['hide armor', 'shield', 'spear, (reach), (piercing)', 'longbow, (range 150/600), (piercing)'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'gnoll');
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
	atkOneBtn.addEventListener('click', Gnoll.prototype.oneHandMeleeAttack);

var atkTwoBtn = document.createElement('button');
	atkTwoBtn.innerHTML= 'Atk 2 hand';
	atkTwoBtn.addEventListener('click', Gnoll.prototype.twoHandMeleeAttack);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Atk Range';
	atkRngBtn.addEventListener('click', Gnoll.prototype.rangeAttack);

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

div.innerHTML = '<h3>Gnoll</h3>';
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

} // end gnoll
