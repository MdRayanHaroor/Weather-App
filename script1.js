const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather1 = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options1)
    .then(response => response.json())
    .then((response) => {                                               

        console.log(response)


        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather1("New York")


//-------------------------------------
const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather2 = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options2)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather2("Dubai")


//-------------------------------------

const options3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather3 = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options3)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather3("Rabat")


//-------------------------------------
const options4 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather4 = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options4)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        cloud_pct6.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
        wind_degrees6.innerHTML = response.wind_degrees
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather4("Islamabad")


//-------------------------------------
const options5 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather5 = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options5)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        cloud_pct7.innerHTML = response.cloud_pct
        temp7.innerHTML = response.temp
        feels_like7.innerHTML = response.feels_like
        humidity7.innerHTML = response.humidity
        min_temp7.innerHTML = response.min_temp
        max_temp7.innerHTML = response.max_temp
        wind_speed7.innerHTML = response.wind_speed
        wind_degrees7.innerHTML = response.wind_degrees
        sunrise7.innerHTML = response.sunrise
        sunset7.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather5("Seoul")


//-------------------------------------