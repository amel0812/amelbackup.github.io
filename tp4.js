function calculImc() {
	var taille = document.getElementById('taille').value;
	var poids = document.getElementById('poids').value;
	var resultat = document.getElementById('results');
	var interpretation = "";

	
	var IMC = poids / (taille * taille);
	

	if (IMC<18.5) { 
	interpretation = "maigre";
	}
	else if (IMC>=18.5 && IMC<25) {
	interpretation = "Normal";
	}
	else if (IMC>=25 && IMC<30) {
	interpretation = "Surpoids";
	}
	else if (IMC>=30 && IMC<35) {
	interpretation = "Obésité";
	}
	else if (IMC>=35 && IMC<=40) {
	interpretation = "Morbidité";
	}
	else {
	interpretation = "Obésité morbide"}

	resultat.innerHTML = interpretation;
}


