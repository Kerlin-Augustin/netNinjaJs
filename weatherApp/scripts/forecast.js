let apiKey = 'TCgtTE16utGbYMwXSABlrOyRygAt6AMV'

const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${apiKey}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

const getCity = async (city) => {
  try {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(`${base}${query}`)
    if (!response.ok) {
      throw new Error('could not fetch data')
    }
    const data = await response.json();
    return data[0]
  } catch (err) {
    console.log(err)
  }

}

