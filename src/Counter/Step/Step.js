import React, { Component } from "react";

class Step extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         stepValue: props.step,
    //     };
    // }

    render() {
        let stepValue = this.props.step;
        const inputChangeHandler = (event) => {
            return (stepValue = event.target.value);
        };

        console.log(stepValue);
        return (
            <div className="step-panel">
                <input
                    type="number"
                    name=""
                    id=""
                    onChange={inputChangeHandler}
                />
                <button onClick={() => this.props.change(3)}>
                    Add {stepValue}
                </button>
            </div>
        );
    }
}
export default Step;
