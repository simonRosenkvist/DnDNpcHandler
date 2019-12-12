Pixie = function() {

Pixie.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	
	atkDiv.innerHTML = '<strong>DC 12<br /> At will:</strong> <i> Druidcraft</i><br/> <strong>1/Day each:</strong> <i>Confusion, dancing lights, detect evil and good, detect thoughts, dispel magic, entangle, phantasmal force, polymorph, sleep</i>';
} //end oneHandMeleeAttack

var armorClass = 15;
var hp = new FourDice(1)['amount'] -1;
	if (hp < 1) {
		hp = 1;
	}
var speed = '10/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 2;
var dex = 20;
var con = 8;
var int = 10;
var wis = 14;
var cha = 15;
var initMod = 5;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 14', 'Perception +4', 'Stealth +7'];
var languages = ['Sylvan'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Magical Faerie Folk:</strong> Rarely appears unless it wants to due to invisibility. When in material plane causes flowers to sparkle with summer dew or color the leaves of autumn trees in spectacular colors, (and other pixie related beautification when applicable)', '<strong>Pixie Dust:</strong> Is said to confuse or provide the power of flight and is released in the wake of a pixie when it flies. Only a pixie can use this dust to it´s full potential.', '<strong>Tiny Trixter:</strong> Pixies are interested by visitors but often to shy to show themselves and tend to play tricks on whomever piqued it´s interest, these takes the form of minor illusions and harmless pranks such as tying someone´s shoes together', '<strong>Magic Resistance:</strong> Advantage on saving throws against spells and other magical effects.'];

// == end monster notes ==

// == armaments ==

var armaments = [''];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'pixie');
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
	attackBtn.innerHTML = 'Spells';
	attackBtn.addEventListener('click', Pixie.prototype.attack);

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

div.innerHTML = '<h3>Pixie</h3>';
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

} // end Pixie
