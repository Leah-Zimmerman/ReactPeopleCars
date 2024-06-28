import { produce } from 'immer';
import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './HomePage';
import axios from 'axios';

class AddCar extends React.Component {
    state = {
        car: {
            make: '',
            model: '',
            year: '',
        },
        personName:''
    }
    componentDidMount = async()=>{
        const {id}=this.props.match.params;
        const {data} = await axios.get(`/api/people/getPersonNameById?id=${id}`);
        this.setState({personName: data});
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    submitCar = async () => {
        const id = this.props.match.params.id;
        await axios.post('/api/people/submitCar', {car:this.state.car,id:id});
        this.props.history.push('/');
    }

    render() {
        return <>
            <div className="container" style={{ marginTop: '60px' }}>
                <div style={{ minHeight: '1000px', paddingTop: '200px' }}>
                    <div className="col-md-6 offset-md-3 card bg-light p-4">
                        <h2>Add a Car for {this.state.personName}</h2>
                        <input type="text" className="form-control" placeholder="Make" name='make' onChange={this.onTextChange} />
                        <br />
                        <input type="text" className="form-control" placeholder="Model" name='model' onChange={this.onTextChange} />
                        <br />
                        <input type="text" className="form-control" placeholder="Year" name='year' onChange={this.onTextChange} />
                        <br />
                        <button className="btn btn-primary w-100" onClick={this.submitCar}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    }
}


export default AddCar;