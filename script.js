const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)


        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Bangalore")


//-------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city");
    const citySuggestions = document.getElementById("citySuggestions");
    const submitButton = document.getElementById("submit");
    const status = document.getElementById("status");
    const cityNameElement = document.getElementById("cityName");

    // Mock data for suggestions
    const cities = [
        // Indian Cities
        "Bangalore", "Chennai", "Delhi", "Mumbai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur",
    
        // American Cities
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas",
        "San Jose", "San Francisco", "Miami", "Boston", "Atlanta", "Washington", "Seattle", "Denver", "Las Vegas",
        "Orlando", "Austin", "Detroit", "Nashville", "Portland", "Oklahoma City",
    
        // Canadian Cities
        "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton",
        "Victoria",
    
        // South American Cities
        "Sao Paulo", "Buenos Aires", "Rio de Janeiro", "Lima", "Bogota", "Santiago", "Caracas", "Montevideo",
        "Quito", "La Paz", "Asuncion", "Brasilia", "Medellin", "Guayaquil",
    
        // European Cities
        "London", "Paris", "Berlin", "Madrid", "Rome", "Vienna", "Amsterdam", "Brussels", "Stockholm", "Zurich", "Dublin",
        "Copenhagen", "Lisbon", "Prague", "Warsaw", "Budapest", "Athens", "Oslo", "Helsinki", "Edinburgh",
    
        // Asian Cities
        "Dubai", "Rabat", "Islamabad", "Lahore", "Karachi", "Seoul", "Tokyo", "Beijing", "Shanghai", "Hong Kong", "Singapore", "Bangkok",
        "Kuala Lumpur", "Jakarta", "Manila", "Hanoi", "Taipei", "Dhaka", "Riyadh", "Tehran", "Baghdad", "Kuwait City",
    
        // African Cities
        "Cairo", "Lagos", "Johannesburg", "Cape Town", "Nairobi", "Algiers", "Casablanca", "Accra", "Addis Ababa",
        "Dar es Salaam", "Kampala", "Luanda", "Dakar", "Abidjan", "Khartoum", "Tunis", "Lusaka", "Harare",
    
        // Oceanian Cities
        "Sydney", "Melbourne", "Brisbane", "Perth", "Auckland", "Wellington", "Christchurch", "Adelaide", "Gold Coast",
        "Canberra"
    ];
    

    cityInput.addEventListener("input", () => {
        const value = cityInput.value.toLowerCase();
        citySuggestions.innerHTML = "";

        if (value) {
            const filteredCities = cities.filter(city => city.toLowerCase().startsWith(value));
            filteredCities.forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                citySuggestions.appendChild(option);
            });
        }
    });
});
