Flumph = function() {

Flumph.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 4;
	let dmg = new FourDice(1)['amount'];
	let acidDmg = new FourDice(1)['amount'];
		
		atkDiv.innerHTML = 'Attack: Tendrils. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing, ' + acidDmg + ' acid';

			if (hitDC -4 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
} //end oneHandMeleeAttack

var armorClass = 12;
var hp = new SixDice(2)['amount'];
var speed = '5/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 6;
var dex = 15;
var con = 10;
var int = 14;
var wis = 14;
var cha = 11;
var initMod = 2;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Darkvision 60ft', 'Passive perception 9', 'Arcana +4', 'History +4', 'Religion +4'];
var languages = ['Understands undercommon, telepathy 60ft'];
var exp = '25 exp';
var challengeRating = '1/8';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Damage vulnerabilities:</strong> Psychic', '<strong>No hands:</strong> unable to wield weapons or shields', '<strong>Telepathic Shroud:</strong> immune to effects that sense emotions, read thoughts and divination spells'];

// == end monster notes ==

// == armaments ==

var armaments = ['Tendrils'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'flumph');
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
	attackBtn.addEventListener('click', Flumph.prototype.attack);

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

div.innerHTML = '<h3>Flumph</h3>';
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

} // end Flumph
