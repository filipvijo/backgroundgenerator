var css = document.querySelector("h3");
var color1 = document.querySelector(".first");
var color2 = document.querySelector(".second");
var body = document.getElementById("gradient");
var pageCharge = document.getElementById("load");
var btn = document.getElementById("btn");




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background;

}

function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  var newColor = "";
  
  for ( var i = 0; i < 6; i++ ) {
    var x = Math.round( Math.random() * 14 );
    var y = hexValues[x];
    newColor += y;
  }
  
  document.getElementById("gradient").style.backgroundColor = newColor;
  document.getElementById("load").innerHTML = newColor;
  
}







pageCharge.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);









/*const laugh = num => 'coucou'.repeat(num);

console.log(laugh(3));
console.log(laugh(5));
*/