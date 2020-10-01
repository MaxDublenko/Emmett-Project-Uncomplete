let cnv = document.getElementById("piechart");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

//Event listeners
document.getElementById('calc').addEventListener('click', drawChart);
let h1 = document.getElementById('housing').value;
let f1 = document.getElementById('food').value;
let e1 = document.getElementById('electricity').value;
let h2 = document.getElementById('heating').value;
let w1 = document.getElementById('water').value;
let e2 = document.getElementById('entertainment').value;

let colors = ['red', 'green', 'yellow', 'lightblue', 'black', 'orange'];

function drawChart(h1, f1, e1, h2, w1, e2) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(cnv.width/2, cnv.height/2, cnv.width/2, 0, 2 * Math.PI);
  ctx.fill();
  let start = 0;
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = colors[i];
    start += Math.PI / 6;
    ctx.beginPath(cnv.width/2, cnv.height/2, cnv.width/2, start, 2 * Math.PI);
    ctx.fill();
  }
}


console.log(h1, f1, e1, h2, w1, e2)
