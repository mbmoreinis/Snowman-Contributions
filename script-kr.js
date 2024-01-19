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

/* add to css */
// #endScreen {
//   left:0;
//   top:0;
//   position:absolute;
//   width:600px;
//   height:608px;
//    background-image: url("youlose.jpg");
//    background-repeat: no-repeat;
//    background-size:cover;
//    background-color:#C6D1D3;
// }

@ var parts = ["abdomen","thorax","head","left","right","nose"];
+ ,"blank"
