import React, { useState, useEffect } from 'react';
import './App.css';

// example api payload of weather object:
// {
// 	"base": "stations",
// 	"clouds": {
// 		"all": 100
// 	}
// 	"cod": 200,
// 	"coord": {
// 		"lat": 43.7001,
// 		"lon": -79.4163
// 	},
// 	"dt": 1619719470,
// 	"id": 6167865,
// 	"main": {
// 		"feels_like": 49.14,
// 		"humidity": 93,
// 		"pressure": 1006,
// 		"temp": 49.14,
// 		"temp_max": 50,
// 		"temp_min": 48.2
// 	},
// 	"name": "Toronto",
// 	"rain": {
// 		"1h": 1.33
// 	},
// 	"sys": {
// 		"country": "CA",
// 		"id": 718,
// 		"sunrise": 1619691138,
// 		"sunset": 1619741845,
// 		"type": 1
// 	}
// 	"timezone": -14400,
// 	"visibility": 9425,
// 	"weather": [
// 		{
// 			"description": "moderate rain"
// 			"icon": "10d"
// 			"id": 501
// 			"main": "Rain"
// 		}
// 	],
// 	"length": 1,
// 	"wind": {
// 		"deg": 60,
// 		"gust": 2.62,
// 		"speed": 1.63
// 	}
// }

function App () {
	// for getting city name
	const [state, setState] = useState(null);
	// store weather data from api into query
	const [query, setQuery] = useState(null);

	const getWeather = () => {
		const key = '318f23e98ef94568f2ef09d989743573';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=imperial&appid=${key}`;
		console.log(url, 'url');

		fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data, 'data');
			// set data to use query state
			setQuery(data);
			// if page is loaded with this console below, somehow this keeps saying name isn't a thing at this point....
			// but, if i comment out, then load, then uncomment and let the watcher do it's thing.
			// and now hit search again...then it works???
			console.log(query.name, "city name");
		})
	}

	return (
		<div className="page-container">
			<form onSubmit={getWeather}>
				<input type="text" onChange={event => setState(event.target.value)} />

				<input type="submit" value="Submit" />
			</form>

			{/*same goes with this code. it only renders if i save and don't reload.*/}
			{query.name && <p>{query.name}</p>}
		</div>
	);
}

export default App;
