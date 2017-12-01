var czas = 30;

var czasomierz = setInterval(function() {
	czas--;
	document.getElementById('czas').textContent = czas;
	if (czas <=0) {
		alert("BOOM!");
		clearInterval(czasomierz);
	}
},1000);