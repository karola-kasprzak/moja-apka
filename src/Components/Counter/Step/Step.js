import React, { Component } from "react";

class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepVal: props.step,
        };
    }

    inputChangeHandler = (event) => {
        this.setState({ stepVal: event.target.value });
    };

    render() {
        return (
            <div className="step-panel">
                <label htmlFor="inputStep">Wielkość kroku: </label>
                <input
                    type="number"
                    name="inputStep"
                    id="inputStep"
                    onChange={this.inputChangeHandler}
                />
                <button onClick={() => this.props.change(this.state.stepVal)}>
                    Add {this.state.stepVal}
                </button>
            </div>
        );
    }
}
export default Step;
