const convertButton = document.getElementById('ButtonConvert');

function converterValores(){
        const inputValue = parseFloat(document.getElementById('valor-converter').value);// adição do parseFloat para garantir que o valor seja um número decimal
    const CurrencyValueToConvert = document.querySelector('.currency-value-to-convert')// mapeia o elemento HTML onde o valor a ser convertido será exibido 

    const CurrencyValueConverted = document.querySelector('.currency-value')// mapeia o elemento HTML onde o valor convertido será exibido


    //Exemplos de taxa de conversão
    const dolarToday = 5.25;
    const euroToday = 5.60;
    const bitcoinToday = 120000;
    const realToday = 1;
    const libraToday = 0.86;
    const ieneToday = 0.0077;
    const pesoToday = 0.018;


    const convertedValue = inputValue/dolarToday

   CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
   }).format(inputValue) 
   // o valor a ser convertido será apresentado abaixo da bandeira do Brasil
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
    }).format(convertedValue) // o valor convertido será apresentado abaixo da bandeira dos Estados Unidos


    // console.log(convertedValue);
}

convertButton.addEventListener('click', converterValores);


