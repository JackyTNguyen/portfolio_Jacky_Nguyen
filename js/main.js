var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = document.createElement('IMG');   
img.onload = function () {   
    ctx.save();   
    ctx.beginPath();

    ctx.moveTo(870, 200);
    ctx.lineTo(1020, 200); 
    ctx.lineTo(1020, 628);
    ctx.lineTo(870, 628);

    ctx.moveTo(1045, 150);
    ctx.lineTo(1195, 150);
    ctx.lineTo(1195, 728);
    ctx.lineTo(1045, 728);

    ctx.moveTo(1220, 50);
    ctx.lineTo(1370, 50);
    ctx.lineTo(1370, 678);
    ctx.lineTo(1220, 678);

    ctx.moveTo(1395, 100);
    ctx.lineTo(1545, 100);
    ctx.lineTo(1545, 778);
    ctx.lineTo(1395, 778);

    ctx.moveTo(1570, 225);
    ctx.lineTo(1720, 225);
    ctx.lineTo(1720, 603);
    ctx.lineTo(1570, 603);
    
    ctx.closePath();

    ctx.clip();   
    ctx.drawImage(img, 270, 0);   

    ctx.restore(); 
}   

img.src = "assets/img/canvasImage.png";