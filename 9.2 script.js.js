var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener('DOMContentLoaded', (event) => {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	
	css.textContent = body.style.background + ";";
})

function generateNumber() {
	return Math.floor(Math.random() * 256)
}
function generateRandomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let buttons = document.querySelectorAll('button')
for( let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function (event) {
		if ( event.target.dataset.type.length > 0 ) {
			console.log(generateRandomColor())
			document.querySelector('.' + event.target.dataset.type).value = generateRandomColor()
			body.style.background = 
				'linear-gradient( to right, '
				+ color1.value
				+ ', '
				+ color2.value 
				+ ')'
		}
	})
}