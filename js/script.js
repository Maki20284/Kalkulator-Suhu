let selectedOption = '';

function selectOption(option) {
    selectedOption = option;
    console.log('Selected option:', selectedOption);

    document.getElementById('celciusB').style.backgroundColor = (option === 'celcius') ? '#F6B484' : '';
    document.getElementById('fahrenheitB').style.backgroundColor = (option === 'fahrenheit') ? '#F6B484' : '';
}

function submit() {
    if (selectedOption) {
        if (selectedOption === 'celcius') {
            window.location.href = 'celcius.html';
        } else if (selectedOption === 'fahrenheit') {
            window.location.href = 'fahrenheit.html';
        } else {
            alert('Invalid selection.');
        }
    } else {
        alert("Please select a choice before submitting!");
    }
}

function back(){
    window.location.href = 'index.html';
}

function convertCelcius(){
    let celciusValue = document.getElementById("input-celcius").value;
    let celciusNum = Number(celciusValue);
    let fahrenheit = (celciusNum * (9/5)) + 32;
    let fahrenheitString = fahrenheit.toString();
    document.getElementById("output-fahrenheit").value = fahrenheitString;
    document.getElementById("calculation-fahrenheit").value = `${celciusValue}℃ * (9/5) + 32 = ${fahrenheitString}℉`
}

function convertFahrenheit(){
    let fahrenheitValue = document.getElementById("input-fahrenheit").value;
    let fahrenheitNum = Number(fahrenheitValue);
    let celcius = (fahrenheitNum - 32) * (5/9);
    let celciusString = celcius.toString();
    document.getElementById("output-celcius").value = celciusString;
    document.getElementById("calculation-celcius").value = `(${fahrenheitValue}℉ - 32) * (5/9) = ${celciusString}℃`
}

function resetCelcius(){
    // celciusNum = 0;
    // fahrenheit = 0;
    
    document.getElementById("input-celcius").value = '';
    document.getElementById("output-fahrenheit").value = '';
    document.getElementById("calculation-fahrenheit").value = '';
}

function resetFahrenheit(){
    // celcius = 0;
    // fahrenheitNum = 0;

    document.getElementById("input-fahrenheit").value = '';
    document.getElementById("output-celcius").value = '';
    document.getElementById("calculation-celcius").value = '';
}

function validateForm() {
    const temperatureInput = document.getElementById('temperature');
    const errorMessage = document.getElementById('error-message');
    const temperatureValue = parseFloat(temperatureInput.value);

    errorMessage.textContent = '';

    if (isNaN(temperatureValue)) {
        errorMessage.textContent = 'Please enter a valid number.';
        return false;
    }

    if (temperatureValue < -273.15) {
        errorMessage.textContent = 'Temperature cannot be below absolute zero (-273.15°C).';
        return false;
    }

    return true;
}