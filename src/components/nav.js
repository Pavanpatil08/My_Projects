import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home.js";
import Show from "./show";
import axios from "axios";
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token:this.props.token,
            arr : []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users?page=1',
        })
            .then((response) => {
                this.setState({
                    arr: response.data.data,
                });
            })
            .catch((err) => alert(err))
    }
    render() {

        return (
            <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">{this.props.token}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to ="/nav/home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/nav/create" class="nav-link" href="#">Create <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/" class="nav-link" href="#">Logout <span class="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Route path="/nav/home" component={Home} />
             <Route path="/nav/show/:id" render={(props) => { return (<Show  array={this.state.arr} {...props} />) }} />
             </React.Fragment>
        )
    }
}