import React from "react";

function CryptoRate(props) {
    return (
        <div>
            <p>
                {props.currency} Buy: {props.buy} Sell: {props.sell}
            </p>
        </div>
    );
}

export default CryptoRate;
