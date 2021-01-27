import React from "react";

function CryptoRate(props) {
    const cryptoFilter = props.filter;
    const cryptoRates = props.rates;
    let filteredArray = [];

    if (cryptoFilter.length > 0) {
        for (let i = 0; i < cryptoFilter.length; i++) {
            filteredArray.push(
                cryptoRates.filter((obj) => obj.currency === cryptoFilter[i])
            );
        }
        filteredArray = filteredArray.reduce((a, b) => a.concat(b), []);
    } else {
        filteredArray = cryptoRates;
    }

    const cryptoList = filteredArray.map((crypto) => {
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
