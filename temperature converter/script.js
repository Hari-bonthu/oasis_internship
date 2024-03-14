function convertTemperature() {
    let temperatureInput = document.getElementById("temperature");
    let selectedUnit = document.querySelector('input[name="unit"]:checked').value;

    if (isNaN(temperatureInput.value)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    let temperature = parseFloat(temperatureInput.value);
    let result;

    switch (selectedUnit) {
        case "celsius":
            result = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case "fahrenheit":
            result = {
                celsius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case "kelvin":
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            break;
    }

    displayResult(result);
}

function displayResult(result) {
    let resultText = "Result:";
    for (let unit in result) {
        resultText += ` ${result[unit].toFixed(2)} ${unit.charAt(0).toUpperCase() + unit.slice(1)},`;
    }

    document.getElementById("result").innerHTML = resultText.slice(0, -1);
}