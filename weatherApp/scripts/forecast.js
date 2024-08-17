let apiKey = 'TCgtTE16utGbYMwXSABlrOyRygAt6AMV'

// 2. When the promise object from the getCity funciton fires it gets sent here. This takes in the id number, turns it into a string and returns another promise object.
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${apiKey}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

// 1. When you type in a city in the search bar it first gets passed into this functions city para technically. This returns a promise object in json format. 

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

