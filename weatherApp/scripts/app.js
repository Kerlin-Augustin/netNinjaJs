const form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

  // const cityDets = data.cityDets
  // const weather = data.weather

  // destructuring properties
  const {cityDets, weather} = data

  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;${weather.Temperature.Imperial.Unit}</span>
    </div>`;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  
    time.setAttribute('src', timeSrc)

    if(card.classList.contains('d-none')){
      card.classList.remove('d-none')
    }

}

async function updateCity(city) {
  const cityDets = await getCity(city)
  const weather = await getWeather(cityDets.Key)

  return { cityDets, weather }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const city = form.city.value.trim()
  form.reset()

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

})