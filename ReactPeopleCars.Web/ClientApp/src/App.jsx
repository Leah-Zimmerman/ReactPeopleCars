import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    // state = {
    //     count: 0
    // }

    render() {
        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div style={{ backgroundColor: 'white', minHeight: '1000px', paddingTop: '10px' }}>
                    <div className='row'>
                        <div className='col-md-10'>
                            <input className='form-control form-control-lg' type='text' placeholder='Search People'></input>
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-dark btn-lg w-100'>Clear</button>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12' style={{ marginBottom: '20px' }}>
                            <button className='btn btn-success btn-lg w-100'>Add Person</button>
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
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Car Count</td>
                                <td>Add Car</td>
                                <td>Delete Car</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default App;