import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
                email: '',
                password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Called handleFormSubmit: ', this.state);

        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return(
            <form onSubmit={(event) => {this.handleSubmit(event)}}>
                <h1>Sign In</h1>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        ) 
    }
}

export default SignIn;