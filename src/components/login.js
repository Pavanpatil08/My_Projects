import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            arr: [],
        }
    }
    render() {

        return (

            <div class="container">
                <form className="text-white">
                    <div class="form-group">
                        <label for="exampleInputEmail1">email</label>
                        <input type="text" name="email" onChange={this.props.handleInputEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.props.email} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">password</label>
                        <input type="password" name="password" onChange={this.props.handleInputPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" value={this.props.password} />
                    </div>
                   <Link to="/nav"> <button type="button" class="btn btn-primary" onClick={this.props.onSubmit}>Submit</button></Link>
 
                </form>
            </div>



        );
    }
}