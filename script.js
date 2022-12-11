
setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let amPm = document.getElementById('am-pm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hrDot = document.querySelector('.hr_dot');
    let minDot = document.querySelector('.min_dot');
    let secDot = document.querySelector('.sec_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";//if else condn

    //convert to 12h clock
    if (h > 12) {
        h -= 12;
    }

    //add zero before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    amPm.innerHTML = ampm;


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    //12hr
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60min
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    //60sec

    hrDot.style.transform = `rotate(${h * 30}deg)`; // 360/12 =30
    minDot.style.transform = `rotate(${m * 6}deg)`; // 360/60 =6
    secDot.style.transform = `rotate(${s * 6}deg)`; // 360/60 =6


    // if(h >= 12){
    //     amPm.innerHTML = "PM";
    // }
    // else{
    //     amPm.innerHTML ="AM";// my method
    // }
})