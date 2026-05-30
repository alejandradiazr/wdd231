const currentWeather =
document.querySelector("#current-weather");

const forecast =
document.querySelector("#forecast");

const apiKey =
"8a0f37ccd2f2a0b1727e21181192890d";

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=Sogamoso,CO&units=metric&appid=${apiKey}`;

async function apiFetch() {

    try {

        const response =
        await fetch(url);

        const data =
        await response.json();

        displayWeather(data);

    } catch (error) {

        console.error(
        "Weather error:",
        error
        );

    }
}

apiFetch();

function displayWeather(data) {

    currentWeather.innerHTML = `
    <p>
    <strong>
    ${Math.round(data.list[0].main.temp)}°C
    </strong>
    </p>

    <p>
    ${data.list[0].weather[0].description}
    </p>
    `;

    forecast.innerHTML = `
    <p>
    Day 1:
    ${Math.round(data.list[8].main.temp)}°C
    </p>

    <p>
    Day 2:
    ${Math.round(data.list[16].main.temp)}°C
    </p>

    <p>
    Day 3:
    ${Math.round(data.list[24].main.temp)}°C
    </p>
    `;
}