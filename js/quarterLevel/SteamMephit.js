SteamMephit = function() {
	var breathRng = 6;
	
SteamMephit.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];

	if (breathRng == 6) {
		let breathDmg = new EightDice(1)['amount'];
		atkDiv.innerHTML = 'Exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw or take ' + breathDmg + ' fire damage';
	}
	else {
	let hitDC = new TwentyDice(1)['amount'] + 2;
	let dmg = new FourDice(1)['amount'];
	let fireDmg = new FourDice(1)['amount'];
		
		atkDiv.innerHTML = 'Attack: Claws. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' slashing and ' + fireDmg + ' fire damage.';

			if (hitDC -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}

	} // end else

	breathRng = Math.ceil(Math.random()*6);
	
}//end attack

var armorClass = 10;
var hp = new SixDice(6)['amount'];
var speed = '30/30';

// == end stuff when hit or run ==

// == moster attributes ==

var str = 5;
var dex = 11;
var con = 10;
var int = 11;
var wis = 10;
var cha = 12;
var initMod = 0;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Darkvision 60ft', 'Perception +2', 'Stealth +4'];
var languages = ['Auran', 'Ignan'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Damage Immunities:</strong> Fire, Poison', '<strong>Condition Immunities:</strong> Poisoned', '<strong>Death Burst:</strong> When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 1D8 fire damage.', '<strong>Innate Spellcasting (1/Day):</strong> can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.'];

// == end monster notes ==

// == armaments ==

var armaments = ['Claws'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'steamMephit');
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
	attackBtn.addEventListener('click', SteamMephit.prototype.attack);

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

div.innerHTML = '<h3>Steam Mephit</h3>';
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

} // end SteamMephit
