async function getWeather(city, info = "all") {

    let cities = Array.isArray(city) ? city : [city];

    for (let c of cities) {
        try {
            let url = `http://localhost:3000/weather?city=${c}`;
            if (info && info !== "all") {
                url += `&info=${info}`;
            }

            let response = await fetch(url);
            let data = await response.json();

            console.log(`CITY: ${data.city}`);

            let weather = data.weather;

            if (weather.wind) {
                console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
                if (weather.wind.speed > 15) {
                    console.log("WARNING! Wind speed over 15 m/s");
                }
            }

            if (weather.clouds !== undefined) {
                console.log(`CLOUDS: ${weather.clouds} %`);
            }

            if (weather.temp !== undefined) {
                console.log(`TEMP: ${weather.temp} C`);
                if (weather.temp < -20) {
                    console.log("WARNING! Temperature below -20 degrees");
                }
            }

            if (weather.precipitation !== undefined) {
                console.log(`PRECIPITATION: ${weather.precipitation} %`);
            }

            console.log("");

        } catch (err) {
            console.log(err.message);
        }
    }
}

let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C  
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %