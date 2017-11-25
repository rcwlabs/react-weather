import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();

        // call callback function and send term back to App
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return(
            <div>
                <form 
                    className='input-group'
                    onSubmit={this.handleOnSubmit}
                >
                    <input placeholder='Get a forecast'
                        value={this.state.term} 
                        onChange={this.handleInputChange}/>
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary'>Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);