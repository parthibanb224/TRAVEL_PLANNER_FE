import React, { useState, useEffect } from 'react';

function WeatherWidget() {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = 'e434afbe94084e27fc5350b88513161b';
    const city = 'New York'; // Replace with user's location

    useEffect(() => {
        // Fetch weather data from an API (e.g., OpenWeatherMap)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setWeatherData(data));
    }, [city, apiKey]);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl font-semibold mb-4">Weather Forecast</h2>
            {weatherData ? (
                <div>
                    <p className="text-xl">{weatherData.weather[0].description}</p>
                    <p className="text-3xl font-semibold">{Math.round(weatherData.main.temp)}°C</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default WeatherWidget;
