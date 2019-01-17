function CheckWeather(){
    var city = document.getElementById('city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${'dce13a58af67fb1eec0338ff5aa501e2'}`;
    var request = new XMLHttpRequest();
    
    request.open('GET', url, true);
    request.onload = function () {
        var weather = JSON.parse(this.response);
        console.log(weather);
        if (request.status >= 200 && request.status < 400) {
            let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            alert(weatherText);
            document.getElementById('resp').value = weatherText;
        } else {
            document.getElementById('resp').value = ('Oops something went wrong :(');
        }
    }
    request.send();
}

