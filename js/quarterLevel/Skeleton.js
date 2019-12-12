Skeleton = function() {
	
Skeleton.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 4;
	let dmg = new SixDice(1)['amount'] + 2;
		
		atkDiv.innerHTML = 'Attack: Shortsword. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. <br />';

			if (hitDC -4 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}, //end oneHandMeleeAttack

Skeleton.prototype.range = function() {

	field = this.parentNode;
	atkDiv = field.getElementsByClassName('atkDiv')[0];
	let rangeDC = new TwentyDice(1)['amount'] + 4;
	let rangeDmg = new SixDice(1)['amount'] + 2;
		
		atkDiv.innerHTML = 'Attack: Shortbow Shot. Hit DC: ' + rangeDC + ' Damage: ' + rangeDmg + ' piercing. (Range: 80/320ft) <br />';

			if (rangeDC -4 == 20) {
				atkDiv.innerHTML += '<strong>CRIT!</strong>';
			}
}//end range

var armorClass = 13;
var hp = new EightDice(2)['amount'] +4;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 14;
var con = 15;
var int = 6;
var wis = 8;
var cha = 5;
var initMod = 2;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 9', 'Darkvision 60ft'];
var languages = ['Understands All Languages It Spoke In Life'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Vulnerabilities:</strong> Bludgeoning', '<strong>Damage Immunities:</strong> Poison', '<strong>Condition Immunities:</strong> Exhaustion, Poisoned'];

// == end monster notes ==

// == armaments ==

var armaments = ['Shortsword', 'Shortbow', 'Armor scraps'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'skeleton');
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
	attackBtn.addEventListener('click', Skeleton.prototype.attack);

var rngBtn = document.createElement('button');
	rngBtn.innerHTML = 'Range Atk';
	rngBtn.addEventListener('click', Skeleton.prototype.range);

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

div.innerHTML = '<h3>Skeleton</h3>';
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

} // end Skeleton
