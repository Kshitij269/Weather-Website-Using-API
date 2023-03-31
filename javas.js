// http://api.weatherapi.com/v1/current.json?key=a47d6172e40e4148b9543759233103&q=London&aqi=yes
// http://api.weatherapi.com/v1/forecast.json?key=a47d6172e40e4148b9543759233103&q=London&days=1&aqi=yes&alerts=no

 

const temperatureField = document.querySelector("#temperature");
const locationField = document.querySelector("#location"); 
const searchField = document.querySelector("#query");
const timeField = document.querySelector("#time");
const conditionField = document.querySelector("#condition");
const form = document.querySelector('.search')
const imageField=document.querySelector('image')
const winddataField = document.querySelector("#wind-data");
const winddirectionField = document.querySelector("#wind-direction-data");
const precipitationField = document.querySelector("#precipitaion-data");
const pressureField = document.querySelector("#pressure-data");
const humidityField = document.querySelector("#humidity-data");

const sunriseField = document.querySelector(".sunrise-data");
const sunsetField = document.querySelector(".sunset-data");
const maxtempField = document.querySelector(".maxtemp-data");
const mintempField = document.querySelector(".mintemp-data");
const pm2Field = document.querySelector(".pollution-data");

form.addEventListener('submit',searchForLocation)

const fetchResults = async(targetLocation) =>{

    let url1=`http://api.weatherapi.com/v1/forecast.json?key=a47d6172e40e4148b9543759233103&q=${targetLocation}&days=1&aqi=yes&alerts=no`
    const res1 = await fetch(url1)
    const data1 = await res1.json()
    console.log(data1)

    let url2=`http://api.weatherapi.com/v1/current.json?key=a47d6172e40e4148b9543759233103&q=${targetLocation}&aqi=yes`
    const res2 = await fetch(url2)
    const data2 = await res2.json()
    console.log(data1)

    let temperature = data2.current.temp_c
    let location = data2.location.name
    let time = data2.location.localtime
    let conditon = data2.current.condition.text

    let windspeed=data2.current.wind_kph
    let winddirection=data2.current.wind_dir
    let precipitation=data2.current.precip_mm
    let pressure=data2.current.pressure_mb
    let humidity=data2.current.humidity
    
   // let image= data1.current.condition.icon

    let maxtemp = data1.forecast.forecastday[0].day.maxtemp_c
    let mintemp = data1.forecast.forecastday[0].day.mintemp_c
    let sunrise = data1.forecast.forecastday[0].astro.sunrise
    let sunset = data1.forecast.forecastday[0].astro.sunset
    let pm2=data1.current.air_quality.pm2_5

    console.log(maxtemp,mintemp)
    updateDetails(temperature,time,conditon,location,windspeed,winddirection,precipitation,pressure,humidity,maxtemp,mintemp,sunrise,sunset,pm2)
}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}

function updateDetails(temp,time,condition,location,windspeed,winddirection,precipitation,pressure,humidity,maxtemp,mintemp,sunrise,sunset,pm2){
    temperatureField.innerText=temp
    locationField.innerText=location
    timeField.innerText=time
    conditionField.innerText=condition

    winddataField.innerText=windspeed
    winddirectionField.innerText=winddirection
    precipitationField.innerText=precipitation
    pressureField.innerText=pressure
    humidityField.innerText=humidity

    sunriseField.innerText=sunrise
    sunsetField.innerText=sunset
    pm2Field.innerText=pm2
    maxtempField.innerText=maxtemp
    mintempField.innerText=mintemp
    }