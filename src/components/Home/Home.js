import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://salty-chamber-97064.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="row container">
            {
                products.map(product => <Product product={product} ></Product>)
            }
        </div>
    );
};

export default Home;