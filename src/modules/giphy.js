const giphy = (() => {
  async function getData(weatherCondition) {
    const endpoint = `https://api.giphy.com/v1/gifs/translate?api_key=hV5tRiJrT5cxSjliq4ginTRaknGbyvvH&s=${weatherCondition}`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error("Failed to fetch Giphy data");
      const data = await response.json();
      
      if (data.data && data.data.images && data.data.images.original) {
        return data.data.images.original.url;
      } else {
        return null;
      }

    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function displayGiphy(giphyUrl) {
    const weatherGif = document.getElementById("weatherGif");
    weatherGif.src = giphyUrl ? giphyUrl : "";
  }

  return { getData, displayGiphy };
})();

export default giphy;