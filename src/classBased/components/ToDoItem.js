import { render } from "@testing-library/react";
import React, { Component } from "react"
import styles from "../stylesheet/TodoItem.module.css";

class ToDoItem extends Component{
    //state
    state = {
        editing: false
    }
    //styling
    completedStyle = {
        fontStyle:"italic",
        color:"#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    }
    //event handling
    handleEditing = () => {
        this.setState({
            editing: true
        })
        console.log("editing...")
    }
    
    handleUpdatedDone = event => {
        if(event.key === "Enter"){
            this.setState({editing: false})
        }
    }

    componentWillUnmount(){
        console.log("Clean up!")
    }
    render(){
        //variables
        const {id, title, completed} = this.props.todo;
        //Hide and show edit mode
        let viewMode = {}
        let editMode = {}
        if(this.state.editing){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
        <li className={styles.item}>
            <input 
                    type ="checkbox"
                    className={styles.checkbox}
                    checked = {completed}
                    onChange = {()=>this.props.onChangeProps(id)}
            />
            <div onDoubleClick={this.handleEditing} style={viewMode}> 
                <button onClick={() => this.props.onDeleteProps(id)}>
                    Delete
                </button>
                <span style={completed ? this.completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type="text" 
                style={editMode} 
                className={styles.textInput}
                value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
            />
        </li>
        )
    }
};

export default ToDoItem