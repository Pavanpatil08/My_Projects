
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/App.js"

ReactDOM.render(
    (<BrowserRouter> 
    	<App /> 
    </BrowserRouter>),document.getElementById("root")
)