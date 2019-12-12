Spellbook = function() {

	// proto functions first

		Spellbook.prototype.delete = function(e) {
			var book = e.target.parentNode;
				book.parentNode.removeChild(book);
		} //end delete

	var div = document.createElement('div');
	var frame = document.createElement('iframe');
	var delBtn = document.createElement('span');

		div.setAttribute('class', 'bookDiv');

		delBtn.innerHTML = 'X';
		delBtn.setAttribute('class', 'delete');
		delBtn.addEventListener('click', Spellbook.prototype.delete);

		frame.setAttribute('src', 'https://roll20.net/compendium/dnd5e/Spells%20List#content');
		frame.setAttribute('class', 'bookFrame');

		div.appendChild(delBtn);
		div.appendChild(frame);

		return(div);

}

