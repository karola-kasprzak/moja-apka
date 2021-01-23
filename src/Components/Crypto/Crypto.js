import React, { Component } from "react";
import axios from "axios";
import CryptoList from "./CryptoList/CryptoList";

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoData: null,
            currencyList: null,
            staticCurrencyList: [
                "USD",
                "AUD",
                "BRL",
                "CAD",
                "CHF",
                "CLP",
                "CNY",
                "DKK",
                "EUR",
                "GBP",
                "HKD",
                "INR",
                "ISK",
                "JPY",
                "KRW",
                "NZD",
                "PLN",
                "RUB",
                "SEK",
                "SGD",
                "THB",
                "TRY",
                "TWD",
            ],
        };
    }

    getCrypto = () => {
        return axios
            .get("https://blockchain.info/pl/ticker")
            .then((response) => {
                this.setState({
                    cryptoData: response.data,
                    currencyList: Object.keys(response.data),
                });
            })
            .catch((err) => console.log(err))
            .then(console.log(this.state.cryptoData));
    };

    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
        this.getCrypto();
        // set Interval
        this.interval = setInterval(this.getCrypto, 5000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }

    render() {
        const currencyList =
            this.state.currencyList === null
                ? this.state.staticCurrencyList
                : this.state.currencyList;

        return (
            <div>
                <p>All currencies: {currencyList.join(" ")}</p>
                {/* <CryptoList currency="TEST" buy="0" sell="0" /> */}

                {currencyList.map((item, index) => (
                    <CryptoList
                        key={index}
                        currency={item}
                        // nie dziala poprawnie
                        // buy={this.state.cryptoData.item.buy}
                        // sell={this.state.cryptoData.item.sell}
                    />
                ))}
            </div>
        );
    }
}

export default Crypto;
