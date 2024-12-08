document.getElementById("convert-btn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;
    const output = document.getElementById("output");

    if (isNaN(tempInput) || tempInput === "") {
        output.textContent = "Please enter a valid number.";
        output.style.color = "red";
        return;
    }

    const temp = parseFloat(tempInput);
    let result;

    if (unit === "Celsius") {
        const toFahrenheit = (temp * 9) / 5 + 32;
        const toKelvin = temp + 273.15;
        result = `
            ${temp}°C to Fahrenheit: (${temp} × 9 / 5) + 32 = ${toFahrenheit.toFixed(2)}°F<br>
            ${temp}°C to Kelvin: ${temp} + 273.15 = ${toKelvin.toFixed(2)}K
        `;
    } else if (unit === "Fahrenheit") {
        const toCelsius = ((temp - 32) * 5) / 9;
        const toKelvin = toCelsius + 273.15;
        result = `
            ${temp}°F to Celsius: (${temp} - 32) × 5 / 9 = ${toCelsius.toFixed(2)}°C<br>
            ${temp}°F to Kelvin: ${toCelsius.toFixed(2)} + 273.15 = ${toKelvin.toFixed(2)}K
        `;
    } else if (unit === "Kelvin") {
        const toCelsius = temp - 273.15;
        const toFahrenheit = (toCelsius * 9) / 5 + 32;
        result = `
            ${temp}K to Celsius: ${temp} - 273.15 = ${toCelsius.toFixed(2)}°C<br>
            ${temp}K to Fahrenheit: (${toCelsius.toFixed(2)} × 9 / 5) + 32 = ${toFahrenheit.toFixed(2)}°F
        `;
    }

    output.innerHTML = result;
    output.style.color = "#333";
});
