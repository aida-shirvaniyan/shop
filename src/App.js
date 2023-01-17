import React from "react";
import {Routes, Route , Navigate} from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart"

const App = () => {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar/>
                <Routes>
                    <Route path={"/Cart"} element={<ShopCart/>}/>
                    <Route path={"/Product/:id"} element={<ProductDetails/>}/>
                    <Route path={"/Products"} element={<Store/>}/>
                    <Route path={"/*"} element={<Navigate to="/Products"/>}/>
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
