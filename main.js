

setInterval(function () {
    
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hour = time.getHours();
    let day = 'AM';

    if (hour > 12) {
        day = 'PM';
        hour -= 12;
    }
    if (hour == 0) {
        day = 'AM';
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }

    clock.textContent = hour + ":" + min + ":" + sec + " " + day;

})