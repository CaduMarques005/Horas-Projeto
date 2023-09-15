const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let mins = datetoday.getMinutes();
    let segs = datetoday.getSeconds();

if(hr < 10 ) hr = '0' + hr;
if(mins < 10 ) mins = '0' + mins;
if(segs < 10 ) segs = '0' + segs;


    horas.textContent = hr;
    minutos.textContent = mins;
    segundos.textContent = segs
})