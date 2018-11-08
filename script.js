var c = document.getElementById("maisonCanvas");
var ctx = c.getContext("2d");


// toit
ctx.translate(200,0);
ctx.rotate(45*Math.PI/180);
ctx.fillStyle = '#E85';
ctx.fillRect(15, 15, 140, 140);

ctx.setTransform(1, 0, 0, 1, 0, 0);

// façade
ctx.fillStyle = "powderblue";
ctx.fillRect(100,120,200,200);

// fenêtres
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(125,145,40,40);
ctx.fillRect(235,145,40,40);

// porte
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(180,260,40,60);
