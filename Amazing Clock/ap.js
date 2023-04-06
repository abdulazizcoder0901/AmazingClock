function newClock () {
    setInterval(() =>{
        let hours = document.querySelector('.hours')
        let minutes = document.querySelector('.minutes')
        let seconds = document.querySelector('.seconds')
        let ampm = document.querySelector('.ampm')

        let hh = document.querySelector('#hh')
        let mm = document.querySelector('#mm')
        let ss = document.querySelector('#ss')

        let hr_dot = document.querySelector('.hr_dot')
        let min_dot = document.querySelector('.min_dot')
        let sec_dot = document.querySelector('.sec_dot')
        
        let hour = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
        let minute = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
        let second = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
        let pm = hour >= 12 ? "PM" : "AM"
        
        hours.innerHTML = hour + "<br><span>Hour</span>"
        minutes.innerHTML = minute + "<br><span>Minute</span>"
        seconds.innerHTML = second + "<br><span>Second</span>"
        ampm.innerHTML = pm

        hh.style.strokeDashoffset = 440 - (440 * hour) / 12
        mm.style.strokeDashoffset = 440 - (440 * minute) / 60
        ss.style.strokeDashoffset = 440 - (440 * second) / 60

        hr_dot.style.transform = `rotate(${hour * 30}deg)`;
        min_dot.style.transform = `rotate(${minute * 6}deg)`;
        sec_dot.style.transform = `rotate(${second * 6}deg)`;
    })
}

newClock()