import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

export default class weather_app_lwc extends LightningElement {
    cityName = '';
    weatherData;
    error;

    handleCityChange(event) {
        this.cityName = event.target.value;
    }

    async getWeather() {
        
        this.weatherData = null; // Reset weatherData
        this.error = null; // Reset error    
        try {
                this.weatherData  = await getWeatherData({ city: this.cityName });
                
            } catch (error) {
                this.error = 'An error occurred while fetching weather data.';
            }
    }
}

