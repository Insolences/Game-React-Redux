export function timer (seconds, tick, result) {
    if (seconds > 0) {
        tick(seconds);
        seconds -= 1;
        setTimeout(function () {
            timer(seconds, tick, result);
        }, 1000);
    } else {
        result();
    }
}

