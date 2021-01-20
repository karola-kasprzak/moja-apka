import React, { Component } from "react";

import {
    AppBar,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";

import "./App.css";
import Counter from "./Counter/Counter";
import Name from "./Name/Name";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dialog: "Subscribe",
            isSubscribed: false,
            contentText:
                "To subscribe to this website, please enter your email address here. We will send updates occasionally.",
            people: ["Jan", "Ania", "Tomek", "Barbara"],
        };
    }
    handleClickOpen = () => {
        this.setState({
            open: !this.state.open,
            isSubscribed: false,
        });
    };

    handleSubstribeText = () => {
        this.setState({ isSubscribed: true });
    };

    render() {
        const dialog = !this.state.open ? this.state.dialog : "Clicked";
        const contentText = !this.state.isSubscribed
            ? this.state.contentText
            : "You are subscribed";

        return (
            <div className="App">
                <AppBar> Menu</AppBar>

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    {dialog}
                </Button>

                <Dialog
                    open={this.state.open}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="subText">
                            {contentText}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleClickOpen}>
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.handleSubstribeText}
                        >
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>

                <Counter initValue="108" />
                <Name />
            </div>
        );
    }
}
export default App;
