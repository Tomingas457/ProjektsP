window.onload = function(){
  zimetuzcanvas();
}
function zimetuzcanvas() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="green";
  ctx.fillRect(10, 10, 200, 200);
}

function kascits() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle="red"; //formas krāsa
  ctx.strokeRect(220, 10, 200, 200); //Līnijas krāsa apkārt
}

function aplis() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(310, 100, 50, 0, 2*Math.PI);
  ctx.fillStyle="yellow";
  ctx.strokeStyle="black";
  ctx.lineWidth=15; //līnijas biezums
  ctx.stroke(); //lai parādītos līnijas krāsa apkārt
  ctx.fill(); //lai parādītu iekšējo krāsu
}

function līnija() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(250, 350);
  ctx.strokeStyle="purple";
  ctx.lineWidth = 10;
  ctx.stroke();
}

function teksts() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="blue";
  ctx.font="40px Arial";
  ctx.fillText("Šis ir JavaScript teksts!", 50, 350);
  ctx.strokeStyle="black";
}