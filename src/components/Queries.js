import React, { Component } from 'react';

// import QueryService from '../service/QueryService';

class Queries extends Component {

    constructor(props){
        super(props);

        this.state = {
            queries: []
        };
    }

    
    componentWillMount() {
        
    }
    

    render() {
        return (
            <div>
                <h1>Queries</h1>
            </div>
        );
    }
}

export default Queries;