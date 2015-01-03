var pass = "1234";

document.getElementById("in_form").onsubmit = function(evt) {
	if (document.getElementById("guess").value === pass) {
		clearTimeout(countTimeout);
		document.getElementById("msg").innerHTML = "猜對了";
	} else {
		document.getElementById("msg").innerHTML = "錯啦~~~";
	}

	evt.preventDefault();
}

var counter = 20;
var countTimeout = null;
function countDown() {
	counter -= 1;
	document.getElementById("cnt").innerHTML = counter;
	if(counter > 0) countTimeout = setTimeout(countDown, 1000);
	else alert("Bomb !!!!");
}

countTimeout = setTimeout(countDown, 1000);
