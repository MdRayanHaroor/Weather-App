const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	
    cityName.innerHTML = city

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality'+ city, options)
	.then(response => response.json())
	.then((respons)=>{

		console.log(response)

		concentration.innerHTML = response.concentration
		aqi.innerHTML = response.aqi
		concentration.innerHTML = response.concentration
		aqi.innerHTML = response.aqi
		concentration.innerHTML = response.concentration
		aqi.innerHTML = responseaqi
		concentration.innerHTML = response.concentration
		aqi.innerHTML = response.aqi
		concentration.innerHTML = response.concentration
		aqi.innerHTML = response.aqi
		concentration.innerHTML = response.concentration
		aqi.innerHTML = response.aqi
		overall_aqi.innerHTML = response.overall_aqi

	})
	.catch(econsole.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")