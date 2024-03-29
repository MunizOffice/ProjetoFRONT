const api = {
  key: "b1acd38efcd959af9979088d310b48a2",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric",
};

const pesquisa = document.querySelector(".form-control");
const pesquisa_button = document.querySelector(".btn");
const cidade = document.querySelector(".cidade");
const date = document.querySelector(".date");
const weather_t = document.querySelector(".ceu");
const tempo_img = document.querySelector(".tempo-img");
const tempo_temp = document.querySelector(".tempo-temp");
const temp_number = document.querySelector(".tempo-temp div");
const temp_unit = document.querySelector(".tempo-temp span");
const max_min = document.querySelector(".max-min");
const humidade = document.querySelector(".humidade");

function displayBranco1(isBusca) {
  const branco1 = document.querySelector('.branco1');
  if (!isBusca && branco1) {
    branco1.style.display = 'block';
  }
}

function criarNovoBranco1(isBusca) {
  if (!isBusca) return;

  const blocoBrancoAtual = document.querySelector('.branco1');
  const novoBranco1 = document.createElement('div');
  novoBranco1.classList.add('branco1');
  novoBranco1.classList.add('busca');

  if (blocoBrancoAtual) {
    blocoBrancoAtual.parentNode.insertBefore(novoBranco1, blocoBrancoAtual.nextSibling);
    novoBranco1.innerHTML = blocoBrancoAtual.innerHTML;
  } else {
    document.body.appendChild(novoBranco1);
  }
}

function javascript() {

  window.addEventListener("load", () => {
    navigator.geolocation.getCurrentPosition(setPosition, showError);

    function setPosition(position) {
      console.log(position);
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      Resultado(lat, long);
    }
    function showError(error) {
      alert(`erro: ${error.message}`);
    }
  });

  function Resultado(lat, long) {
    fetch(
      `${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`http ERROR`);
        }
        return res.json();
      })
      .catch((error) => {
        textBusca.textContent = "Cidade inexistente, digite novamente...";
        textBusca.classList.remove('texto-sucesso');
        textBusca.classList.add('texto-erro');
        buscaContainer.classList.remove('busca-sucesso');
        buscaContainer.classList.add('busca-erro');
      })
      .then((res) => {
        displayResultado(res);
        displayBranco1();
      });
  }

  pesquisa_button.addEventListener("click", function () {
    buscaResultado(pesquisa.value);
  });

  pesquisa.addEventListener("keypress", enter);
  function enter(event) {
    key = event.keyCode;

    if (key === 13) {
      buscaResultado(pesquisa.value);
    }
  }

  function buscaResultado(cidade) {
    const textBusca = document.getElementById('textBusca');
    const buscaContainer = document.querySelector('.busca-container');

    fetch(
      `${api.base}weather?q=${cidade}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`http error: status ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        textBusca.textContent = "Cidade encontrada com sucesso!";
        textBusca.classList.remove('texto-erro');
        textBusca.classList.add('texto-sucesso');
        buscaContainer.classList.remove('busca-erro');
        buscaContainer.classList.add('busca-sucesso');
        criarNovoBranco1(true);
        displayResultado(res);
        displayBranco1(true);
      })
      .catch((error) => {
        textBusca.textContent = "Cidade inexistente, digite novamente...";
        textBusca.classList.remove('texto-sucesso');
        textBusca.classList.add('texto-erro');
        buscaContainer.classList.remove('busca-sucesso');
        buscaContainer.classList.add('busca-erro');
      });
  }

  function displayResultado(weather) {
    console.log(weather);

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

    max_min.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
      weather.main.temp_max
    )}°c`;

    humidade.innerHTML = weather.main.humidity;
  }

  function dataDeHoje(d) {
    let dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julio",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    let diaSemana = dias[d.getDay()];
    let dia = d.getDate();
    let mes = meses[d.getMonth()];
    let ano = d.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} ${ano}`;
  }

  function Letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

javascript();
