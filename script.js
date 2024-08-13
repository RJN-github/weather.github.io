const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = "b56d2962e4445f9a674b5776df899516"

const searchbar = document.querySelector(".searchbar");
const searchbtn = document.querySelector(".search-btn");
const img = document.querySelector(".weather-img");

async function weather(city) {
    let response = await fetch(`${apiurl + city}&appid=${apikey}`)
    let data = await response.json();
    console.log(data);
    document.querySelector(".cityname").innerHTML=data.name
    document.querySelector(".temp-data").innerHTML = data.main.temp + "°C";
    document.querySelector(".weather-name").innerHTML = data.weather[0].main;
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H"
    document.querySelector(".min-temp").innerHTML = data.main.temp_min + "°C"
    document.querySelector(".max-temp").innerHTML = data.main.temp_max + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    
    if (data.weather[0].main=="Clouds") {
        img.src="images/cloud.svg"
        }
    else if (data.weather[0].main=="Clear") {
        img.src="images/clear.svg"
        }
    else if (data.weather[0].main=="drizzle") {
        img.src="images/drizzle.svg"
        }
    else if (data.weather[0].main=="Rain") {
        img.src="images/rain.svg"
        }

        else{
            img.src = "images/sun-cloud-02-stroke-rounded.svg"
        }
        
    }
    searchbtn.addEventListener("click", ()=>{
        weather(searchbar.value)

        if (searchbar.value=="Madam") {
            let madam = document.querySelector(".mad")
            madam.classList.toggle("madam")
        }
    })



weather();