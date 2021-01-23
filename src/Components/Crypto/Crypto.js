import React, { Component } from "react";
import axios from "axios";
import CryptoList from "./CryptoList/CryptoList";

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoData: {
                USD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                AUD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                BRL: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "R$",
                },
                CAD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                CHF: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "CHF",
                },
                CLP: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                CNY: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "¥",
                },
                DKK: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "kr",
                },
                EUR: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "€",
                },
                GBP: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "£",
                },
                HKD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                INR: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "₹",
                },
                ISK: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "kr",
                },
                JPY: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "¥",
                },
                KRW: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "₩",
                },
                NZD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                PLN: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "zł",
                },
                RUB: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "RUB",
                },
                SEK: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "kr",
                },
                SGD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "$",
                },
                THB: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "฿",
                },
                TRY: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "₺",
                },
                TWD: {
                    "0m": 0,
                    last: 0,
                    buy: 0,
                    sell: 0,
                    symbol: "NT$",
                },
            },
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
                <CryptoList
                    currency="TEST USD"
                    buy={this.state.cryptoData.USD.buy}
                    sell={this.state.cryptoData.USD.sell}
                />

                {currencyList.map((item, index) => (
                    <CryptoList
                        key={index}
                        currency={item}
                        // nie dziala poprawnie
                        // buy={this.state.cryptoData.{item}.buy}
                        // sell={this.state.cryptoData.item.sell}
                    />
                ))}
            </div>
        );
    }
}

export default Crypto;
