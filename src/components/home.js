import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./home.js";
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
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

		console.log(this.state.mm)
		return(
		<React.Fragment>
                <div className="container bg-dark">
                    <div className="row justify-content-center">
                        <h1 className="text-white d-4">List of Users</h1>
                    </div>
                    <div className="row">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((e) => {
                                    return (
                                        <tr >
                                            <td>
                                                <Link to={`/nav/show/${e.id}`}>{e.id}</Link>
                                            </td>
                                            <td scope="col">{e.email}</td>
                                            <td scope="col">{e.first_name}</td>
                                            <td scope="col">{e.last_name}</td>
                                            <td scope="col"><Link to={`/nav/edit/${e.id}`} className="p-2">link</Link></td>
                                            <td scope="col"><Link to={`/nav/delete/${e.id}`} className="p-2">link</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </React.Fragment>
		);
	}
}