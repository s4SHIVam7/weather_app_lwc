public with sharing class WeatherController {
    @AuraEnabled(cacheable=true)
    public static String getWeatherData(String city) {
        String baseUrl = 'https://wttr.in/' + city + '?format=3';
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(baseUrl);
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        
        if (response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            return 'Error fetching weather data';
        }
    }
}
