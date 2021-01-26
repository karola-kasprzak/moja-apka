import React from "react";

function CryptoRate(props) {
    const cryptoFilter = props.filter;
    const cryptoRates = [...props.rates];
    // console.log(cryptoFilter, cryptoRates);

    const crypto =
        cryptoFilter.length > 0
            ? `filter ${cryptoFilter}`
            : "show all:" + cryptoRates;
    // console.log(crypto);

    // let test = cryptoRates.findIndex((crypto) => {
    //     return crypto.currency === "EUR";
    // });
    // console.log(test);

    // const test3 = cryptoRates.filter((crypto) => crypto.currency === "PLN");
    // console.log(
    //     "🚀 ~ file: CryptoList.js ~ line 20 ~ CryptoRate ~ test3",
    //     test3
    // );

    let test = [];
    for (let i = 0; i < cryptoFilter.length; i++) {
        test.push(
            cryptoRates.filter((crypto) => crypto.currency === cryptoFilter[i])
        );
    }
    console.log(test.flat());

    let cryptoList = props.rates.map((crypto) => {
        return (
            <p key={crypto.currency} className="CryptoList-ListItem">
                <span>{crypto.currency}</span>
                <span>Buy: {crypto.buy}</span>
                <span>Sell: {crypto.sell}</span>
            </p>
        );
    });

    return (
        <div className="CryptoList-Container">
            <div className="CryptoList-List"> {cryptoList} </div>
        </div>
    );
}

export default CryptoRate;
