function eventHandler(event) {

}

function func()
{
    var square1 = document.getElementById("square1");
    square1.ontouchend = eventHandler;

    var square3 = document.getElementById("square3");
    square3.addEventListener("pointercancel", eventHandler);
}