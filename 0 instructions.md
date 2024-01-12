# Contributing To This Repository
Do not edit any of the core files (index, script, style). Instead, post your own "patches" (changes) to script.js with your initials. 
Example: If I were to remove the border from the guesses side, I would make a file with my initials called **script-mbm.js**, and in it, I would include:

/* PATCH NAME: Remove borders
 * PATCH EFFECT: Remove the border around the @guesses side
 */

// Which function, and after which line?

function setup() {
  @   let guesses = document.getElementById("guesses"); 
  -    none // no lines to remove
  +   guesses.style.border="none";
}

# Contribution History
1. script-mbm.js - remove border
2. script-ra.js or script-at.js - getAnswer
3. script-dr.js - makeBlanks
4. style-kc.css - add background image