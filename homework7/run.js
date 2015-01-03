var view = document.getElementById("view");
var view2d = view.getContext("2d");
var chara = new Image();
chara.src = "chara.png";

var stepTimeout = null;
var stepUpdating = false;

var step = 0;
var way = 0;
var chara_x = 272;
var chara_y = 288;

chara.onload = function() {
    update();
};


window.addEventListener('keydown', keyDown, true);
window.addEventListener('keyup', keyUp, true);


var lr_pressed = 0; // left: -1 right: 1
var ud_pressed = 0; // up: -1   down: 1

function keyProcess(code, press) {
    var sideway = lr_pressed !== 0 && ud_pressed !== 0
    switch(code) {
        case 37: // left
            lr_pressed = press ? -1 : 0;
            if (press) way = 1;
            break;
        case 38: // up
            ud_pressed = press ? -1 : 0;
            if (press) way = 3;
            break;
        case 39: // right
            lr_pressed = press ? 1 : 0;
            if (press) way = 2;
            break;
        case 40: // down
            ud_pressed = press ? 1 : 0;
            if (press) way = 0;
            break;
    }
    // 修正斜走回復正走時方向
    if (sideway && !press) {
        if (lr_pressed) way = lr_pressed == -1 ? 1 : 2;
        if (ud_pressed) way = ud_pressed == -1 ? 3 : 0;
    }
}

function keyDown(evt) {
    if (!stepUpdating) updateStep();
    keyProcess(evt.keyCode, true);
}
function keyUp(evt) {
    keyProcess(evt.keyCode, false);
    if (lr_pressed === 0 && ud_pressed === 0) stopStep();
}

function updateStep() {
    stepUpdating = true;
    step = (step + 1) % 4;
    stepTimeout = setTimeout(updateStep, 250);
}
function stopStep() {
    step = 0;
    clearTimeout(stepTimeout);
    stepUpdating = false;
}

function initDraw() {
    view2d.fillStyle="#FFF";
    view2d.fillRect(0, 0, 640, 480);
}
function drawChara() {
    initDraw();
    view2d.drawImage(chara, step * 96, way * 96, 96, 96, chara_x, chara_y, 96, 96);
}

function update() {
    chara_x += lr_pressed * 2;
    chara_y += ud_pressed * 2;

    drawChara();

    setTimeout(update, 50);
}
