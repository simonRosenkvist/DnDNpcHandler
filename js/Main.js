/* Copyright (C) 2019 Simon Rosenkvist - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of fair use.
 *
 * Questions or comments regarding the code may be sent to: 
 * sr222qd@student.lnu.se
 */

var Main = {

	init:function() { //launches at DOM content loaded

		var searchBtn = document.getElementById('searchButton');
			searchBtn.addEventListener('click', Main.search);

		var stackOneBtn = document.getElementById('firstStackSpan'); //menu option one
			stackOneBtn.addEventListener('click', Main.stackToggle);

		var stackTwoBtn = document.getElementById('secondStackSpan'); //menu option two
			stackTwoBtn.addEventListener('click', Main.stackToggle);

		var diceBtn = document.getElementById('rollDice');
			diceBtn.addEventListener('click', Main.makeDiceBoard);

		var bookBtn = document.getElementById('book');
			bookBtn.addEventListener('click', Main.makeSpellBook);

// === underlying menus ===
		
		var eighthBtn = document.getElementById('eighth');
			eighthBtn.addEventListener('click', Main.toggleVisibility);

		var quarterBtn = document.getElementById('quarter');
			quarterBtn.addEventListener('click', Main.toggleVisibility);

		var halfBtn = document.getElementById('half');
			halfBtn.addEventListener('click', Main.toggleVisibility);

		var oneBtn = document.getElementById('one');
			oneBtn.addEventListener('click', Main.toggleVisibility);

		var stackOne = document.getElementById('firstStack');
		var stackOneList = stackOne.getElementsByTagName('li');

			for (let i = 0; i < stackOneList.length; i++) { // event listener for stack one
				var param = stackOneList[i].id;
				stackOneList[i].addEventListener('click', Main.createCard);
			} // end setting event listeners loop

	}, //end init

	toggleVisibility:function(e) {

		var btn = e.target;
			var list = btn.childElementCount;

				if (btn.children[0] != undefined && btn.children[0].className == 'hidden') {

				for (let i = 0; i < list; i++) {
					btn.children[i].removeAttribute('class');
					btn.children[i].setAttribute('class', 'active');
					}
		
						} else {

						for (let i = 0; i < list; i++) {
							btn.children[i].removeAttribute('class');
							btn.children[i].setAttribute('class', 'hidden');
							}
						}
	},//end toggle visibility

	stackToggle:function(e) {
		var id = e.target.id;
		let div;
		let stack;

		if (e.target.style.fontStyle == "") { //toggles italic font for menu
			e.target.style.fontStyle = 'italic';
		} else if (e.target.style.fontStyle = 'italic') {
			e.target.style.fontStyle = "";
		} //end toggle font style for menu

		switch (id) { //switch through stacks of levels and toggle visibility
			case 'firstStackSpan':
					div = document.getElementById('firstStack');
					stack = div.getElementsByTagName('ul');
					break;

			case 'secondStackSpan':
					div = document.getElementById('secondStack');
					stack = div.getElementsByTagName('ul');
					break;
		}

		var len = stack.length;

			for (let i = 0; i < len; i++) { //toggles visibility of underlying elements

				if (stack[i].className != 'hidden') {
					stack[i].setAttribute('class', 'hidden');
					} 
				
					else if (stack[i].className == 'hidden') {
						stack[i].removeAttribute('class', 'hidden');
						}

			} //end loop
	},//End stackToggle

	search:function() {
		var searchWord = document.getElementById('search').value;
		var find = document.getElementById(searchWord);
		var btn = document.getElementById('searchButton');

				if (find != null) {
						Main.findMonster(searchWord);
					} //end null check

					else {
						alert('No NPC found by that name');
					}//End else error

	},//End search

	createCard:function(e) { // creates new npc cards
		var name;
			name = e.target.id;

			Main.findMonster(name);
 	},

 	findMonster:function(e) {
		let monster;
 		var name = e;

			switch (name) { //switch names of monsters

				case 'aarakocra':
					monster = new Aarakocra();
					break;

				case 'acolyte':
					monster = new Acolyte();
					break;

				case 'ape':
					monster = new Ape();
					break;

				case 'axeBeak':
					monster = new AxeBeak();
					break;

				case 'bandit':
					monster = new Bandit();
					break;

				case 'blinkDog':
					monster = new BlinkDog();
					break;

				case 'bloodHawk':
					monster = new BloodHawk();
					break;

				case 'boar':
					monster = new Boar();
					break;

				case 'bullywug':
					monster = new Bullywug();
					break;

				case 'camel':
					monster = new Camel();
					break;

				case 'cockatrice':
					monster = new Cockatrice();
					break;

				case 'constrictorSnake':
					monster = new ConstrictorSnake();
					break;

				case 'darkMantle':
					monster = new DarkMantle();
					break;

				case 'draftHorse':
					monster = new DraftHorse();
					break;

				case 'dretch':
					monster = new Dretch();
					break;

				case 'drow':
					monster = new Drow();
					break;

				case 'dryad':
					monster = new Dryad();
					break;

				case 'duodrone':
					monster = new Duodrone();
					break;

				case 'elk':
					monster = new Elk();
					break;

				case 'flumph':
					monster = new Flumph();
					break;

				case 'flyingSnake':
					monster = new FlyingSnake();
					break;

				case 'flyingSword':
					monster = new FlyingSword();
					break;

				case 'giantBadger':
					monster = new GiantBadger();
					break;

				case 'giantBat':
					monster = new GiantBat();
					break;

				case 'giantCentipede':
					monster = new GiantCentipede();
					break;

				case 'giantCrab':
					monster = new GiantCrab();
					break;

				case 'giantFrog':
					monster = new GiantFrog();
					break;

				case 'giantLizard':
					monster = new GiantLizard();
					break;

				case 'giantOwl':
					monster = new GiantOwl();
					break;

				case 'giantPoisonousSnake':
					monster = new GiantPoisonousSnake();
					break;

				case 'giantRat':
					monster = new GiantRat();
					break;

				case 'giantWeasel':
					monster = new GiantWeasel();
					break;

				case 'giantWolfSpider':
					monster = new GiantWolfSpider();
					break;

				case 'gnoll':
					monster = new Gnoll();
					break;

				case 'goblin':
					monster = new Goblin();
					break;

				case 'grimlock':
					monster = new Grimlock();
					break;

				case 'guard':
					monster = new Guard();
					break;

				case 'grayOoze':
					monster = new GrayOoze();
					break;

				case 'hobgoblin':
					monster = new Hobgoblin();
					break;

				case 'kenku':
					monster = new Kenku();
					break;

				case 'kobold':
					monster = new Kobold();
					break;

				case 'kuotoa':
					monster = new Kuotoa();
					break;
					
				case 'manes':
					monster = new Manes();
					break;

				case 'mastiff':
					monster = new Mastiff();
					break;

				case 'merfolk':
					monster = new Merfolk();
					break;

				case 'monodrone':
					monster = new Monodrone();
					break;

				case 'mudMephit':
					monster = new MudMephit();
					break;

				case 'mule':
					monster = new Mule();
					break;

				case 'needleBlight':
					monster = new NeedleBlight();
					break;

				case 'noble':
					monster = new Noble();
					break;

				case 'panther':
					monster = new Panther();
					break;

				case 'pixie':
					monster = new Pixie();
					break;

				case 'poisonousSnake':
					monster = new PoisonousSnake();
					break;

				case 'pony':
					monster = new Pony();
					break;

				case 'pseudodragon':
					monster = new Pseudodragon();
					break;

				case 'pteranodon':
					monster = new Pteranodon();
					break;

				case 'ridingHorse':
					monster = new RidingHorse();
					break;

				case 'skeleton':
					monster = new Skeleton();
					break;

				case 'slaadTadpole':
					monster = new SlaadTadpole();
					break;

				case 'smokeMephit':
					monster = new SmokeMephit();
					break;

				case 'sprite':
					monster = new Sprite();
					break;

				case 'steamMephit':
					monster = new SteamMephit();
					break;

				case 'stirge':
					monster = new Stirge();
					break;

				case 'swarmOfBats':
					monster = new SwarmOfBats();
					break;

				case 'swarmOfRats':
					monster = new SwarmOfRats();
					break;

				case 'swarmOfRavens':
					monster = new SwarmOfRavens();
					break;

				case 'tribalWarrior':
					monster = new TribalWarrior();
					break;

				case 'troglodyte':
					monster = new Troglodyte();
					break;

				case 'twigBlight':
					monster = new TwigBlight();
					break;

				case 'violetFungus':
					monster = new VioletFungus();
					break;

				case 'wingedKobold':
					monster = new WingedKobold();
					break;

				case 'wolf':
					monster = new Wolf();
					break;

				case 'zombie':
					monster = new Zombie();
					break;

			}//end case

			var delBtns = document.getElementsByClassName('delete'); //creates delete button

				for (let i = 0; i < delBtns.length; i++) {
					delBtns[i].addEventListener('click', Main.deleteCard);
					}//end loop

	}, // end createCard

	deleteCard:function(e) { //removes card from npc-list
		var card = e.target.parentNode;
			card.parentNode.removeChild(card);
	}, // end deleteCard

	makeDiceBoard:function() { //creates a new dice board
		var board = new DiceBoard();
		var location = document.getElementsByTagName('body')[0];
			location.appendChild(board);
	},//end make dice board

	makeSpellBook:function() {
		var book = new Spellbook();
		var loc = document.getElementsByTagName('body')[0];
			loc.appendChild(book);
	}

}//end main

document.addEventListener('DOMContentLoaded', Main.init);