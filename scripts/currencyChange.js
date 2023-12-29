const price_basic = document.getElementById('price_basic');
const price_pro = document.getElementById('price_pro');
const price_premium = document.getElementById('price_premium');
const eur_btn = document.getElementById('eur');
const usd_btn = document.getElementById('usd');
const gbp_btn = document.getElementById('gbp');
const currency_select = document.getElementById('change_currency')

const api_url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';

const changeCurrency = async (url, currency) => {

    let value

    try {
        const res = await fetch(url, {
            method: "GET",
            params: {
                api: "TRUE",
                functionName: "getFields",
                field_id: "occur",
                list_id: "occurrence",
                empty_title: "SKIP",
                data_type: 1,
            },
        });

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)

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

    const changedCurrency = await changeCurrency(api_url, currency_select.value)
    let proPrice = (changedCurrency * 25).toFixed(1);
    let premPrice = (changedCurrency * 60).toFixed(1);

    if (currency_select.value == 'usd') {

        price_basic.innerHTML = `$0`;
        price_pro.innerHTML = `$${proPrice}`;
        price_premium.innerHTML = `$${premPrice}`;
    } else if (currency_select.value == 'gbp') {

        price_basic.innerHTML = `£0`;
        price_pro.innerHTML = `£${proPrice}`;
        price_premium.innerHTML = `£${premPrice}`;
    } else {
        price_basic.innerHTML = '€0';
        price_pro.innerHTML = '€25';
        price_premium.innerHTML = '€60';
    }

})




