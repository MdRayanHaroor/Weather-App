const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '144ec120c8msh0b22f4ae4f6723ap1cb817jsnb2cde98c4a45',
		'X-RapidAPI-Host': 'country-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://country-by-api-ninjas.p.rapidapi.com/v1/country?name=United%20States', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));