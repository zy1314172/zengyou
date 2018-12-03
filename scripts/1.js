/**
 * Created by User on 2018/10/25.
 */
function draw(id) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(25, 0, 10, 60);
    context.fillRect(0, 25, 60, 10);
    context.stroke();

    context.beginPath();
    context.moveTo(60, 0);
    context.lineTo(120, 60);
    context.lineWidth =5;
    context.strokeStyle = "blue";
    context.stroke();

    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(150, 30, 120, 60);
    context.strokeStyle="#ffe811";
    context.strokeRect(150, 30, 120, 60);
    context.stroke();
}