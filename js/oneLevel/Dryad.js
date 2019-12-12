Dryad = function() {

Dryad.prototype.attack = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
			let hitDC = new TwentyDice(1)['amount'] + 2;
			let dmg = new FourDice(1)['amount'];
				atkDiv.innerHTML = 'Attack: club. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning';

			let spellHitDC = hitDC + 4;
			let spellDmg = new EightDice(1)['amount'] + 4;
				atkDiv.innerHTML += '<br />Attack club (with Shillelagh active). Hit DC: ' + spellHitDC + ' Damage: ' + spellDmg + ' bludgeoning';
			
			if (hitDC -2 == 20) {
				atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
			}
} //end oneHandMeleeAttack

Dryad.prototype.castSpell = function() {
	let field = this.parentNode;
	let atkDiv = field.getElementsByClassName('atkDiv')[0];
		atkDiv.innerHTML = 'Spell DC: 14. <br/> At Will: druidcraft <br/> 3/day each: Entangle, goodberry <br/> 1/day each: barskin, pass without trace, shillelagh';

} // end spell attack

var armorClass = 11;
var hp = new EightDice(5)['amount'];
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 10;
var dex = 12;
var con = 11;
var int = 14;
var wis = 15;
var cha = 18;
var initMod = 1;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Darkvision 60ft', 'Passive perception 14', 'Perception +4', 'Stealth +5'];
var languages = ['Elvish', 'Sylvan'];
var exp = '200 exp';
var challengeRating = '1';

// == end monster traits ==

// == monster notes ==

var notes = ['<strong>Fey charm:</strong> DC 14 wisdom range 30ft, on fail target is charmed for up to 24h. May take the save again upon target taking damage. Charm ends if dryad is dead, on another plane, chooses to end it (bonus action). Can affect a maximum of one humanoid and three beasts at a time', 'Innate Spellcasting: Spell DC 14. No focus/material required', '<strong>Magic Resistance:</strong> Advantage on saving throws against spells and magic effects', '<strong>Speak with beasts and plants:</strong> The dryad can communicate with Beasts and Plants as if they shared a language.', '<strong>Tree stride:</strong> May use 10ft of movement to step into a tree and out of another one within 60ft, (trees must be large or bigger)'];

// == end monster notes ==

// == armaments ==

var armaments = ['club'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'dryad');
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
	attackBtn.addEventListener('click', Dryad.prototype.attack);

var spellBtn = document.createElement('button');
	spellBtn.innerHTML = 'View Spell';
	spellBtn.addEventListener('click', Dryad.prototype.castSpell);

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

div.innerHTML = '<h3>Dryad</h3>';
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
div.appendChild(spellBtn);
div.appendChild(atkDiv);

div.appendChild(info);

var list = document.getElementById('monsterList');
	list.appendChild(div);

} // end Dryad
