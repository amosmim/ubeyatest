import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {Login} from './Login';
import {Feed} from "./Feed";

class App extends Component {
    constructor() {
        super();
        this.state = {login:false};

        this.changeLogStatus = this.changeLogStatus.bind(this);
    }

    changeLogStatus() {
        this.setState ({login: true});
    }

    render() {
        let main = this.state.login ? <Feed/> : <Login changeLogStatus={this.changeLogStatus}/> ;
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to Ubeya</h1>
                    </header>
                    {main}
                </div>
        );

  }
}

export default App;
