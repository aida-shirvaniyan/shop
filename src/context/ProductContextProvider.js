import React, {createContext, useEffect, useState} from 'react';
import {getProducts} from "../services/API";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
           setProduct(await getProducts())
        }
        fetchApi()
    }, [])

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
