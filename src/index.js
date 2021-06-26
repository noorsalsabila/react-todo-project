import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

//component
import ToDoContainer from "./functionBased/components/ToDoContainer"

//stylesheet
import "./stylesheet/App.css"

const element = <h1>Hello from The Other Side</h1>

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ToDoContainer/>,
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById("root"))