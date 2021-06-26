import React, {useState, useEffect} from "react"
import ToDosList from "./ToDoList";
import Header from "./Header"
import InputTodo from "./InputToDo";
import {v4 as uuidv4} from "uuid";
import { Route, Switch } from "react-router";
import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch";
import NavBar from "./NavBar";

const ToDoContainer = () => {
    function getInitializeTodos(){
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    const [todos, setTodos] = useState(getInitializeTodos())

    const handleChange = id =>{
        setTodos(prevState => 
            prevState.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        )
    }

    const deleteTodo = id =>{
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    useEffect(() => {
        console.log("test run")

        //getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos)
        }
    }, [setTodos])

    useEffect(() => {
        //storing todo item
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return(
        <>
        <NavBar/>
        <Switch>
        <Route exact path="/">
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo 
                        addTodoProps={addTodoItem}
                    />
                    <ToDosList 
                        todos={todos} 
                        onChangeProps={handleChange}
                        onDeleteProps={deleteTodo}
                        setUpdate={setUpdate}
                    />
                </div>
            </div>
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/*">
            <NotMatch/>
        </Route>
        </Switch>
        </>
    )
}
export default ToDoContainer