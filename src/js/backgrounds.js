export default function backgroundModifier(weather) {
  if (weather == 'overcast clouds') {
    document.body.style.background = 'url(../assets/overcast-clouds.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'raining') {
    document.body.style.background = 'url(../assets/raining.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'haze') {
    document.body.style.background = 'url(../assets/haze.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'storms') {
    document.body.style.background = 'url(../assets/storms.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'separated clouds') {
    document.body.style.background = 'url(../assets/separated-clouds.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'snowing') {
    document.body.style.background = 'url(../assets/snowing.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'mist') {
    document.body.style.background = 'url(../assets/mist.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (weather == 'light rain') {
    document.body.style.background = 'url(../assets/raining.jpg)';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else {
    document.body.style.background = 'url(../assets/main.jpg) ';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }
}
