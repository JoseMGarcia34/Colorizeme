function changeColorCuerpo(color) {
    var color = color.className;
    var cuerpo = document.getElementById('cuerpo'); 
    cuerpo.style.backgroundColor = color;
}

function changeColorPantalones(color) {
    var color = color.className;
    var pantalones = document.getElementById('pantalones'); 
    pantalones.style.backgroundColor = color;
}

function changeColorZapatillas(color) {
    var color = color.className;
    var zapatillas = document.getElementById('zapatillas'); 
    zapatillas.style.backgroundColor = color;
}

function conjuntar(porcentaje) {    
    var cuerpo = document.getElementById('cuerpo');
    var pantalones = document.getElementById('pantalones');
    var zapatillas = document.getElementById('zapatillas');    
    var colorCuerpo = cuerpo.style.backgroundColor;  
    var colorPantalones = pantalones.style.backgroundColor;  
    var colorZapatillas = zapatillas.style.backgroundColor;  

    if ((colorCuerpo == "darkblue") && (colorPantalones == "black") || (colorCuerpo == "black") && (colorPantalones == "darkblue")) {
        alert("¿Azul con Negro? ¡No por favor!");
    } else if ((colorCuerpo == "darkblue") && (colorPantalones == "darkblue")) {
        alert("Pareces un pitufo. ¡No gracias!");
    } else if ((colorCuerpo == "black") && (colorPantalones == "black")) {
        alert("¡Pon un poco de color!, aunque se respeta si te gusta ir de negro");
    } else if ((colorCuerpo == "brown") && (colorPantalones == "brown")) {
        alert("Tanto rojo parece que vienes de asesinar a alguien y no, no queremos que piensen eso.");
    } else if ((colorCuerpo == "darkblue") && (colorPantalones == "beige") && (colorZapatillas !== "white")) {
        alert("Me parece bien. Prueba con unas zapatillas blancas");  
    } else if ((colorCuerpo == "darkblue") && (colorPantalones == "beige") && (colorZapatillas == "white")) {
        alert("Me gusta tu estilo");                  
    } else {
        alert("Feel free.");
    }
}

function generarNuevoColorCuerpo(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
    }    
    var cuerpo = document.getElementById('cuerpo');         
    cuerpo.style.background = color;
    console.log("cuerpo " + color);
    var text = document.getElementById('colorC');
    text.innerText = color;  	
}

function generarNuevoColorPantalones(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
    }        
    var pantalones = document.getElementById('pantalones');      
    pantalones.style.background = color;
    console.log("pantalones " + color);
    var text = document.getElementById('colorP');
    text.innerText = color;    
}

function generarNuevoColorZapatillas(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
    }       
    var zapatillas = document.getElementById('zapatillas');      
    zapatillas.style.background = color;
    console.log("zapatillas " + color);
    var text = document.getElementById('colorZ');
    text.innerText = color;   
}

function reset(color) {    
    var cuerpo = document.getElementById('cuerpo');
    var pantalones = document.getElementById('pantalones'); 
    var zapatillas = document.getElementById('zapatillas');
    cuerpo.style.backgroundColor = "burlywood";
    pantalones.style.backgroundColor = "burlywood";
    zapatillas.style.backgroundColor = "burlywood";
    var text1 = document.getElementById('colorC');
    text1.innerText = "";
    var text2 = document.getElementById('colorP');
    text2.innerText = "";
    var text3 = document.getElementById('colorZ');
    text3.innerText = "";
}

