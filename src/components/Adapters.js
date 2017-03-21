import React, { Component } from 'react';

import AdapterService from '../service/AdapterService';

import {Table,Button,ButtonToolbar, Glyphicon,Modal} from 'react-bootstrap';

import {ObjectInspector} from 'react-inspector';

class Adapters extends Component {

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            adapter: null,
            adapters: []
        };
    }

    closeModal = ()=>{
        this.setState({modal: false});
    }
    openModal = (adapter)=>{
        this.setState({adapter, modal: true});
    }

    componentWillMount() {
       this.getAdapters();
    }

    getAdapters = ()=>{
        AdapterService.getAll().then((adapters) => {
            this.setState({adapters});
        });
    }

    reloadAdapters(){
        // AdapterService.reloadAdapters().then((params) => {
            
        // });
    }
    

    render() {
        return (
            <div>
                <h1>Adapters</h1>
                <div>Count: {this.state.adapters.length}</div>
                <ButtonToolbar style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<Button disabled bsStyle="primary" onClick={this.reloadAdapters}>Reload Adapters</Button>*/}
                    <Button onClick={this.getAdapters}><Glyphicon glyph="refresh"/></Button>
                </ButtonToolbar>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.adapters.map((adapter)=>{
                            return <tr key={adapter.name}>
                                <td>{adapter.displayName}</td>
                                <td>{adapter.name}</td>
                                <td><Button onClick={() => {
                                    this.openModal(adapter);
                                }}><Glyphicon glyph="eye-open"/></Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Modal show={this.state.modal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.adapter ? this.state.adapter.displayName : ""}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ObjectInspector data={this.state.adapter} name={this.state.adapter ? this.state.adapter.name : null} 
                                expandLevel={5}
                                />
                    </Modal.Body>  
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Adapters;