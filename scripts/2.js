/**
 * Created by User on 2018/10/25.
 */
function draw(id) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(100,0);
    context.lineTo(0,100);
    context.lineTo(100,100);
    context.closePath();
    context.fillStyle="green";
    context.fill();

    context.beginPath();
    context.moveTo(100,0);
    context.lineTo(0,100);
    context.lineTo(100,100);
    context.closePath();
    context.stroke();

}