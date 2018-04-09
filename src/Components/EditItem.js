import React, { Component } from 'react';

export class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value : props.value
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onValueChange(event.target.value);
    }

    handleSave = (event) => {
        event.preventDefault();
        this.props.onSave();
        return false;
    }

    render() {
        return (<form>
            <label>
              New value:
              <input type="text" size='50' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Save" onClick={this.handleSave}/>
          </form>); 
    }
}