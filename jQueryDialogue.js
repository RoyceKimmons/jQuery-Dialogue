var i  = 0;
var tp = 0;
var animateDialogue = true;
var textbox;
var ps;
var t;
var w = 50;

function AdvanceDialogue() {
	i++;
	tp=0;
	textbox.text("");
	t = setInterval("AnimateDialogue()", w);
	AnimateDialogue();
}

function AddButtons() {
	AddAdvanceButton();
}

function AddAdvanceButton() {
	textbox.append('<input type="button" value="->" id="jQueryDialogue-next">');
	$('input#jQueryDialogue-next').bind('click', function(event) {
	  AdvanceDialogue();
	});
}

function AnimateDialogue() {
	var p = ps.eq(i).text();
	if (tp < p.length) {
		var text = textbox.text();
		textbox.text(text+(p.substr(tp,1)));
		tp++;
	} else {
		clearInterval(t);
		AddButtons();
	}
}

function BeginDialogue() {
	$('div#jQueryDialogue').prepend($('<div id="jQueryDialogue-textbox"></div>'));
	textbox = $('div#jQueryDialogue-textbox');
	ps = $('div#jQueryDialogue > p');
	if (animateDialogue) {
		textbox.text("");
		t = setInterval("AnimateDialogue()", w);
		AnimateDialogue();
	} else {
		textbox.text(ps.eq(i).text());
	}
}


$(function(){
	BeginDialogue();
});