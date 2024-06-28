import { Link } from "react-router-dom";

function PersonRow({ person, uniqueKey }) {

    return <>
        <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>{person.cars ? person.cars.length : 0}</td>
            <td>
                <Link to={`/addcar/${person.id}`}>
                    <button className="btn btn-primary">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/deletecars/${person.id}`}>
                    <button className="btn btn-danger">Delete Cars</button>
                </Link>
            </td>
        </tr>
    </>
}

export default PersonRow;