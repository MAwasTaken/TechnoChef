// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoCreateOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';

// Products page
const Products = () => {
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
            <div className="flex items-center justify-center">
                <main>
                    <div id='left side'>
                        <div id="prod-type"></div>
                        <div id="prod-price"></div>
                    </div>
                    <div id='right side'>
                        <div id="prod-sort"></div>
                        <div id="prod-all"></div>
                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Products;