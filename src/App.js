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
    Toolbar,
    Typography,
} from "@material-ui/core";

import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Counter from "./Components/Counter/Counter";
import Name from "./Components/Name/Name";

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
                <Router>
                    <div className={root}>
                        <AppBar position="static">
                            <Toolbar className="Toolbar">
                                <Typography variant="h5">
                                    React Exercises
                                </Typography>

                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    onClick={this.handleClickOpen}
                                >
                                    {dialog}
                                </Button>
                            </Toolbar>
                            <Toolbar className="Toolbar2">
                                <Link className="Toolbar2-link" to="/">
                                    Home
                                </Link>
                                <Link className="Toolbar2-link" to="/names">
                                    Name List
                                </Link>
                                <Link className="Toolbar2-link" to="/counter">
                                    Counter
                                </Link>
                                <p className="Toolbar2-link">Posts</p>
                            </Toolbar>
                        </AppBar>
                    </div>

                    <Dialog
                        open={this.state.open}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Subscribe
                        </DialogTitle>
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
                            <Button
                                color="primary"
                                onClick={this.handleClickOpen}
                            >
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

                    <Route exact path="/" component={Home} />
                    <Route exact path="/names" component={Name} />
                    <Route
                        path="/counter"
                        render={(props) => (
                            <Counter {...props} initValue={108} />
                        )}
                    />
                </Router>
            </div>
        );
    }
}
export default App;
