ConstrictorSnake = function() {

	var constricting = false;

ConstrictorSnake.prototype.attack = function() {

	var rnd = Math.round(Math.random()*1);

		var field = this.parentNode;
		var atkDiv = field.getElementsByClassName('atkDiv')[0];

			if (rnd == 0 || constricting == true) { // if bite

				let hitDC = new TwentyDice(1)['amount'] + 4;
				let dmg = new SixDice(1)['amount'] + 2;
		
					atkDiv.innerHTML = 'Attack: Bite. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' piercing. <br />';

						if (hitDC -4 == 20) {
							atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
						}
		
						} else { // else constrict

							constricting = true;

								let hitDC = new TwentyDice(1)['amount'] + 4;
								let dmg = new EightDice(1)['amount'] + 2;
		
									atkDiv.innerHTML = 'Attack: Constrict. Hit DC: ' + hitDC + ' Damage: ' + dmg + ' bludgeoning. <br /><i>target is grappled (escape DC 14). Until this grapple ends, the creature is restrained.</i><br />';

										if (hitDC -4 == 20) {
											atkDiv.innerHTML += ' <strong>CRIT!</strong><br />';
										}
						} // end constricting
} //end oneHandMeleeAttack

var armorClass = 12;
var hp = new TenDice(2)['amount'] +2;
var speed = 30;

// == end stuff when hit or run ==

// == moster attributes ==

var str = 15;
var dex = 14;
var con = 12;
var int = 1;
var wis = 10;
var cha = 3;
var initMod = 2;

var stats = new Stats(str, dex, con, int, wis, cha);

// == end moster attributes ==

// == monster traits == 

var senses = ['Passive perception 10', 'Blindsight 10ft'];
var languages = ['None'];
var exp = '50 exp';
var challengeRating = '1/4';

// == end monster traits ==

// == monster notes ==

var notes = ['None'];

// == end monster notes ==

// == armaments ==

var armaments = ['Teeth'];

// == end armaments ==

var info = new Notes(senses, languages, exp, challengeRating, notes, armaments);

var div = document.createElement('div');
	div.setAttribute('class', 'enemy');
	div.setAttribute('class', 'constrictorSnake');
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
	attackBtn.addEventListener('click', ConstrictorSnake.prototype.attack);

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

div.innerHTML = '<h3>Constrictor Snake</h3>';
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

} // end ConstrictorSnake
