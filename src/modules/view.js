const view = (() => {
  function formatTime(dateString) {
    const dateObj = new Date(dateString);

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const year = dateObj.getFullYear();
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedDate = `${month} ${day}, ${year} - ${formattedHours}:${formattedMinutes}${meridiem}`;

    return formattedDate;
  }


  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.getElementById("searchResult");
    searchResult.classList.add("active");

    const location = document.getElementById("location");
    const localTime = document.getElementById("localTime");
    const precipitation = document.getElementById("precipitation");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const weatherIcon = document.getElementById("weatherIcon");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");

    location.textContent = `${weatherData.cityName}, ${weatherData.country}`;
    const formattedTime = formatTime(weatherData.localtime);
    localTime.textContent = formattedTime;

    precipitation.textContent = `${weatherData.precip_mm} mm`;
    humidity.textContent = `${weatherData.humidity}%`;
    windSpeed.textContent = `${weatherData.wind_kph} km/h`;
    
    weatherIcon.src = `${weatherData.icon}`;
    weatherIcon.alt = `${weatherData.text}`;
    temperature.textContent = `${weatherData.temp_c}°C`;
    condition.textContent = `${weatherData.text}`;
  }

  return { setSearchResult };
})();

export default view;