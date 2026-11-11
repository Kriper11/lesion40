let time = new Date()

let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let secund = document.getElementById("secunds")

// hour.textContent = time.getHours()
// minute.textContent = time.getMinutes()
// secund.textContent = time.getSeconds()

function Time() {
    let time = new Date()
    hour.textContent = time.getHours()
    minute.textContent = time.getMinutes()
    secund.textContent = time.getSeconds()
}
Time()
setInterval(Time, 1000);

// let soat = document.getElementById("soat")
// soat.textContent = hour + ":" + minute + ":" + secund

if (secund < 10) {
    secund.textContent = 0 + time.getSeconds()
} else if (minute < 10) {
    minute.textContent = 0 + time.getSeconds()
}
