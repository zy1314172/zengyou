/**
 * Created by User on 2018/10/25.
 */
function draw(id) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext("2d");

    context.beginPath();
    context.arc(400,400,150,0,Math.PI*2,true);
    context.strokeStyle="black";
    context.stroke();

    context.beginPath();
    context.arc(350,350,20,0,Math.PI*2,true);
    context.closePath();
    context.fillStyle="#000000";
    context.fill();

    context.beginPath();
    context.arc(450,350,20,0,Math.PI*2,true);
    context.closePath();
    context.fillStyle="#000000";
    context.fill();

    context.beginPath();
    context.arc(400,450,50,0,Math.PI,false);
    context.strokeStyle="black";
    context.stroke();


}