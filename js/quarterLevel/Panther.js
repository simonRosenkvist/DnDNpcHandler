Panther = function() {

Panther.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 4;
	let dmg = new SixDice(1)['amount'] + 2;
		
		atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing';

			if (hitDC -4 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
}, //end oneHandMeleeAttack

Panther.prototype.pounce = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 4;
	let dmg = new FourDice(1)['amount'] + 2;

		atkDiv.innerHTML = 'Attack: Claw. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' slashing </br><i>See pounce</i>';

		if (hitDC - 4 == 20) {
			atkDiv.innerHTML += '<strong>CRIT!</strong>';
		}
}// end pounce

var armorClass = 12;
var hp = new EightDice(3)['amount'] +2;
var speed = '50/40';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 14;
var dex = 15;
var con = 10;
var int = 3;
var wis = 14;
var cha = 7;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 14', 'Perception +4', 'Stealth +6'];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Pounce:</strong> If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw Attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite Attack against it as a Bonus Action.', '<strong>Keen Smell:</strong> has advantage on Wisdom (Perception) checks that rely on smell'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth', 'Claws'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'panther');
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
	attackBtn.addEventListener('click', Panther.prototype.attack);

var chargeBtn = document.createElement('button');
	chargeBtn.innerHTML = 'Pounce';
	chargeBtn.addEventListener('click', Panther.prototype.pounce);

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

div.innerHTML = '<h3>Panther</h3>';
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
div.appendChild(chargeBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Panther
