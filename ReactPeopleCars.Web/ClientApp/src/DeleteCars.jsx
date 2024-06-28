import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

class DeleteCars extends React.Component {

    state = {
        cars: []
    }
    componentDidMount = async () => {
        const { data } = await axios.get(`/api/people/getCarsForPerson?id=${this.props.match.params.id}`);
        await this.setState({ cars: data })
    }
    deleteCars = async () => {
        await axios.post(`/api/people/deleteCars?id=${this.props.match.params.id}`);
        this.props.history.push('/');
    }

    render() {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!this.state.cars.length && this.state.cars.map((c, i) =>
                                    <tr key={i}>
                                        <td>{c.make}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all these cars?</h3>
                    </div>
                    <div className="col-md-6">
                        <Link to={'/'}>
                            <button className="btn btn-primary w-100">No</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger w-100" onClick={this.deleteCars}>Yes</button>
                    </div>
                </div>
            </div>
        </>
    }
}
export default DeleteCars;