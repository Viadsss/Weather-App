const weather = (() => {
  function convertData(data) {
    const {
      location: { name: cityName, country, localtime },
      current: { temp_c, condition: {text, icon}, precip_mm, humidity, wind_kph }    
    } = data;

    return { cityName, country, localtime, temp_c, text, icon, precip_mm, humidity, wind_kph };
  }

  async function getData(city) {
    const endpoint = `https://api.weatherapi.com/v1/current.json?key=2dbda4d8a93d4366bc671647232706&q=${city}&aqi=no`;
    
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) {
        return null;
      }
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;