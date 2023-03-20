// let secondji = document.getElementById('second');
// let minuteji = document.getElementById('minute');
// let hourji = document.getElementById('hour');
// console.log(secondji);
setInterval(() => {
    let date = new Date();
let s = date.getSeconds();
let m = date.getMinutes();
let h = date.getHours();
let sRotation = s *6;
let mRotation = m *6;
let hRotation = h *30;
    // hour.style.transform = `rotate(${hRotation}deg)`;
    hour.style.transform.rotate = hRotation +"deg";
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

