const price_basic = document.getElementById('price_basic');
const price_pro = document.getElementById('price_pro');
const price_premium = document.getElementById('price_premium');
const currency_select = document.getElementById('change_currency');

const changeCurrency = async (currency) => {

    let value

    try {
        const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json', {
            method: "GET",
        });

        if (res.status === 200) {
            const data = await res.json();

            if (currency == "usd") {
                value = data.eur.usd
            }
            if (currency == "eur") {
                value = data.eur.eur
            }
            if (currency == "gbp") {
                value = data.eur.gbp
            }
        }
    } catch (error) {
        console.log(error)
    }

    return value.toFixed(1)
}

currency_select.addEventListener('change', async () => {

    const changedCurrency = await changeCurrency(currency_select.value)
    let proPrice = (changedCurrency * 25).toFixed(1);
    let premPrice = (changedCurrency * 60).toFixed(1);

    if (currency_select.value == 'usd') {
        price_basic.innerText = '$0';
        price_pro.innerText = `$${proPrice}`;
        price_premium.innerText = `$${premPrice}`;
    } else if (currency_select.value == 'gbp') {

        price_basic.innerText = '£0';
        price_pro.innerText = `£${proPrice}`;
        price_premium.innerText = `£${premPrice}`;
    } else {
        price_basic.innerText = '€0';
        price_pro.innerText = '€25';
        price_premium.innerText = '€60';
    }

})




