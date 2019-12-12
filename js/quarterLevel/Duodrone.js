Duodrone = function() {

Duodrone.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCSpearOne = new TwentyDice(1)['amount'] + 3;
	let dmgSpearOne = new SixDice(1)['amount'] + 1;
	let hitDCSpearTwo = new TwentyDice(1)['amount'] + 3;
	let dmgSpearTwo = new SixDice(1)['amount'] +1;
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/>Spear:</strong> Hit DC: ' + hitDCSpearOne + ' Damage: ' + dmgSpearOne + ' piercing. <br /><strong>Spear:</strong> Hit DC: ' + hitDCSpearTwo + ' Damage: ' + dmgSpearTwo + ' piercing</br>';

			if (hitDCSpearOne -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT! Attack 1 </strong><br />';
			}

			if (hitDCSpearTwo -3 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT! Attack 2 </strong><br />';
			}
}, //end oneHandMeleeAttack


Duodrone.prototype.fist = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCFistOne = new TwentyDice(1)['amount'] + 2;
	let dmgFistOne = new FourDice(1)['amount'];
	let hitDCFistTwo = new TwentyDice(1)['amount'] + 2;
	let dmgFistTwo = new FourDice(1)['amount'];
		
		atkDiv.innerHTML = '<strong>Multiattack:<br/>Fist:</strong> Hit DC: ' + hitDCFistOne + ' Damage: ' + dmgFistOne + ' bludgeoning. <br /><strong>Fist:</strong> Hit DC: ' + hitDCFistTwo + ' Damage: ' + dmgFistTwo + ' bludgeoning</br>';

			if (hitDCFistOne -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT! Attack 1 </strong><br />';
			}

			if (hitDCFistTwo -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT! Attack 2 </strong><br />';
			}
}, //end fist

Duodrone.prototype.range = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDCOne = new TwentyDice(1)['amount'] + 3;
	let hitDCTwo = new TwentyDice(1)['amount'] + 3;
	let dmgOne = new SixDice(1)['amount'] + 1;
	let dmgTwo = new SixDice(1)['amount'] + 1;

		atkDiv.innerHTML = '<strong>Multiattack:</br>Javelin:</strong> Hit DC: ' + hitDCOne + ' Damage: ' + dmgOne + ' piercing (Range: 30/120).</br><strong>Javelin:</strong> Hit DC: ' + hitDCTwo + ' Damage: ' + dmgTwo + ' piercing (Range: 30/120).</br>';

			if (hitDCOne - 3 == 20) {
				atkDiv.innerHTML += '<strong>CRIT! Attack 1 </strong>';
			}

			if (hitDCTwo - 3 == 20) {
				atkDiv.innerHTML += '<strong>CRIT! Attack 2 </strong>';
			}

} //end range


var armorClass = 15;
var hp = new EightDice(2)['amount'] +2;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 11;
var dex = 13;
var con = 12;
var int = 6;
var wis = 10;
var cha = 7;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Truesight 120ft'];
var languages = ['Modron'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Axiomatic Mind:</strong> Can´t be compelled to act in a manner contrary to its nature or instructions', '<strong>Disintegration:</strong> Upon death turns into a pile of dust leaving weapons and other equipment behind'];

// == end monster notes ==

// == armaments ==

var armaments = ['javelin'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'duodrone');
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
	attackBtn.innerHTML = 'Wpn Atk';
	attackBtn.addEventListener('click', Duodrone.prototype.attack);

var fistBtn = document.createElement('button');
	fistBtn.innerHTML = 'Fist Atk';
	fistBtn.addEventListener('click', Duodrone.prototype.fist);

var rangeBtn = document.createElement('button');
	rangeBtn.innerHTML = 'range Atk';
	rangeBtn.addEventListener('click', Duodrone.prototype.range);

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

div.innerHTML = '<h3>Duodrone</h3>';
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
div.appendChild(fistBtn);
div.appendChild(rangeBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Duodrone
