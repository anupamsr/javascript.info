(function () {
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext('2d');
  

  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, 'red');
  grd.addColorStop(1, 'white');

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);

  // Text
  ctx.font = '30px Arial';
  ctx.strokeText('Hello World', 10, 50);

  // Circle
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Draw line
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
})();