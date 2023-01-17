import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {shorten, isInCart, quantityCount} from "../../helper/function";
import {CartContext} from "../../context/CartContextProvider";
import Trash from '../../assets/trash.svg';
import styles from './Product.module.css'

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/Product/${productData.id}`}>Detail</Link>
                <div className={styles.buttonContainer}>
                    {
                        quantityCount(state, productData.id) === 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
                            <img style={{width:"20px"}} src={Trash} alt="trash"/>
                        </button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>
                    }
                    {quantityCount(state , productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                            <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                            <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>
                                Add to card
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
