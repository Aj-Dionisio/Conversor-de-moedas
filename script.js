const convertButton = document.getElementById('ButtonConvert');



function converterCurrency(){
    const inputValue = document.getElementById('valor-converter').value;

    const dolarToday = 5.25;     // Example conversion rate
    const euroToday = 5.60;      // Example conversion rate
    const bitcoinToday = 300000; // Example conversion rate
    const realToday = 1;         // Example conversion rate
    const libraToday = 6.00;      // Example conversion rate
    const ieneToday = 0.04;       // Example conversion rate
    const pesoToday = 0.05;      // Example conversion rate

    const convertedValue = inputValue/dolarToday;

    console.log(`Converted value in dollars: ${convertedValue}`);
}

convertButton.addEventListener('click',converterCurrency);