// Get API Data 
const apiData = './rates.json';

// Fetch API Data
fetch(apiData)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.conversion_rates);
        const dataRate = currencies.map((currency) => {
            return `<option>${currency}</option>`
        });
        document.getElementById('from').innerHTML =  dataRate 
        document.getElementById('to').innerHTML =  dataRate 
 });


function convertCurrency() {
    const amount = document.getElementById('inpbox').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    fetch(apiData)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates
            const result = amount * rate[toCurrency] / rate[fromCurrency];

            // Display the result
            document.getElementById('result').innerHTML = result.toFixed(2)
        })
}