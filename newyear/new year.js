const newYear = "01 Jan 2024";

function countdown(){
    const newYearDate = new Date(newYear);
    const  currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours  = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = timeformat(days);
    document.getElementById("hours").innerHTML = timeformat(hours);
    document.getElementById("minutes").innerHTML = timeformat(minutes);
    document.getElementById("seconds").innerHTML = timeformat(seconds);

}

function timeformat(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
