
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProducts from '../ManageProducts/ManageProducts';
import ProductsAdd from '../ProductsAdd/ProductsAdd';

const Admin = () => {
    const [itemProducts, setItemProducts] = useState([]);


    useEffect(() => {
        fetch('https://salty-chamber-97064.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setItemProducts(data)
                console.log(data);
            })
    }, []);
    return (
        <Router>
            <div className="container">
                <ul className="container">
                    <li>
                        <Link to="/addProducts">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/manage Products">Manage Products</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/addProducts">
                        <ProductsAdd></ProductsAdd>
                    </Route>
                    <Route path="/manage Products">
                        <ManageProducts itemProducts={itemProducts} ></ManageProducts>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Admin;