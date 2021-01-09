import React, { Component } from "react";
import "./Name.css";

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: ["Jan", "Ania", "Tomek", "Barbara"],
        };
    }

    addNewPerson = (event) => {
        const newPerson = event.target.value;

        if (newPerson !== "") {
            const peopleArr = this.state.people;
            peopleArr.push(newPerson);
            this.setState({
                people: peopleArr,
            });
        }
    };

    removeUser = (event) => {
        const personIndex = event.target.value;
        let peopleArr = this.state.people;
        peopleArr = peopleArr.filter((item, index) => index !== personIndex);
        this.setState({
            people: peopleArr,
        });
    };

    clearInput = (event) => {
        event.target.value = null;
    };
    render() {
        const people = this.state.people.map((item, index) => {
            return (
                <li
                    className="NameItem"
                    key={index}
                    value={index}
                    onClick={this.removeUser}
                >
                    {item}
                </li>
            );
        });
        return (
            <div className="NameContainer">
                {people}
                <label htmlFor="newPerson">Dodaj nowego użytkownika: </label>
                <input
                    type="text"
                    id="newPerson"
                    onBlur={this.addNewPerson}
                    onFocus={this.clearInput}
                />
            </div>
        );
    }
}
export default Name;
