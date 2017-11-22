import React, { Component } from 'react';

import Searchbar from '../containers/Searchbar';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div>
                <h2>This is the app</h2>
                <Searchbar />
            </div>
        );
    }
}