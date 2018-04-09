import React, { Component } from 'react';
import {ToDoItem} from './ToDoItem.js'
import {EditItem} from './EditItem.js'

export class ToDoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editIndex : -1,
            toDoItems : [
                <ToDoItem value="todo1aaaa" isDone='true'/>,
                <ToDoItem value="todo2"/>,
                <ToDoItem value="todo3" done='true'/>    
            ]
        }
    }

    removeItem = (index) => {
        this.setState(prevState => ({
            toDoItems: this.state.toDoItems.filter((_, i) => i !== index),
            editIndex : -1
        }));
    }

    addItem = () => {
        this.setState(prevState => ({
            toDoItems: [...prevState.toDoItems, <ToDoItem value="Change this!"/>],
            editIndex : -1
          }))
    }
    modifyItem = (newValue) => {
        var newItems = Object.assign({}, this.state);
        newItems.toDoItems.splice(this.state.editIndex, 1, <ToDoItem value = {newValue}/>)
        //newState.toDoItems[this.state.editIndex] = <ToDoItem value = {newValue}/>;
        this.setState(prevState => ({
            toDoItems: newItems.toDoItems
        }));
    }
        
    render() {
        var that = this;
        return (<div>
            <ul>
            {this.state.toDoItems.map(function(item, index){
                return (
                    <li key={index}>
                        {
                            (that.state.editIndex !== index)
                            ? item
                            : <div class="row"><EditItem 
                                value={item.props.value} 
                                onValueChange={(newValue) => {
                                    that.modifyItem(newValue)
                                }}
                                onSave={() => {
                                    that.setState({ editIndex: -1})
                                }}
                            /></div>
                        }
                    
                        { 
                            that.state.editIndex !== index && 
                            <div>
                                <button className="square" 
                                    onClick={() => {that.setState({ editIndex : index})}}>
                                Edit item
                                </button>
                                <button className="square" 
                                    onClick={() => {that.removeItem(index)}}>
                                Delete item
                                </button>
                            </div>
                        }
                    </li>);
            })}
            </ul>  
            <button className="square" onClick={
                () => { this.addItem() }}>
                 Add item
                </button>
             
        </div>);
    }
}

