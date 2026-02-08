const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');

const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.value === '' || inputValue.value <= 0) {
        alert('Please enter a valid value.');
        return;
    } else if (!selectedCurrency.value) {
        alert('Please select a currency.');
        return;
    }
    converter();
}

function converter(){
    if (selectedCurrency.value === 'USD') {
        valueConverted = inputValue.value / 5.22;
        result.innerHTML =  valueFormatter('en-US', 'USD');

        animateResult();
    } else if (selectedCurrency.value === 'EUR') {
        valueConverted = inputValue.value / 6.17;
        result.innerHTML =  valueFormatter('de-DE', 'EUR');

        animateResult();
    } else if (selectedCurrency.value === 'LIB') {
        valueConverted = inputValue.value / 7.10;
        result.innerHTML =  valueFormatter('en-GB', 'GBP');

        animateResult();
    }else if (selectedCurrency.value === 'CNY') {
        valueConverted = inputValue.value / 0.75;
        result.innerHTML = valueFormatter('zh-CN', 'CNY');

        animateResult();
    }
}

function valueFormatter(Locale, currency){
    const value = valueConverted.toLocaleString(`${Locale}`, { style: 'currency', currency: `${currency}` });
    return `<p>${value}</p>`;
}

function animateResult(){
    return result.animate([
        {transform: 'translateY(-50px)'},
        {transform: 'translateY(0px)'}
    ], {duration: 500})
}