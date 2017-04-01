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
                <div className="alert alert-danger" role="alert">Not implemented yet</div>
            </div>
        );
    }
}

export default Queries;