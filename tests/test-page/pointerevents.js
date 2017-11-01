function func()
{
    var square2 = document.getElementById("square2");

    square2.addEventListener("pointerup", func2);
}

function func2()
{
    alert("Point!!")
}