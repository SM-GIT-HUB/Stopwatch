const display = document.getElementById("display");

let timer = 0;
let isRunning = false;

let myTime = 0;

function start()
{
    if (!isRunning)
    {
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop()
{
    if (isRunning)
    {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset()
{
    clearInterval(timer);
    isRunning = false;
    timer = 0;
    display.textContent = "00:00:00:00";
    myTime = 0;
}

function update()
{
    myTime += 10;
    let hours = (Math.floor(myTime / 3600000)).toString().padStart(2, 0);
    let mins = (Math.floor(myTime / 60000) % 60).toString().padStart(2, 0);
    let sec = (Math.floor(myTime / 1000) % 60).toString().padStart(2, 0);
    let mili = Math.floor((myTime % 1000) / 10).toString().padStart(2, 0);
    display.textContent = `${hours}:${mins}:${sec}:${mili}`;
}