/* -----------Wind Chill Function------------*/

function calculateWindChill(temperature, windSpeed) {
    if (temperature > 50 || windSpeed <= 3) {
        return "N/A";
    }

    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16))
    return windChill.toFixed(1);
    
}

let temperature = 28;
let windSpeed = 6;

let windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = windChill;


/*------------Footer Settings----------------*/

const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;