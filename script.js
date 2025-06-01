const convertButton = document.getElementById('ButtonConvert');
const currencyToConvert = document.querySelector('.currency-to-convert');// mapeia o elemento HTML onde a moeda a ser convertida será selecionada
const currencySelect = document.querySelector('.currency-converted');// mapeia o elemento HTML onde a moeda convertida será selecionada

function converterValores(){
        const inputValue = parseFloat(document.getElementById('valor-converter').value);// adição do parseFloat para garantir que o valor seja um número decimal
    const CurrencyValueToConvert = document.querySelector('.currency-value-to-convert')// mapeia o elemento HTML onde o valor a ser convertido será exibido 

    const CurrencyValueConverted = document.querySelector('.currency-value')// mapeia o elemento HTML onde o valor convertido será exibido

    console.log(currencyToConvert.value) // exibe no console o valor da moeda a ser convertida;
    console.log(currencySelect.value)// exibe no console o valor da moeda convertida;

    //Exemplos de taxa de conversão
    const dolarToday = 5.25;
    const euroToday = 5.60;
    const bitcoinToday = 120000;
    const realToday = 1;
    const libraToday = 0.86;
    const ieneToday = 0.0077;
    const pesoToday = 0.018;

    if (currencySelect.value === "Dollar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/dolarToday) // o valor convertido será apresentado abaixo da bandeira dos Estados Unidos
    }
    if (currencySelect.value === "Euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/euroToday) // o valor convertido será apresentado abaixo da bandeira da Europa
        
    }
    if (currencySelect.value === "Bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/bitcoinToday) // o valor convertido será apresentado abaixo da bandeira do Bitcoin
    }
    if (currencySelect.value === "Real") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/realToday) // o valor convertido será apresentado abaixo da bandeira do Brasil
    }
    if (currencySelect.value === "Libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/libraToday) // o valor convertido será apresentado abaixo da bandeira do Reino Unido
    }
    if (currencySelect.value === "Iene") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/ieneToday) // o valor convertido será apresentado abaixo da bandeira do Japão
    }
    if (currencySelect.value === "Peso") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
        }).format(inputValue/pesoToday) // o valor convertido será apresentado abaixo da bandeira da Argentina
    }
    


   CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
   }).format(inputValue) 
   // o valor a ser convertido será apresentado abaixo da bandeira do Brasil


    // console.log(convertedValue);
}

convertButton.addEventListener('click', converterValores);


