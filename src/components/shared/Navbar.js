import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import shop from "../../assets/shop.svg"
import {CartContext} from "../../context/CartContextProvider";
import styles from "./Navbar.module.css"

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to={"/Products"}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to={"/Cart"}>
                        <img src={shop} alt="shop"/>
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
