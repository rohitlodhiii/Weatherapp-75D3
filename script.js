const options = {
  method: 'GET',
  headers: {
    "X-RapidAPI-Key": "b49e7fe6c7mshae0100a98f74c36p111fd7jsna33b524e4b23",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  }
};
const weather = (city) =>{

  bkc.innerHTML = city ;
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
  .then(response => response.json())
  .then(response => {
    b.innerHTML = response.cloud_pct;
    a.innerHTML = response.temp;
    c.innerHTML =response.humidity ;
    d.innerHTML =response.feels_like;
    e.innerHTML =response.wind_speed;
  })
  .catch(err => {
    a.innerHTML = "idk just look outside";
    b.innerHTML = "idk just look outside";
    c.innerHTML ="idk just look outside";
    d.innerHTML ="idk just look outside";
    e.innerHTML ="idk just look outside";
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  weather(city.value);
})
weather("bhopal");









