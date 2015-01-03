var view = document.getElementById("view");
var view2d = view.getContext("2d");
var loaded = false;
var chara = new Image();
chara.src = "chara.png";

var step = 0;
var way = 0;
var chara_x = 272;
var chara_y = 192;
function drawChara() {
    initDraw();
    view2d.drawImage(chara, step * 96, way * 96, 96, 96, chara_x, chara_y, 96, 96);
    loaded = true;
}

chara.onload = function() {
    drawChara();
};


window.addEventListener('keydown', keyDown, true);
window.addEventListener('keyup', keyUp, true);


var lr_pressed = 0; // left: 1 right: 2
var ud_pressed = 0; // up: 1   down: 2

function keyProcess(code, press) {
    switch(code) {
        case 37: // left
            lr_pressed = press ? 1 : 0;
            way = 1;
        case 38: // up
            ud_pressed = press ? 1 : 0;
            way = 3;
        case 39: // right
            lr_pressed = press ? 2 : 0;
            way = 2;
        case 40: // down
            ud_pressed = press ? 2 : 0;
            way = 0;
    }
}

function keyDown(evt) {
    keyProcess(evt.keyCode, true);
}
function keyUp(evt) {
    keyProcess(evt.keyCode, false);
}


function initDraw() {
    view2d.fillStyle="#FFF";
    view2d.fillRect(0, 0, 640, 480);
}

function update() {

}

//setTimeout();
