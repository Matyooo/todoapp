import React, { Component } from 'react';

export class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            done : props.done ? props.done : false
        }
    }

    render() {
        return (
        <div class="row">
            <div class="column1">
                {this.props.value}
            </div>
            <div class="column2">
                {this.state.done ? "done" : "undone"}
                <h3>
                    <button className="square" onClick={() => this.setState({done : true})}>
                    Mark as DONE
                    </button>
                    <button className="square" onClick={() => this.setState({done : false})}>
                    Mark as UNDONE
                    </button>
                </h3>
            </div>
        </div>);
    }
}