Monodrone = function() {

Monodrone.prototype.attack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

		var rnd = Math.round(Math.random()*1);

		switch (rnd) {
			case 0:
				let hitDC = new TwentyDice(1)['amount'] + 3;
				let dmg = new FourDice(1)['amount'] +1;
					atkDiv.innerHTML = 'Attack: Dagger. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing';

					if (hitDC -3 == 20) {
						atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
					}//End if dagger

				break;

			case 1: 
				let hitDC2 = new TwentyDice(1)['amount']+3;
				let dmg2 = new SixDice(1)['amount'];
					atkDiv.innerHTML = 'Attack: Javelin. Hid DC: ' + hitDC2 + ' Damage: ' + dmg2 + ' piercing';

					if (hitDC2 -3 == 20) {
						atkDiv.innerHTML += '<strong>CRIT!</strong><br />';
					}

		} //end switch
}, //end oneHandMeleeAttack

Monodrone.prototype.rangeAttack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitDC = new TwentyDice(1)['amount'] + 2;
			let dmg = new SixDice(1)['amount'];
				atkDiv.innerHTML = 'Attack: Javelin throw. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. Range 30/120';

			if (hitDC -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}// end range attack

var armorClass = 15;
var hp = new EightDice(1)['amount'] +1;
var speed = '13/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 13;
var con = 12;
var int = 4;
var wis = 10;
var cha = 5;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'truesight 120ft'];
var languages = ['Modron'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Axiomatic Mind:</strong> can´t be compelled to act in a manner contrary to its nature or its instructions.' , '<strong>Disintegration:</strong> body disintegrates into dust upon death.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Dagger', 'Javelin'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'monodrone');
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
	attackBtn.addEventListener('click', Monodrone.prototype.attack);

var rangeAtkBtn = document.createElement('button');
	rangeAtkBtn.innerHTML = 'Range Atk';
	rangeAtkBtn.addEventListener('click', Monodrone.prototype.rangeAttack);

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

div.innerHTML = '<h3>Monodrone</h3>';
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
div.appendChild(rangeAtkBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Monodrone
