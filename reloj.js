const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const interval = setInterval(() => {
    const local = new Date();
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();


    date.innerHTML = `${day} ${monthNames[month]} ${year}`;
    time.innerHTML = local.toLocaleTimeString();

}, 1000);