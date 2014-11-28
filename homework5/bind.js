var ep_list = [
	"ubu_gSOliuY",
	"44JwfW3KgWE",
	"Q-Jf0sfYBFs",
	"DiycusxqXZ4",
	"YzXjbQqCuJE",
	"r8fDYvwc3NY",
	"r8kF2_qlSS8",
	"-zZC4QkWo8g",
	"JOpxc8MD5zA",
	"zaFulU2KyF4"
];

var li_list = document.getElementsByTagName("nav")[0].getElementsByTagName("li")

HTMLCollection.prototype.indexOf = function(target) { return Array.prototype.indexOf.apply(this, [target]) }
HTMLCollection.prototype.forEach = function(cb) { Array.prototype.forEach.apply(this, [cb]) }

li_list.forEach(function(li) {
	li.onclick = function(evt) {
		li_list.forEach(function(li) { li.className = ""; });
		evt.currentTarget.className = "current";
		var idx = li_list.indexOf(evt.currentTarget);
		document.getElementById("view").src = "http://www.youtube.com/embed/" + ep_list[idx];
		return false;
	};
});
