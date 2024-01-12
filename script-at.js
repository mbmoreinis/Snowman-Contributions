/* PATCH NAME: Randome Word Generator
* PATCH EFFECT: Gives random words
*/

function getAnswer(){
  - return "snowman";
  + let answers = ["upbeat" , "unnatural" , "nervous" , "deep" , "insidious" , "sincere" , "vengeful" , "outgoing" , "fretful" , "wary" , "zany" , "frightening" , "inconclusive" , "sloppy" , "sneaky" , "penitent" , "rough" , "nifty" , "quirky" , "awake"]; 
  + let aLength = answers.length;
  + let which = Math.floor(Math.random() *aLength);
  + console.log(answers[which])
  + return answers[which];  
}