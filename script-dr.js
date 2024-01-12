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