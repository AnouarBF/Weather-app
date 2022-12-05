export const myKey = '8a4719c2e88aaf4f1aaaf8b748172ba3';

async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myKey}&units=metric
    `,
    { mode: 'cors' }
  );
  const myData = await response.json();

  return myData;
}

export default getWeather;
