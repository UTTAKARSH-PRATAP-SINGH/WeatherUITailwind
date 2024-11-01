const API_KEY = 'a4d92111db41d48c6c1421ae40c416ef';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch data = await response.json());
        alert(error.message);
        )
    