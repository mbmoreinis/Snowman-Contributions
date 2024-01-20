/* PATCH NAME: Create blanks
 * PATCH EFFECT: Make the write number of blanks for the answer.
 */

@ globals 
- var guessedLetters = makeBlanks();
+ var guessedLetters = makeBlanks(answer);

- function makeBlanks(){
+ function makeBlanks(answer){
  - return ["_","_","_","_","_","_","_"];
  + let blanks = answerLetters.length;
  + let underScores = [];
  + for (let index = 0; index < blanks; index++) {
    + underScores.push("_");
  + }
  + return underScores;
}

/* PATCH NAME: Check Background 
 * PATCH EFFECT: Changes background color at 4 and 5 guesses
 */

/* New Function */  
+ function checkBackground() {
+   let snowman = document.getElementById("snowman");
+   console.log("checking");
+   if (nextPartId == 4) {
+     snowman.classList.add("yellowshift");
+   }
+   else if (nextPartId == 5) {
+      snowman.classList.add("redshift");	
+   }
+ }

/* In function badGuess(){ */
  @ let nextPart = parts[nextPartId];
  + checkBackground();  

  
/* CSS for Check Background */
/*coloring */
+ .yellowshift {
+     filter: hue-rotate(180deg);
+ }
+ 
+ .redshift {
+     filter: hue-rotate(120deg);
+ }  
