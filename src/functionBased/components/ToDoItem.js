import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react"
import styles from "../../stylesheet/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

const ToDoItem = props => {
    const [editing, setEditing] = useState(false)
    const [isMouseOver, setIsMouseOver] = useState(false);
    const completedStyle = {
        fontStyle:"italic",
        color:"#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    }
    const handleEditing = () => {
        setEditing(true)
    }
    const handleUpdatedDone = event => {
        if(event.key === "Enter"){
            setEditing(false)
        }
    }
    const handleMouseOnDeleteIcon = () => {
        console.log("isMouseOver: ",)
        if(isMouseOver){
            setIsMouseOver(false);
        }else{
            setIsMouseOver(true)
        }
    }
    const {id, title, completed} = props.todo

    let viewMode = {display:"inline"}
    let editMode = {display:"inline"}

    if(editing){
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return(
        <li className={styles.item}>
            <input 
                    type ="checkbox"
                    className={styles.checkbox}
                    checked = {completed}
                    onChange = {()=>props.onChangeProps(id)}
            />
            <div onDoubleClick={handleEditing} style={viewMode}> 
                <button 
                    onClick={() => props.onDeleteProps(id)}
                    onMouseOver={handleMouseOnDeleteIcon}
                    onMouseLeave={handleMouseOnDeleteIcon}>
                        <FaTrash className={isMouseOver ? "delete-icon":""}/>
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type="text" 
                style={editMode} 
                className={styles.textInput}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li> 
    )
}

export default ToDoItem