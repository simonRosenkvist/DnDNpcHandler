Cockatrice = function() {

Cockatrice.prototype.attack = function() {

	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
	let hitDC = new TwentyDice(1)['amount'] + 3;
	let dmg = new FourDice(1)['amount'] +1;
	let other = '<p class="desc"><i>DC 11 Con save or Petrified. On fail creature is restrained. Repeat save at end of next turn. On a success, effect ends. On fail, creature is Petrified for 24h.</i></p>';

		atkDiv.innerHTML = 'Attack: Bite. DC: ' + hitDC + ' Damage: ' + dmg + '<br/>' + other;

		if (hitDC - 3 == 20) {
			atkDiv.innerHTML += '<strong> Crit! </strong>';
		}

} //end Attack

var armorClass = 11;
var hp = new SixDice(6)['amount'] +6;
var speed = '20/40';

// == moster attributes ==

var str = 6;
var dex = 12;
var con = 12;
var int = 2;
var wis = 13;
var cha = 5;
var initMod = 1;
var stats = new Stats(str, dex, con, int, wis, cha);
// == end moster attributes ==

// == monster traits == 

var senses = ['darkvision 60ft', 'passive perception 11'];
var languages = ['None'];
var exp = '100 exp';
var challengeRating = '1/2';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>None</strong>'];

// == end monster notes ==

// == armaments ==

var armaments = ['Sharp beak and claws', 'wings'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'cockatrice');
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
	atkBtn.addEventListener('click', Cockatrice.prototype.attack);

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

div.innerHTML = '<h3>Cockatrice</h3>';
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

} // end Cockatrice
