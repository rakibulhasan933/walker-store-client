import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ProductsAdd = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageUrl] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imageURL: imageURL
        };
        const url = `https://salty-chamber-97064.herokuapp.com/addProduct`;
        console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpLoad = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '653e47c04775bf54b071a6f09142d5a0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container " style={{ textAlign: 'center' }} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="name " {...register("name")} />
                <br />
                <input defaultValue="price" {...register("price")} />
                <br />
                <input defaultValue="quantity" {...register("quantity")} />
                <br />
                <input type="file" onChange={handleImageUpLoad} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ProductsAdd;