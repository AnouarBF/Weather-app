import { city } from './dom';
const myGeoKey = 'bdc_1e244ad23137432a8a1a0e1ffb65f509';

export default function findLocation() {
  const success = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${long}&localityLanguage=en&key=${myGeoKey}`,
      { mode: 'cors' }
    )
      .then((res) => res.json())
      .then((data) => {
        city.value = data.city;
      });
  };

  const error = () => {
    alert('Unable to retrieve your location.');
  };

  navigator.geolocation.getCurrentPosition(success, error);
}
