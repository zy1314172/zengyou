function draw(id) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext("2d");
    var color = ["blue", "red", "green", "yellow", "purple"]

    var ctx1 = context.createLinearGradient(20, 20, 120, 120)
    ctx1.addColorStop(0,"#00abeb");
    ctx1.addColorStop(0.5,"#f0f");
    ctx1.addColorStop(1,"#ff0");

    var ctx2 = context.createLinearGradient(250, 20, 150, 120)
    ctx2.addColorStop(0,"#00abeb");
    ctx2.addColorStop(0.5,"#f0f");
    ctx2.addColorStop(1,"#ff0");

    var ctx3 = context.createLinearGradient(20, 250, 120, 150)
    ctx3.addColorStop(0,"#00abeb");
    ctx3.addColorStop(0.5,"#f0f");
    ctx3.addColorStop(1,"#ff0");

    var ctx4 = context.createLinearGradient(250, 250, 150, 150)
    ctx4.addColorStop(0,"#00abeb");
    ctx4.addColorStop(0.5,"#f0f");
    ctx4.addColorStop(1,"#ff0");

    context.fillStyle=ctx1;
    context.fillRect(20,20,100,100);

    context.fillStyle=ctx2;
    context.fillRect(150,20,100,100);

    context.fillStyle=ctx3;
    context.fillRect(20,150,100,100);

    context.fillStyle=ctx4;
    context.fillRect(150,150,100,100);

    /*for (var i = 0; i < 5; i++) {

     context.beginPath();
     context.arc(300, 300, 100, 0, Math.PI, true);
     context.lineWidth = "20";
     context.strokeStyle = color[i];
     context.stroke();
     context.translate(300, -80);
     context.rotate(Math.PI*0.25);
     context.scale(0.9,0.9);

     }*/

    /*context.fillRect(100,100,150,50);
     context.translate(0,20);
     context.fillRect(100,100,150,50);*/


}