import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import "./Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 0;
        if (!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue, 10);
        }
        this.state = {
            counterValue: initValue,
        };
    }

    changeValue = () => {
        this.setState((prevValue) => {
            return { counterValue: prevValue.counterValue + 1 };
        });
    };

    resetCounter = (resetCounter) => {
        let initValue = 0;
        if (!resetCounter) {
            if (!isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue, 10);
            }
        }
        this.setState({
            counterValue: initValue,
        });
    };
    render() {
        return (
            <div className="CounterPanel">
                <div className="Counter">
                    Licznik:
                    <span className="CounterValue">
                        {this.state.counterValue}
                    </span>
                </div>

                <ButtonPanel
                    changeCounterValue={this.changeValue}
                    resetCounterValue={this.resetCounter}
                />
            </div>
        );
    }
}
export default Counter;
