import React, { useState } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;
    try {
      setError(null);
      setWeather(null);
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: 'auto' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}