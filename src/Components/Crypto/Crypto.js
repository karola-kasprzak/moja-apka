import React, { Component } from "react";
import axios from "axios";
import CryptoList from "./CryptoList/CryptoList";

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoData: {},
            currencyList: [],
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
        return (
            axios
                .get("https://blockchain.info/pl/ticker")
                // .then(response => response.json())
                .then((response) => {
                    this.setState({
                        cryptoData: response.data,
                        currencyList: Object.keys(response.data),
                    });
                })
                .catch((err) => console.log(err))
        );
    };

    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
        this.getCrypto();
        console.log(this.state.cryptoData.AUS);
        // set Interval
        this.interval = setInterval(this.getCrypto, 50000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }

    render() {
        const currencyList = this.state.staticCurrencyList;
        console.log(currencyList);

        // currencyList === undefined ? console.log("undefined") : null;

        // console.log(
        //     "🚀 ~ file: Crypto.js ~ line 42 ~ Crypto ~ render ~ currencyList",
        //     currencyList
        // );

        // const test = typeof this.state.cryptoData.USD;
        // console.log(
        //     "🚀 ~ file: Crypto.js ~ line 48 ~ Crypto ~ render ~ test",
        //     test
        // );

        // console.log(this.state.currencyList);
        return (
            <div>
                <p>Crypto</p>
                <p>{currencyList.join(" ")}</p>
                <CryptoList currency="PL" buy="23.11" sell="24.12" />

                {currencyList.map((item) => (
                    <CryptoList
                        currency={item}
                        buy={"this.state.cryptoData.item.buy"}
                        // sell={this.state.cryptoData.item.sell}
                    />
                ))}
            </div>
        );
    }
}

export default Crypto;
