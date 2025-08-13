'const input = document.querySelector('.currencyValue')
const paragraph = document.querySelector('.valueCurrencyConvert')
const valueConverted = document.querySelector('.valueConverted')
const image = document.querySelector('#flagConvert')
const imageConverted = document.querySelector('#flagConverted')
const currencySelectConvert = document.querySelector('#currencyConvert')
const currencySelectConverted = document.querySelector('#currencyConverted')

const CURRENCY_VALUE = {
    DOLLAR: 5.43,
    EURO: 6.33,
}

const euroConta = input.value / CURRENCY_VALUE.EURO


function conta() {
    paragraph.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)

    const dollarConta = input.value / CURRENCY_VALUE.DOLLAR

    if (currencySelectConvert.value == 'dollar') {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dollarConta)

    }


}

function changeCurrencyConvert() {
    if (currencyConvert.value == 'euro') {
        image.innerHTML = image.src = "./Assets/Euro.png"
    } else if (currency convert.value == 'dollar' ) {
        image.innerHTML = image.src = "./Assets/Dollar.png"
    } else {
        image.innerHTML = image.src = "./Assets/Real.png"
    }

}

function changeConvertedCurrency() {
    if (currencySelectConvert.value === 'dollar') {
        image.innerHTML = imageConverted.src = "./Assets/Real.png"
    } else if (currencySelectConvert.value === 'euro') {
        image.innerHTML = imageConverted.src = "./Assets/Euro.png"

    } else {
        image.innerHTML = imageConverted.src = "./Assets/Real.png"
    }

}

