import React, { Component } from "react";

class ButtonPanel extends Component {
    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    };
    render() {
        return (
            <div className="button-panel">
                <button onClick={this.props.changeCounterValue}>Add 1</button>
                <button onClick={() => this.resetOrReinitCounter(false)}>
                    ReInit
                </button>
                <button onClick={() => this.resetOrReinitCounter(true)}>
                    Reset
                </button>
            </div>
        );
    }
}
export default ButtonPanel;
