/* PATCH NAME: Random words.
 * PATCH EFFECT: Pick a random word from words[].
 */

function getAnswer() {
  - return "snowman";
  + let words = ["beast","operation","impress","hearing","melodic","inlay","scorch","fascinated","fight","statement","unhealthy","exchange","befall","changeable","terrible","show","equable","begin","submit","rambunctious","make","stingy","dedicate","sing","baby","like","jump","kind","muscle","guide","goldfish","idiotic","wide-eyed","scarf","reduce","error","tangible","aded","owntown","spy","difficult","rattle","increase","polish","delightful","talk","truculent","marvelous","view"];
  + let index = Math.floor(Math.random()*words.length);
  + let answer = words[index];
  + console.log(answer);
  + return answer;
}