// react
import React, { useEffect, useState } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductDetailsBox from '../../Components/ProductDetailsBox/ProductDetailsBox';
import ProductDetailsCm from '../../Components/ProductDetailsCm/ProductDetailsCm';
import ProductProperties from '../../Components/ProductProperties/ProductProperties';


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
            <main className='flex flex-col gap-y-10'>
                <ProductDetailsBox />
                <ProductProperties />
                <ProductDetailsCm />
            </main>
            <Footer />
        </div>
    )
}

export default ProductDetails