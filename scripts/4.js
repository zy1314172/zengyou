/**
 * Created by User on 2018/10/25.
 */
function draw(id) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "#27fffa";
    context.fillRect(0, 0, 800, 150)
    context.fill();

    context.beginPath();
    context.moveTo(0, 150);
    context.lineTo(0, 130);
    context.lineTo(20, 140);
    context.lineTo(180, 100);
    context.lineTo(350, 180);
    context.lineTo(400, 75);
    context.lineTo(470, 110);
    context.lineTo(550, 70);
    context.lineTo(640, 120);
    context.lineTo(730, 75);
    context.lineTo(800, 150);
    context.closePath();
    context.fillStyle = "#56979f";
    context.fill();

    context.beginPath();
    context.fillStyle = "#fff667";
    context.fillRect(0, 150, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#53ff70";
    context.fillRect(0, 206.25, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#fff667";
    context.fillRect(0, 262.5, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#53ff70";
    context.fillRect(0, 318.75, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#fff667";
    context.fillRect(0, 375, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#53ff70";
    context.fillRect(0, 431.25, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#fff667";
    context.fillRect(0, 487.5, 800, 56.25);
    context.fill();

    context.beginPath();
    context.fillStyle = "#53ff70";
    context.fillRect(0, 543.75, 800, 56.25);
    context.fill();

    context.beginPath();
    context.moveTo(250, 150);
    context.lineTo(550, 150);
    context.lineTo(700, 600);
    context.lineTo(100, 600);
    context.fillStyle = "#ffffff";
    context.fill();

    context.beginPath();
    context.moveTo(275, 150);
    context.lineTo(525, 150);
    context.lineTo(675, 600);
    context.lineTo(125, 600);
    context.fillStyle = "#989595";
    context.fill();

    context.beginPath();
    context.arc(750, 30, 25, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    var img = new Image();
    img.src = 'sample.svg';
    img.onload = function(){
        context.drawImage(img,100,120);
    }

}