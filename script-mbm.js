/* PATCH NAME: Remove borders
 * PATCH EFFECT: Remove the border around the @guesses side
 */
function setup() { 
  @ let guesses = document.getElementById("guesses");
  - none // not removing any lines
  + guesses.style.border="none"; 
}