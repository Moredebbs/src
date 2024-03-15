function searchInput(event) {
    event.preventDefault();
    let searcher = document.querySelector("#input-search");
    //let city_searcher = document.querySelector("#current-city");
  
    var city = searcher.value;
    let apiKey = "80428f51a21b4t3dfe9d3b547of6cb3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    document.querySelector(".current-city").innerHTML = `${searcher.value}`;
  
    axios.get(apiUrl).then(displayWeather);
  }
  
  let searchHeader = document.querySelector("#search-input");
  searchHeader.addEventListener("submit", searchInput);
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()]; // returns a number representing the day of the week, starting with 0 for Sunday
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${day} ${hours}:${minutes}`;
  
  function displayWeather(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#current-temp");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  }
  