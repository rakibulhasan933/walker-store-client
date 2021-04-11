import React, { useContext, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ProductContext, UserContext } from '../../App';

const Checkout = () => {
    const [selectProduct, setSelectProduct] = useContext(ProductContext);
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [time, setTime] = useState(new Date());


    const OrderDataHandle = () => {
        console.log("click");

        const newOder = { ...selectProduct, ...loginUser, time }
        console.log(newOder);
        const url = `https://salty-chamber-97064.herokuapp.com/addOderProduct`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOder)
        })
            .then(res => console.log('server side response', res))
    }


    return (
        <div className="container">
            <div className="container">
                <h1 className="container" style={{ textAlign: 'center' }}>CheckOut Page</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{selectProduct.name}</td>
                            <td>{selectProduct.price}</td>
                            <td>{selectProduct.quantity}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button variant="success" onClick={OrderDataHandle}>CheckOut</Button>
        </div>
    );
};

export default Checkout;