SwarmOfRats = function() {

var armorClass = 10;
var hp = new EightDice(7)['amount'] -7;	
var fullHp = hp;
var speed = 30;
	if (hp < 1) {
		hp = 1;
	}

SwarmOfRats.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 2;
	let currentHp = field.getElementsByClassName('hpInput')[0].value;
	let dmg;
	
		if (currentHp > fullHp/2) {
	 	dmg = new SixDice(2)['amount'];
		} 

		else {
			dmg = new SixDice(1)['amount'];
		}
		
		atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. <br />';

			if (hitDC -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
} //end oneHandMeleeAttack


// == end stuff when hit or run ==

// == moster attributes ==

var str = 9;
var dex = 11;
var con = 9;
var int = 2;
var wis = 10;
var cha = 3;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Darksight 30ft'];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Damage Resistances:</strong> Bludgeoning, Piercing, Slashing', '<strong>Condition Immunities:</strong> Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned', '<strong>Keen Smell:</strong> Hhas advantage on Wisdom (Perception) checks that rely on smell.', '<strong>Swarm:</strong> Can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. Can’t regain hit points or gain temporary hit points.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'swarmOfRats');
var armorClassInput = document.createElement('input');
var acSpan = document.createElement('span');

var xBtn = document.createElement('span');
	xBtn.setAttribute('class', 'delete');

var hpInput = document.createElement('input');
	hpInput.setAttribute('class', 'hpInput');
var hpSpan = document.createElement('span');

var speedInput = document.createElement('input');
var speedSpan = document.createElement('span');

var initiativeInput = document.createElement('input');
var initSpan = document.createElement('span');

var hitstatsDiv = document.createElement('div');
	hitstatsDiv.setAttribute('class', 'hitstatsDiv');

var attackBtn = document.createElement('button');
	attackBtn.innerHTML = 'Attack';
	attackBtn.addEventListener('click', SwarmOfRats.prototype.attack);

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

div.innerHTML = '<h3>Swarm of Rats</h3>';
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

} // end SwarmOfRats
