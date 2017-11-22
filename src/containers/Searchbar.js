import React, { Component } from 'react';

export default class Searchbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({inputValue: event.target.value});
        console.log(this.state.inputValue);
    }

    render() {
        return(
            <form className='input-group'>

                <input 
                    placeholder='Get a forcast'
                    className='form-control'
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                />

                <span className='input-group-btn'>
                    <button 
                        type='submit' 
                        className='btn btn-secondary'>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}