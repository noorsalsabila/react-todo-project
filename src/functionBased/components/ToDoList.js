import React from "react"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo =>
                    (<ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        onChangeProps={this.props.onChangeProps}
                        onDeleteProps={this.props.onDeleteProps}
                        setUpdate={this.props.setUpdate}
                    />)
                )}
            </ul>
        )
    }
}

export default ToDoList