// react
import React, { useEffect, useState } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductDetailsBox from '../../Components/ProductDetailsBox/ProductDetailsBox';


const ProductDetails = () => {
    // mounting side effects
    useEffect(() => {
        // change document title
        document.title = 'تکنو | Technoshef - ورود';

        // scroll to top when mounting
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (

        <div className="flex h-screen flex-col justify-between">
            <Header />
            <div className="flex justify-center">
            <ProductDetailsBox />

            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails