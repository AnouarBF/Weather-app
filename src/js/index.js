import getWeather from './data';
import findLocation from './location';
import '../css/style.scss';
import backgroundModifier from './backgrounds';
import {
  discription,
  discription_text,
  text,
  weather_container,
  current_date,
  current_time,
  tempreture,
  temp,
  display,
  weather_icon,
  icons,
  next_weather_container,
  wind,
  speed,
  city,
  location,
  feels,
  level,
  results,
  title,
  geolocation,
} from './dom';

let celsius;
let fahrenheit;

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const city = document.getElementById('city').value;
    title.style.display = 'none';
    discription.style.display = 'block';
    getWeather(city)
      .then((response) => {
        results.style.display = 'flex';

        let weather_discription = response.weather[0].description;
        backgroundModifier(weather_discription);
        discription_text.innerText = weather_discription;

        current_date.innerText = dateModifier();

        celsius = response.main.temp;
        fahrenheit = (celsius * 9) / 5 + 32;
        temp.innerText = `${Math.round(celsius)}°C`;
        display.style.background = 'rgba(0, 100, 255, .5)';

        const icon = response.weather[0].icon;
        weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        location.innerText = `${response.name}, ${response.sys.country}`;
        speed.innerText = `${response.wind.speed}`;
        feels.innerText = `${response.main.feels_like}`;
        level.innerText = `${response.main.humidity}`;
      })
      .catch(() => {
        discription.style.display = 'none';
        results.style.display = 'none';
        setTimeout(() => {
          alert('City not found');
          title.style.display = 'block';
        }, 1000);
      });
  }
});

function dateModifier() {
  let d = new Date();
  let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
  let time = `${d.getHours()}:${d.getMinutes()}`;
  return `${date}, ${time}`;
}

display.addEventListener('click', () => {
  display.classList.toggle('celToFah');
  if (!display.classList.contains('celToFah')) {
    temp.innerText = `${Math.round(fahrenheit)}°F`;
    display.innerText = 'C';
    display.style.background = 'rgba(255, 255, 0, .5)';
  } else {
    temp.innerText = `${Math.round(celsius)}°C`;
    display.innerText = 'F';
    display.style.background = 'rgba(0, 100, 255, .5)';
  }
});

geolocation.addEventListener('click', findLocation);
