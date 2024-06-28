import { produce } from 'immer';
import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './HomePage';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    submitPerson = async () => {
        await axios.post('/api/people/addPerson', this.state.person);
        this.props.history.push('/');
    }

    render() {
        return <>
            <div className="container" style={{ marginTop: '60px' }}>
                <div style={{ minHeight: '1000px', paddingTop: '200px' }}>
                    <div className="col-md-6 offset-md-3 card bg-light p-4">
                        <h2>Add a New Person</h2>
                        <input type="text" className="form-control" placeholder="First Name" name='firstName' onChange={this.onTextChange} />
                        <br />
                        <input type="text" className="form-control" placeholder="Last Name" name='lastName' onChange={this.onTextChange} />
                        <br />
                        <input type="text" className="form-control" placeholder="Age" name='age' onChange={this.onTextChange} />
                        <br />
                        <button className="btn btn-primary w-100" onClick={this.submitPerson}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    }
}






export default AddPerson;