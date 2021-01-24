import React from "react";

function CryptoRate(props) {
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
