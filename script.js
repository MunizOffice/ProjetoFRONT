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


function javascript(){
    
    window.addEventListener('load', () => {

        navigator.geolocation.getCurrentPosition(setPosition, showError);

        function setPosition(position) {
            console.log(position)
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            Resultado(lat, long);
        }
        function showError(error) {
            alert(`erro: ${error.message}`);
        }
    })

    function Resultado(lat, long) {

        fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`http ERROR`)
                }
                return res.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(res => {
                displayResultado(res)
            });
    }

    pesquisa_button.addEventListener('click', function() {
        buscaResultado(pesquisa.value)
    })

    pesquisa.addEventListener('keypress', enter)
    function enter(event) {
        key = event.keyCode
        
        if (key === 13) {
            buscaResultado(pesquisa.value)
        }
    }

    function buscaResultado(cidade) {

        fetch(`${api.base}weather?q=${cidade}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`http error: status ${res.status}`)
                }
                return res.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(res => {
                displayResultado(res)
            });
    }

    function displayResultado(weather) {

        console.log(weather)

        cidade.innerText = `${weather.name}, ${weather.sys.country}`;

        let now = new Date();
        date.innerText = dataDeHoje(now);

        let iconName = weather.weather[0].icon;
        tempo_img.innerHTML = `<img src="./icons/${iconName}.png">`;

        let temperatura = `${Math.round(weather.main.temp)}`;
        temp_number.innerHTML = temperatura;
        temp_unit.innerHTML = `°c`;

        weather_tempo = weather.weather[0].description;

        weather_t.innerText = Letter(weather_tempo);

        max_min.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

        humidade.innerHTML = weather.main.humidity;
    }
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");
const name2 = document.getElementById("nom");
const foto = document.getElementById("foto");

function cadastrarDados()   {
    dado1.textContent = name2.value;
    dado2.textContent = email2.value;
    dado3.textContent = password2.value;
    perfil2.document = foto.value
}
