/* PATCH NAME: Snowman Background
* PATCH EFFECT: Adds a background image to the snowman
*/

function setup(){
  @ anywhere
  + let snowman = document.getElementById("snowman");
  + snowman.style.backgroundImage = "url('images/snow.jpg')";
  + snowman.style.backgroundRepeat = "no-repeat";
  + snowman.style.backgroundSize = "cover";
  + snowman.style.backgroundColor = "#c6d1d3";
}
