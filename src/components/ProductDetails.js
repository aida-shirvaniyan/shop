import React, {useEffect, useState} from 'react';
import styles from "./ProductDetails.module.css"
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const ProductDetails = () => {
    const[Product , setProduct] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [params.id])
    const {image, title, price, description, category} = Product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product"/>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>Category: <span>{category}</span></p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to={"/Products"}>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
