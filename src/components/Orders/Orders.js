import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [user, setUser] = useState([]);
    const [loginUser, setLoginUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://salty-chamber-97064.herokuapp.com/userOder?email=' + loginUser.email)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}> You have {user.length} Select Products</h3>
            <div className="container">
                <table class="table container">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(pd => <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>{pd.quantity}</td>
                                <td>{pd.time}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;