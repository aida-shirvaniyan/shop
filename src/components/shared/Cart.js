import React, {useContext} from 'react';
import {shorten} from "../../helper/function"
import Trash from "../../assets/trash.svg";
import {CartContext} from "../../context/CartContextProvider";
import styles from './Cart.module.css'

const Cart = ({data}) => {
    const {dispatch} = useContext(CartContext)
    const {image, title, price, quantity} = data
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>:
                        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img
                            style={{width: "20px"}}
                            src={Trash}
                            alt="trash"/>
                        </button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;
