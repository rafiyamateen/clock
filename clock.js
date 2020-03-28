let lines = document.getElementsByClassName('lines'),
    clock = document.getElementsByClassName('clock')[0];
for (let i = 1; i < 60; i++) {
    clock.innerHTML += '<div class="lines"></div>';
    lines[i].style.transform = `rotate(${6 * i}deg)`;
}
function time() {
    let now = new Date(),
        hr = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        hrDeg = hr * 30 + min * (30 / 60),
        minDeg = min * 6 + sec * (6 / 60),
        secDeg = sec * 6,
        date = now.getDate(),
        day = now.getDay(),
        month = now.getMonth(),
        year = now.getFullYear(),
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementsByClassName('hr')[0].style.transform = `rotate(${hrDeg}deg)`;
    document.getElementsByClassName('min')[0].style.transform = `rotate(${minDeg}deg)`;
    document.getElementsByClassName('sec')[0].style.transform = `rotate(${secDeg}deg)`;
    document.getElementsByClassName('date')[0].innerText = `${date}/${month + 1}/${year}`
    document.getElementsByClassName('day')[0].innerText = days[day];
}
setInterval('time()', 100);