DarkMantle = function() {

DarkMantle.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] +5;
	let dmg = new SixDice(1)['amount'] +3;
	let other = '<p class="desc"><i>Darkmantle attaches to the target If target is Medium or smaller gains advantage on attack rolls. Attaches by engulfing targets head. Target is blinded and cant breathe. Dark mantle can only attack the target. DC 13 Strength check to detatch the darkmantle. the darkmantle can detach cost: 5 feet of movement.</i></p>';

		atkDiv.innerHTML = 'Attack: Crush. DC: ' + hitDC + ' Damage: ' + dmg + ' Bludgeoning <br/>' + other;

} //end Attack

var armorClass = 11;
var hp = new SixDice(5)['amount'] +5;
var speed = '10/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 16;
var dex = 12;
var con = 13;
var int = 2;
var wis = 10;
var cha = 5;
var initMod = 1;
var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Blindsight 60ft', 'Passive perception 10', 'Stealth +3', 'Darkness Aura (1/day): A 15-foot radius of magical darkness, moves with the dark mantle, and spreads around corners. Concentration, up to 10 minute, Dark vision and natural light cant see through and cancels spells rank 2 or lower'];
var languages = ['None'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Echolocation:</strong> No blindsight while deaf', '<strong>False appearance:</strong> while motionless, looks like a stalactite/stalagmite'];

// == end monster notes ==

// == armaments ==

var armaments = ['tentacles', 'teeth'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'darkMantle');
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
	atkBtn.addEventListener('click', DarkMantle.prototype.attack);

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

div.innerHTML = '<h3>Dark Mantle</h3>';
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

} // end DarkMantle
