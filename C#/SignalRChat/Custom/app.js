$(function () {
    // Declare a proxy to reference the hub.
    var canvas = document.getElementById('canvas');
    var can = $('#canvas');
    var chat = $.connection.chatHub;
    // Create a function that the hub can call to broadcast messages.           
    chat.client.draw = function (x, y) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI);
        ctx.stroke();
    };
    // Start the connection.
    $.connection.hub.start().done(function () {
        can.mousemove(function (e) {
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            chat.server.cordinate(mouseX, mouseY);
        });
    });
});