document.addEventListener('touchstart', handleTouchStart, false);       
document.addEventListener('touchmove', handleTouchMove, false);

document.addEventListener('mousedown', handleMouseDown, false);       
document.addEventListener('mouseup', handleMouseUp, false);

var dragStartPoint = null;

function handleTouchStart(evt) {
    dragStartPoint = evt.touches[0];
};

function handleTouchMove(evt) {
    if (! dragStartPoint) return;
    changePage(dragStartPoint.clientX - evt.touches[0].clientX);
    dragStartPoint = null;
};

function handleMouseDown(evt) {
    dragStartPoint = evt;
};

function handleMouseUp(evt) {
    if (! dragStartPoint) return;
    changePage(dragStartPoint.clientX - evt.clientX);
    dragStartPoint = null;
};


function changePage(way) {
	var pane = document.getElementById("pane");
    if (way > 0) { // left swipe - to right page
    	pane.style.marginLeft = '-100%';
    } else { // right swipe - to left page
    	pane.style.marginLeft = '0';
    }
}
