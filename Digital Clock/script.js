function display() {
    let dt = new Date();
    let hr = dt.getHours();
    let mint = dt.getMinutes();
    let sec = dt.getSeconds();
    let med = 'AM'

    if (hr > 12) {
        hr = hr - 12;
        med = 'PM';
    }
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Satur'];
    let months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let date = dt.getDate();
    let day = weekDays[dt.getDay()];
    let month = months[dt.getMonth()];
    let year = dt.getFullYear();

    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')
    let dte = document.getElementById('date');
    hours.innerHTML = padZero(hr);
    minutes.innerHTML = padZero(mint);
    seconds.innerHTML = padZero(sec);
    ampm.innerHTML = med;
    dte.innerHTML = padZero(date) + ' ' + month + ' ' + year + ', ' + day;
}
function padZero(num) {
    return num < 10 ? '0' + num : num
}
setInterval(display, 500)
