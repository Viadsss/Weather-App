/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_giphy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/giphy */ \"./src/modules/giphy.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n/* harmony import */ var _modules_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loading */ \"./src/modules/loading.js\");\n\r\n\r\n\r\n\r\n\r\nconst searchForm = document.getElementById(\"searchForm\");\r\nconst searchInput = document.getElementById(\"searchInput\");\r\nconst searchBtn = document.getElementById(\"searchBtn\");\r\n\r\nsearchForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n});\r\n\r\nsearchBtn.addEventListener(\"click\", async () => {\r\n  if (searchInput.value === \"\") {\r\n    return;\r\n  } else {\r\n    (0,_modules_loading__WEBPACK_IMPORTED_MODULE_3__.showLoading)();\r\n    \r\n    const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(searchInput.value);\r\n    \r\n    if (weatherData !== null) {\r\n      _modules_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setSearchResult(weatherData);\r\n      const gifData = await _modules_giphy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData(weatherData.text);\r\n      _modules_giphy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayGiphy(gifData);\r\n    } else {\r\n      alert(\"Location not found, Please try a different location.\");\r\n      (0,_modules_loading__WEBPACK_IMPORTED_MODULE_3__.hideLoading)();\r\n    }\r\n    \r\n    (0,_modules_loading__WEBPACK_IMPORTED_MODULE_3__.hideLoading)();\r\n  }\r\n    \r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/giphy.js":
/*!******************************!*\
  !*** ./src/modules/giphy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst giphy = (() => {\r\n  async function getData(weatherCondition) {\r\n    const endpoint = `https://api.giphy.com/v1/gifs/translate?api_key=hV5tRiJrT5cxSjliq4ginTRaknGbyvvH&s=${weatherCondition}`;\r\n    try {\r\n      const response = await fetch(endpoint, { mode: \"cors\" });\r\n      if (!response.ok) throw new Error(\"Failed to fetch Giphy data\");\r\n      const data = await response.json();\r\n      \r\n      if (data.data && data.data.images && data.data.images.original) {\r\n        return data.data.images.original.url;\r\n      } else {\r\n        return null;\r\n      }\r\n\r\n    } catch (error) {\r\n      console.error(error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  function displayGiphy(giphyUrl) {\r\n    const weatherGif = document.getElementById(\"weatherGif\");\r\n    weatherGif.src = giphyUrl ? giphyUrl : \"\";\r\n  }\r\n\r\n  return { getData, displayGiphy };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (giphy);\n\n//# sourceURL=webpack://weather-app/./src/modules/giphy.js?");

/***/ }),

/***/ "./src/modules/loading.js":
/*!********************************!*\
  !*** ./src/modules/loading.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideLoading: () => (/* binding */ hideLoading),\n/* harmony export */   showLoading: () => (/* binding */ showLoading)\n/* harmony export */ });\nconst loadingComponent = document.getElementById(\"loadingComponent\");\r\n\r\nconst showLoading = () => {\r\n  loadingComponent.style.display = \"flex\";\r\n};\r\n\r\nconst hideLoading = () => {\r\n  loadingComponent.style.display = \"none\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/loading.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst view = (() => {\r\n  function formatTime(dateString) {\r\n    const dateObj = new Date(dateString);\r\n\r\n    const monthNames = [\r\n      \"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\",\r\n      \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"\r\n    ];\r\n\r\n    const year = dateObj.getFullYear();\r\n    const month = monthNames[dateObj.getMonth()];\r\n    const day = dateObj.getDate();\r\n    const hours = dateObj.getHours();\r\n    const minutes = dateObj.getMinutes();\r\n    const meridiem = hours >= 12 ? \"PM\" : \"AM\";\r\n\r\n    const formattedHours = hours % 12 || 12;\r\n    const formattedMinutes = minutes.toString().padStart(2, '0');\r\n    const formattedDate = `${month} ${day}, ${year} - ${formattedHours}:${formattedMinutes}${meridiem}`;\r\n\r\n    return formattedDate;\r\n  }\r\n\r\n\r\n  function setSearchResult(weatherData) {\r\n    if (!weatherData) return;\r\n\r\n    const searchResult = document.getElementById(\"searchResult\");\r\n    searchResult.classList.add(\"active\");\r\n\r\n    const location = document.getElementById(\"location\");\r\n    const localTime = document.getElementById(\"localTime\");\r\n    const precipitation = document.getElementById(\"precipitation\");\r\n    const humidity = document.getElementById(\"humidity\");\r\n    const windSpeed = document.getElementById(\"windSpeed\");\r\n    const weatherIcon = document.getElementById(\"weatherIcon\");\r\n    const temperature = document.getElementById(\"temperature\");\r\n    const condition = document.getElementById(\"condition\");\r\n\r\n    location.textContent = `${weatherData.cityName}, ${weatherData.country}`;\r\n    const formattedTime = formatTime(weatherData.localtime);\r\n    localTime.textContent = formattedTime;\r\n\r\n    precipitation.textContent = `${weatherData.precip_mm} mm`;\r\n    humidity.textContent = `${weatherData.humidity}%`;\r\n    windSpeed.textContent = `${weatherData.wind_kph} km/h`;\r\n    \r\n    weatherIcon.src = `${weatherData.icon}`;\r\n    weatherIcon.alt = `${weatherData.text}`;\r\n    temperature.textContent = `${weatherData.temp_c}°C`;\r\n    condition.textContent = `${weatherData.text}`;\r\n  }\r\n\r\n  return { setSearchResult };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://weather-app/./src/modules/view.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() => {\r\n  function convertData(data) {\r\n    const {\r\n      location: { name: cityName, country, localtime },\r\n      current: { temp_c, condition: {text, icon}, precip_mm, humidity, wind_kph }    \r\n    } = data;\r\n\r\n    return { cityName, country, localtime, temp_c, text, icon, precip_mm, humidity, wind_kph };\r\n  }\r\n\r\n  async function getData(city) {\r\n    const endpoint = `https://api.weatherapi.com/v1/current.json?key=2dbda4d8a93d4366bc671647232706&q=${city}&aqi=no`;\r\n    \r\n    try {\r\n      const response = await fetch(endpoint, { mode: \"cors\" });\r\n      if (!response.ok) {\r\n        return null;\r\n      }\r\n      const data = convertData(await response.json());\r\n      return data;\r\n    } catch (error) {\r\n      console.error(error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  return { getData };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;