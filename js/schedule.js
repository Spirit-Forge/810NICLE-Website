function demilitarize (num) {
    if (num > 24) {
        return num - 24;
    } else {
        return num;
    }
}


let times = document.querySelectorAll('tr > th');
for (let i = 0; i < times.length; i++) {
    let time = new Date(times[i].innerText);
    let hour = demilitarize(parseInt(time.getHours()));
    let minute = time.getMinutes();
    times[i].innerText = pad(hour, 2) + ':' + pad(minute, 2);
}