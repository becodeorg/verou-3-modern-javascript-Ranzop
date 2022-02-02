import Data from "./config.js";
import weekdays from "../modules/weekdays.js";
import resetWeather from "../modules/resetWeather.js";
import globalVariables from "../modules/globalVariables.js";
import createElementCards from "../modules/createElementCards.js";
import regularFluff from "../modules/createElement.js";
import keyupEventEnter from "../modules/keyupEventEnter.js";

// import createElementCards from "../modules/createElementCards.js";
// Event will start on a keyup action
globalVariables.searchBar.addEventListener('keyup', (event) => {

// checking the action for specific key (Enter)
if (event.key === "Enter") {
// Store target in variable
const thisCity = event.currentTarget.value.toLowerCase();
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + Data.key;
event.currentTarget.value = '';
// Fetching first api to get the City coordinates
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
            const lon = data.city.coord.lon;
            const lat = data.city.coord.lat;

            globalVariables.cityNameContainer.innerHTML = data.city.name;

            // Fetching final data according to the coordinates
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" + Data.key)
                .then(response => response.json())
                .then(result => {
                        console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')

                        // Removing all child elements from Container before creating new set of elements
                        resetWeather();

                        // Looping through 5 days of weather data
                        for (let i = 0; i < 5; i++) {

                            // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
                            const date = new Date();
                            console.log(date);
                            let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
                            console.log(dayOfTheWeek);
                            const data = result.daily[i];
                            console.log(data);
                            createElementCards(globalVariables, data, dayOfTheWeek);
                            
                        };
                })
        .catch((error) => {
            // If there are errors, send out an error message
            console.error('Error:', "not a place!");
            while (globalVariables.container.firstChild) {
                globalVariables.container.removeChild(globalVariables.container.firstChild);
            };
            return alert("Are you sure you aren't holding your map upside down?");
        });
    });
};
});

let z = regularFluff ("div", "yooo", globalVariables.container);
console.log(globalVariables.container);
console.log(z);

let x = new String("hello");
console.log (x);
// TODO: create most basic event listener in a module
