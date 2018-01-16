var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
});

// var setup = readline().split(' ');
// var pieSlices = setup[0];
// var halfRings = setup[1];
// var radius = setup[2];

// var coordinates = readline().split(' ');
// var x1 = coordinates[0];
// var y1 = coordinates[1];
// var x2 = coordinates[2];
// var y2 = coordinates[3];

// var radiusPerHalfRing = radius / halfRings;
// var arcLengthPerPie = 2 * Math.PI * radius * ((180/6) / 360);

// var distance = 0;

// var straightLineLoops = Math.abs(y2 - y1);
// var arcLengthLoops = Math.abs(x2 - x1);

// for (i = 0; i < straightLineLoops; i++) {
//     distance += radiusPerHalfRing;
// }

// for (j = 0; j < arcLengthLoops; j++) {
//     distance += arcLengthPerPie;
// }

// print(distance);