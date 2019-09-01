import React from 'react';
import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
import Nav from "./nav";
import Login from "./login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token:"",
            email: "",
            password: "",
        }
    }
    handleInputEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handleInputPassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    onSubmit = () => {
        var fields= {
            email:this.state.email,
            password :this.state.password
        }
        axios({
			method: 'POST',
    		url: 'https://reqres.in/api/login',
    		data : fields
		})
		.then((response) =>{
			this.setState({
				access_token :response.data.token
			});	
		})
		.catch((err) => alert(err))

    }

    render() {
        return (
            <Router>
                <Route path="/" exact render={(props) => { return (<Login handleInputEmail={this.handleInputEmail}
                handleInputPassword={this.handleInputPassword}
                onSubmit={this.onSubmit}
                />) }} />
                <Route path="/nav" render={(props) => {return (<Nav token={this.state.access_token} />)}} />
            </Router>

        );
    }
}