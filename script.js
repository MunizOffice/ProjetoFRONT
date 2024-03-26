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
            })
            .catch(error => {
                alert(error.message)
            })
            .then(res => {
                displayResultado(res)
            });
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