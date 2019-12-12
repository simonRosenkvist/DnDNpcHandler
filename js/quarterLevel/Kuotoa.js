Kuotoa = function() {

Kuotoa.prototype.oneHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 3;
			let dmgMelee = new SixDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: Spear. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' piercing</br>';


		if (hitMelee - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
}, //end oneHandMeleeAttack


Kuotoa.prototype.bite = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 3;
			let dmgMelee = new FourDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' piercing</br>';


		if (hitMelee - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
},//end bite

Kuotoa.prototype.twoHandMeleeAttack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 3;
			let dmgMelee = new EightDice(1)['amount'] + 1;
				atkDiv.innerHTML = 'Attack: Spear. Hit DC: ' + hitMelee + ' Damage: ' + dmgMelee + ' piercing</br>';


		if (hitMelee - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
},//end 2handed melee attack

Kuotoa.prototype.rangeNet = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitMelee = new TwentyDice(1)['amount'] + 3;
				atkDiv.innerHTML = 'Attack: Net. Hit DC: ' + hitMelee + ' On hit target is restrained, DC 10 str to free self or other. Net also breaks after 5 points of damage. (range 5/15, only works on large or smaller)</br>';


		if (hitMelee - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
},//End Net

Kuotoa.prototype.rangeSpear = function() {
	let rangeHit = new TwentyDice(1)['amount'] + 3;
	let rangeDmg = new SixDice(1)['amount'] + 1;
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Attack: Spear throw. Hit DC: ' + rangeHit + ' Damage: ' + rangeDmg + ' piercing. (range 20/60) <br />';

		if (rangeHit - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit!</strong>';
		}
} // end range attack

// == stuff when hit or run ==

var armorClass = 13;
var hp = new EightDice(4)['amount'];
var speed = '30/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 13;
var dex = 10;
var con = 11;
var int = 11;
var wis = 10;
var cha = 8;
var initMod = 0;

// == end moster attributes ==

var stats = new Stats(str, dex, con, int, wis, cha);

// == monster traits == 

var senses = ['passive perception 14', 'Perception +4', 'Darkvision 120ft'];
var languages = ['Undercommon'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Amphibious:</strong> can breath air and water', '<strong>Otherworldly perception:</strong> Can sense any other creature within 30ft even if invisible or on the ethereal plane, can even pin point such a creature that is moving', '<strong>Slippery:</strong> has advantage on checks and saving throws made to escape a grapple', '<strong>Sunlight sensitivity:</strong> in sunlight has disadvantage on attack and wisdom (perception) checks that rely on sight', '<strong>Reaction: Sticky Shield:</strong> When a creature misses with a melee weapon attack uses this reaction to catch the weapon. Attacker must pass a DC 11 str check or the weapon is stuck to the shield. If wielder wont let go is grappled while weapon is stuck. May pull free as an action at DC 11 str'];

// == end monster notes ==

// == armaments ==

var armaments = ['Spear,', 'Shield', 'Net'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'kuotoa');
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
	atkOneBtn.addEventListener('click', Kuotoa.prototype.oneHandMeleeAttack);

var atkTwoBtn = document.createElement('button');
	atkTwoBtn.innerHTML = 'Atk 2 hand';
	atkTwoBtn.addEventListener('click', Kuotoa.prototype.twoHandMeleeAttack);

var atkBiteBtn = document.createElement('button');
	atkBiteBtn.innerHTML = 'Atk Bite';
	atkBiteBtn.addEventListener('click', Kuotoa.prototype.bite);

var atkRngBtn = document.createElement('button');
	atkRngBtn.innerHTML = 'Range Atk';
	atkRngBtn.addEventListener('click', Kuotoa.prototype.rangeSpear);

var rangeNetBtn = document.createElement('button');
	rangeNetBtn.innerHTML = 'Range Net';
	rangeNetBtn.addEventListener('click', Kuotoa.prototype.rangeNet);

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

div.innerHTML = '<h3>Kuo-Toa</h3>';
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
div.appendChild(atkBiteBtn);
div.appendChild(atkRngBtn);
div.appendChild(rangeNetBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Kuotoa
