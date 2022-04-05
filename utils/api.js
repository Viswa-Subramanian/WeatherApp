export const fetchLocationId = async city =>{
    const response = await fetch(`https://www.metaweather/api/location/search/query=${city}`);
    const location = await response.json();
    return location[0].woeid;

}
export const fetchWeather = async woeid =>{
    const response=await fetch(`http://www.metaweather.com/api/location/${woeid}/`);
    const { title, consolidated_weather } = await response.json();
    const {weather_state_name, the_temo} =consolidated_weather[0];
    return{
        location:title,
        weather: weather_state_name,
        temperature: the_temp,
    };
}