import React from "react";

function CryptoRate(props) {
    let cryptoList = props.rates.map((crypto) => {
        return (
            <p key={crypto.currency} className="CryptoList-ListItem">
                {crypto.currency} Buy: {crypto.buy} Sell: {crypto.sell}
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
