import weather from "./modules/weather";
import giphy from "./modules/giphy";
import view from "./modules/view";
import { showLoading, hideLoading } from "./modules/loading";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") {
    return;
  } else {
    showLoading();
    
    const weatherData = await weather.getData(searchInput.value);
    
    if (weatherData !== null) {
      view.setSearchResult(weatherData);
      const gifData = await giphy.getData(weatherData.text);
      giphy.displayGiphy(gifData);
    } else {
      alert("Location not found, Please try a different location.");
      hideLoading();
    }
    
    hideLoading();
  }
    
});
