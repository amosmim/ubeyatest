import React, { Component } from 'react';
import {details} from "./passwords";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {username:"", password:"", massage:""};

        // binding methods:
        this.changePassword= this.changePassword.bind(this);
        this.changeUsername= this.changeUsername.bind(this);
        this.checkPassword= this.checkPassword.bind(this);
    }

    changeUsername(e) {
        let input = e.target.value;
        this.setState ({username:input})
    }

    changePassword(e) {
        let input = e.target.value;
        this.setState ({password:input})
    }

    checkPassword() {
        if ((this.state.username === details.username) && (this.state.password=== details.password)) {
            // ok!
            this.props.changeLogStatus();
           // this.setState({massage:'yey!'});
        } else {
            this.setState({massage:'wrong user or password'});
        }
    }

    render () {
        return (<div>
                    <div>
                        <h2>username</h2>
                        <input type="text" onChange={this.changeUsername} />
                    </div>
                    <div>
                        <h2>password</h2>
                        <input type="text" onChange={this.changePassword} />
                    </div>
                    <div>
                        <button onClick={this.checkPassword}>Login</button>
                    </div>
                    <div>
                        <p>{this.state.massage}</p>
                    </div>

            </div>

        );
    }
}