import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage';
import Layout from './Layout';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/AddPerson' component={AddPerson} />
            <Route exact path='/AddCar/:id' component={AddCar} />
            <Route exact path='/DeleteCars/:id' component={DeleteCars} />
        </Layout>
    </BrowserRouter>
)
