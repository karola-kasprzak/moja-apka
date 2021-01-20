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
                <input
                    type="number"
                    name=""
                    id=""
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
