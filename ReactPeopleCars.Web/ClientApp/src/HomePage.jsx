import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import axios from 'axios';
import { produce } from 'immer';
import PersonRow from './PersonRow';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: [],
        peopleToShow:[],
        searchText:''
    }

    refreshPeople = async () => {
        const { data } = await axios.get('/api/people/getall');
        this.setState({ people: data,peopleToShow:data });
    }

    searchPeople = e => {
        const searchTerm = e.target.value.toLowerCase();
        const copy = [...this.state.people];
        const filteredCopy = copy.filter(c => c.firstName.toLowerCase().includes(searchTerm) || c.lastName.toLowerCase().includes(searchTerm));
        this.setState({ peopleToShow: filteredCopy, searchText:e.target.value });
    }
    clearSearchBar = () => {
        const copy = [...this.state.people]
        this.setState({peopleToShow:copy,searchText:''})
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }

    render() {
        const { people } = this.state;
        return (
            <div className="container">
                <div style={{ backgroundColor: 'white', minHeight: '1000px', paddingTop: '10px' }}>
                    <div className='row'>
                        <div className='col-md-10'>
                            <input className='form-control form-control-lg' type='text' placeholder='Search People' name='searchText' value={this.state.searchText} onChange={this.searchPeople}></input>
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-dark btn-lg w-100' onClick={this.clearSearchBar}>Clear</button>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12' style={{ marginBottom: '20px' }}>
                            <Link to='/addperson' className='btn btn-success btn-lg w-100'>Add Person</Link>
                        </div>
                    </div>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Car Count</th>
                                <th>Add Car</th>
                                <th>Delete Cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.peopleToShow.map((p, i) =>
                                <PersonRow
                                    person={p}
                                    key={i}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default HomePage;