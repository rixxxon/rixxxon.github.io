clik.onclick = function	myFunction() {
	var x = document.getElementById('clik');

	if (x.className === "animated") {
		x.className += " fadeInLeft";
	} 
	else {
		x.className = "animated";
	}
}