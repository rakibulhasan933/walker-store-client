import React from 'react';


const ManageProducts = (props) => {
    const products = props.itemProducts;
    const deletedProduct = (id) => {
        fetch(`https://salty-chamber-97064.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted');
            })
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>I am ManageProducts</h1>
            <ul>
                {
                    products.map(pd => <li>Name:{pd.name}   Price:{pd.price}----Quantity:{pd.quantity}  <button onClick={() => deletedProduct(pd._id)}>Deleted</button> </li>)
                }
            </ul>
        </div>
    );
};

export default ManageProducts;