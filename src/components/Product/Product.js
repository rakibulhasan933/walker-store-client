import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import './Product.css';
import { Link, useHistory } from 'react-router-dom';
import { ProductContext } from '../../App';

const Product = ({ product }) => {
    const [selectProduct, setSelectProduct] = useContext(ProductContext);


    // let history = useHistory();
    function handleClick(id) {
        fetch(`https://salty-chamber-97064.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectProduct(data);
                console.log(data);
            })
        // history.push("/checkout");
    }
    return (

        <div className="col-md-3 boxSize">
            <img style={{ width: '200px', height: '200px' }} src={product.imageURL} alt="" />
            <h3>{product.name}</h3>
            <h4>Price:${product.price}</h4>
            <p>Quantity:{product.quantity}</p>
            <Link to="/checkout">
                <Button type="button" onClick={() => handleClick(`${product._id}`)}>
                    Buy now
    </Button>
            </Link>
        </div>
    );
};

export default Product;