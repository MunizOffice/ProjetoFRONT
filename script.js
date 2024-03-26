function abrirlogin()   {
    document.getElementById('modal').style.top = "0%";
}
function fecharlogin()   {
    document.getElementById('modal').style.top = "-100%";
}

function abrirlogin2()   {
    document.getElementById('segundo').style.top = "17.5%";
}
function fecharlogin2()   {
    document.getElementById('segundo').style.top = "-100%";
}

const api = {
    key: "92c9e9841858f7442a67c01e9f7a13d2",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
}

const pesquisa = document.querySelector('.form-control');

const pesquisa_button = document.querySelector('.btn');

const cidade = document.querySelector('.cidade');

const date = document.querySelector('.date');

const weather_t = document.querySelector('.ceu');

const tempo_img = document.querySelector('.tempo-img');

const tempo_temp = document.querySelector('.tempo-temp');

const temp_number = document.querySelector('.tempo-temp div');

const temp_unit = document.querySelector('.tempo-temp span');

const max_min = document.querySelector('.max-min');

const humidade = document.querySelector('.humidade');