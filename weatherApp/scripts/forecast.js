class Forecast{
  constructor(){
    this.apiKey = 'TCgtTE16utGbYMwXSABlrOyRygAt6AMV';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city) {
    // 1. The city input gets passed into the getCity param. The return value of the getCity function gets saved into a variable called cityDets. This is an object. That object has a key-value on it that is then used on the getWeather function and saved into a variable called weather. Then updateCity returns the cityDets and weather variables into an object making an object with two objects.
    const cityDets = await this.getCity(city)
    const weather = await this.getWeather(cityDets.Key)
  
    return { cityDets, weather }
  }
  // 1. When you type in a city in the search bar it first gets passed into this functions city para technically. This returns a promise object in json format. 
  async getCity(city){
    try {
      const query = `?apikey=${this.apiKey}&q=${city}`;
      const response = await fetch(`${this.cityURI}${query}`)
      if (!response.ok) {
        throw new Error('could not fetch data')
      }
      const data = await response.json();
      return data[0]
    } catch (err) {
      console.log(err)
    }
  }
  // 2. When the promise object from the getCity funciton fires it gets sent here. This takes in the id number, turns it into a string and returns another promise object.
  async getWeather(id){
    const query = `${id}?apikey=${this.apiKey}`
    const response = await fetch(this.weatherURI + query)
    const data = await response.json()
  
    return data[0]
  }
}

