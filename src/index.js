import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

//component
import ToDoContainer from "./functionBased/components/ToDoContainer"

//stylesheet
import "./stylesheet/App.css"

const element = <h1>Hello from The Other Side</h1>

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ToDoContainer/>,
        </HashRouter>
    </React.StrictMode>, 
    document.getElementById("root"))