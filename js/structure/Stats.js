Stats = function(str, dex, con, int, wis, cha) {

	var strMod = 0;
	var dexMod = 0;
	var conMod = 0;
	var intMod = 0;
	var wisMod = 0;
	var chaMod = 0;

	if (str != 10 && str != 11) {
		strMod = Math.floor((str - 10)/2);
	} // StrMod

	if (dex != 10 && dex != 11) {
		dexMod = Math.floor((dex - 10)/2);
	} // DexMod

	if (con != 10 && con != 11) {
		conMod = Math.floor((con - 10)/2);
	}

	if (int != 10 && int != 11) {
		intMod = Math.floor((int - 10)/2);
	}

	if (wis != 10 && wis != 11) {
		wisMod = Math.floor((wis - 10)/2);
	}

	if (cha != 10 && cha != 11) {
		chaMod = Math.floor((cha - 10)/2);
	}

var div = document.createElement('div');

var strInput = document.createElement('input');
var strSpan = document.createElement('span');
var strModInput = document.createElement('input');

var dexInput = document.createElement('input');
var dexSpan = document.createElement('span');
var dexModInput = document.createElement('input');

var conInput = document.createElement('input');
var conSpan = document.createElement('span');
var conModInput = document.createElement('input');

var intInput = document.createElement('input');
var intSpan = document.createElement('span');
var intModInput = document.createElement('input');

var wisInput = document.createElement('input');
var wisSpan = document.createElement('span');
var wisModInput = document.createElement('input');

var chaInput = document.createElement('input');
var chaSpan = document.createElement('span');
var chaModInput = document.createElement('input');

var br1 = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var br4 = document.createElement('br');
var br5 = document.createElement('br');
var br6 = document.createElement('br');
var br7 = document.createElement('br');

strSpan.innerHTML = 'Str';
strInput.value = str;
strModInput.value = strMod;

dexSpan.innerHTML = 'Dex';
dexInput.value = dex;
dexModInput.value = dexMod;

conSpan.innerHTML = 'Con';
conInput.value = con;
conModInput.value = conMod;

intSpan.innerHTML = 'Int';
intInput.value = int;
intModInput.value = intMod;

wisSpan.innerHTML = 'Wis';
wisInput.value = wis;
wisModInput.value = wisMod;

chaSpan.innerHTML = 'Cha';
chaInput.value = cha;
chaModInput.value = chaMod;

div.appendChild(strSpan);
div.appendChild(strInput);
div.appendChild(strModInput);
div.appendChild(br1);

div.appendChild(dexSpan);
div.appendChild(dexInput);
div.appendChild(dexModInput);
div.appendChild(br2);

div.appendChild(conSpan);
div.appendChild(conInput);
div.appendChild(conModInput);
div.appendChild(br3);

div.appendChild(intSpan);
div.appendChild(intInput);
div.appendChild(intModInput);
div.appendChild(br4);

div.appendChild(wisSpan);
div.appendChild(wisInput);
div.appendChild(wisModInput);
div.appendChild(br5);

div.appendChild(chaSpan);
div.appendChild(chaInput);
div.appendChild(chaModInput);
div.appendChild(br6);
div.appendChild(br7);

return(div);

}