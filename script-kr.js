/* PATCH NAME: you lose 
* PATCH EFFECT: fixes backround for you lose image 
*/

+ function youLose() {
  + let endScreen = document.createElement("div");
  + endScreen.setAttribute("id","endScreen");
  + document.body.appendChild(endScreen);
+ }

function checkBackround() { 
  @ snowman.classList.add("redshift");
  }
+ else if (nextPartId == 6) {
  + youLose();
+ }
}
