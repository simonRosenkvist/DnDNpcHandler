Notes = function(senses, lang, exp, cr, notes, arms) {


var notesSpan = document.createElement('p');
	notesSpan.innerHTML = '<strong>Notes: </strong><br/>' + notes.join(' <br/>');

var traintsSpan = document.createElement('p');
	traintsSpan.innerHTML = '<strong>Traints: </strong><br/>' + senses.join(' <br/>') + '<br/><br/><strong>Languages:</strong><br/>' + lang.join(' <br/>') + '<br/><br/><strong>Exp/chllenge rating:</strong><br/>' + exp + ', ' + cr;

var eqSpan = document.createElement('p');
	eqSpan.innerHTML = '<strong>Equipment:</strong><br/>' + arms.join('<br/>');

var upperDiv = document.createElement('div');

var toggleDiv = document.createElement('div');
	toggleDiv.setAttribute('class', 'toggle');
	toggleDiv.setAttribute('alt', 'displayed');

var noticeBoard = document.createElement('textArea');
	noticeBoard.setAttribute('class', 'noticeBoard');
	noticeBoard.setAttribute('placeholder', 'notes');

var toggleBtn = document.createElement('p');
	toggleBtn.setAttribute('class', 'toggleBtn');
	toggleBtn.innerHTML = '-';
	toggleBtn.addEventListener('click', Notes.prototype.toggleInfo);

		upperDiv.appendChild(toggleBtn);
		toggleDiv.appendChild(notesSpan);
		toggleDiv.appendChild(traintsSpan);
		toggleDiv.appendChild(eqSpan);
		toggleDiv.appendChild(noticeBoard);
		upperDiv.appendChild(toggleDiv);


	return(upperDiv);
}


Notes.prototype.toggleInfo = function(e) {
	var text = e.target.innerHTML;
	var card = e.target.parentNode;

		if (card.getElementsByClassName('toggle')[0] != undefined) {
			var toggleArea = card.getElementsByClassName('toggle')[0];
			var control = toggleArea.attributes.alt.nodeValue;
				if (control == 'displayed') {
					toggleArea.setAttribute('class', 'hiddenDiv');
					toggleArea.setAttribute('alt', 'gone');
			}//end if
		}
			else if (card.getElementsByClassName('hiddenDiv')[0] != undefined) {
				var hidden = card.getElementsByClassName('hiddenDiv')[0];
					hidden.removeAttribute('class', 'hiddenDiv');
					hidden.removeAttribute('alt', 'gone');
					hidden.setAttribute('class', 'toggle');
					hidden.setAttribute('alt', 'displayed');
			}

			if (text == '-') {
				e.target.innerHTML = '+';
			} else if (text == '+') {
				e.target.innerHTML = '-';
			}
}//end toggle info