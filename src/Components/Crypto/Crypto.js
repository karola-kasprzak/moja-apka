import React, { Component } from "react";
import axios from "axios";
import CryptoList from "./CryptoList/CryptoList";

import "./Crypto.css";
import { BottomNavigation } from "@material-ui/core";

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoData: [],
            currencyList: [],
            filterKeys: [],
        };
    }

    getCrypto = () => {
        return axios
            .get("https://blockchain.info/pl/ticker")
            .then((response) => {
                const cryptoRes = response.data;
                let cryptoArr = [];

                cryptoArr = Object.keys(cryptoRes).map((key) => {
                    return {
                        currency: key,
                        buy: cryptoRes[key].buy,
                        sell: cryptoRes[key].sell,
                        symbol: cryptoRes[key].symbol,
                        lastRate: cryptoRes[key].last,
                    };
                });
                // console.log(cryptoArr);

                this.setState({
                    cryptoData: cryptoArr,
                    currencyList: Object.keys(cryptoRes),
                });
            });
        // .catch((err) => console.log(`Error: ${err}`))
        // .then(console.log(this.state.cryptoData))
    };

    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
        this.getCrypto();
        // set Interval - set to 30s
        this.interval = setInterval(this.getCrypto, 30000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }

    addToFilter = (key) => {
        //push item to filter arr
        let newFilerArr = this.state.filterKeys;
        newFilerArr.push(key);
        this.setState({
            filterKeys: newFilerArr,
        });

        //add css styling
        const btnKey = document.getElementById(key);
        btnKey.className = "FilterActive";
    };

    clearFilter = () => {
        //clear filter arr
        this.setState({
            filterKeys: [],
        });

        //remove css styling
        const selectedBtns = [].slice.call(
            document.getElementsByClassName("FilterActive")
        );
        selectedBtns.forEach((btn) => btn.classList.remove("FilterActive"));
    };

    render() {
        //Generating buttons for filtering
        const currencyList = this.state.currencyList.map((item) => {
            return (
                <button
                    id={item}
                    key={item}
                    onClick={() => this.addToFilter(item)}
                >
                    {item}
                </button>
            );
        });

        //cryptoRates will be the props passed to CryptoList
        //filterArr is non-empty ? cryptoData is filtered : cryptoData passed in full
        // const cryptoRates =
        //     this.state.filterKeys.length > 0
        //         ? `filter ${this.state.filterKeys}`
        //         : "show all";
        // console.log(cryptoRates);

        return (
            <div>
                <h1>BitCoin Rates</h1>
                <p className="CurrencyList-Container CryptoList-Container">
                    <button className="ShowAll-Btn" onClick={this.clearFilter}>
                        Show All
                    </button>
                    {currencyList}
                </p>

                <CryptoList
                    filter={this.state.filterKeys}
                    rates={this.state.cryptoData}
                />
            </div>
        );
    }
}

export default Crypto;
