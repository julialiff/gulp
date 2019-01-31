function CheckWeather(){
    const apiKey = '7ee225c6b5211a94910a3228fe9ef5ed';
    var city = document.getElementById('city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
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
