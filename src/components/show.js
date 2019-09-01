import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: {},
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }

        })
            .then((response) => {
                var ob = response.data.data;
                console.log(ob.avatar)
                this.setState({
                    arr: response.data.data,
                });
            })
            .catch((err) => alert(err))
    }
   
    render() {
        // console.log(ob.id,ob.avatar)
        console.log(this.state.arr.id)
        console.log(typeof (this.state.arr.id))
        return (
            <React.Fragment>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <form className="text-white bg-dark ">
                            <div class="form-group">
                                {/* <input type="text" name="mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile no." />  */}
                                <img src={this.state.arr.avatar} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputCode">ID</label>
                                <input type="text" class="form-control" id="exampleInputCode" aria-describedby="emailHelp" placeholder="Enter id" name="id" value={this.state.arr.id} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" value={this.state.arr.first_name} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input type="text" name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name " value={this.state.arr.last_name} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.state.arr.email} />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}