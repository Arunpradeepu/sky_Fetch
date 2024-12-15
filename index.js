const apiKey="e2b18903d9ee7ef357119743e89e663d";


function fetchWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Network response was not ok"+ response.statusText);
            }
            return response.json();
        }

        )
        .then(data=>{
            console.log(data);
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const humidity=data.main.humidity;
            const pressure=data.main.pressure;

            document.getElementById("temperature").textContent= temperature;
            document.getElementById("city").textContent= city;
            document.getElementById("description").textContent= description;
            document.getElementById("windSpeed").textContent= windSpeed;
            document.getElementById("humidity").textContent= humidity;
            document.getElementById("pressure").textContent= pressure;
            
        })
        .catch(error=> console.log("Error",error));
}
fetchWeather("London");

const searchForm=document.getElementById("weatherForm");
const searchInput=document.getElementById("query");

searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    const city=searchInput.value.trim();
    if(city){
        fetchWeather(city);
    }
    else{
        alert("NOT FOUND");
    }
})

if( document.getElementById("description").textContent==="rain"){
    document.body.style.backgroundImage="url('rain.jpeg')";
}