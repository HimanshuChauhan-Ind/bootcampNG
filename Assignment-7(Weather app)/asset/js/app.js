//Accessing the placeholders for temperature data
const tempMain = document.querySelector("#temp");
const weather = document.querySelector("#weather");
const maxmin = document.querySelector("#maxmin");
const place = document.querySelector("#place");
const day = document.querySelector("#date");

//Fetching the data from api
const weatherData = async (city, appID) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=935051e1314d0c063af3ef1d232bd24c&units=metric`
  );
  const data = await response.json();

  //Date calculation
  const time = data.dt + data.timezone;
  var myDate = new Date(time * 1000);
  date = myDate.toString().substring(0, 16);
  day.innerText = date;

  place.innerText = `${locale.value.toUpperCase()},${data.sys.country}`;
  tempMain.innerText = `${data.main.temp}°C`;

  maxmin.innerText = `${data.main.temp_max}°C / ${data.main.temp_min}°C `;
  //Weather type
  const weatherType = `${data.weather[0].main}`;
  console.log(weatherType);
  if (weatherType == "Clouds") {
    weather.innerHTML = `<i class="fas fa-cloud"></i> ${weatherType}`;
  }
  if (weatherType == "Dust") {
    weather.innerHTML = `<i class="fas fa-sun-dust"></i> ${weatherType}`;
  }
  if (weatherType == "Haze") {
    weather.innerHTML = `<i class="fas fa-smog"></i>  ${weatherType}`;
  }
  if (weatherType == "Clear") {
    weather.innerHTML = `<i class="fas fa-sun"></i>  ${weatherType}`;
  }
  if (weatherType == "Snow") {
    weather.innerHTML = `<i class="far fa-snowflake"></i>  ${weatherType}`;
  }

  locale.value = "";
};

// //Reading the input box
const locale = document.querySelector("#locale");
console.log(locale);
locale.addEventListener("keydown", async (e) => {
  if (e.code === "Enter") {
    const city = locale.value;
    weatherData(city).catch(() => {
      console.log(alert`Enter Valid City or watch out for spaces`); //Runs when the city is not found
    });
  }
});
