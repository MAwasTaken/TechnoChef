// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoCreateOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiSort, BiUser } from 'react-icons/bi';
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
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-grow items-center justify-center">
                <main className='flex flex-row w-full gap-x-20 py-5 px-16'>
                    <div id='right side' className='flex flex-col h-[800px] gap-y-8 sticky top-10 w-[600px]'>
                        <div id="prod-type" className='flex flex-col w-full rounded-3xl h-[600px] bg-gray-300'>

                        </div>
                        <div id="prod-price" className='flex w-full h-[300px] rounded-3xl bg-gray-300'></div>
                    </div>

                    <div id='divider' className="flex ">
                        <div className="w-px h-[800px] sticky top-10 bg-gray-500"></div>
                    </div>

                    <div id='left side' className='flex flex-col gap-y-5 h-max w-full'>
                        <div id="prod-sort" className='flex flex-row gap-x-5 items-center w-full p-5 h-20 rounded-3xl bg-gray-300'>
                            <label htmlFor="" className='flex items-center text-xl gap-x-2 flex-rowtext-2xl'>
                                <BiSort className='text-red-500 text-3xl' />
                                <span>مرتب سازی :</span>
                            </label>
                            <div className="flex flex-row gap-x-4 ">
                                <a href="" className='bg-gray-200 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>ارزان ترین</a>
                                <a href="" className='bg-gray-200 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>گران ترین</a>
                                <a href="" className='bg-gray-200 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>تخفیف دارها</a>
                            </div>
                        </div>
                        <div id="prod-all" className='flex flex-wrap gap-x-7 gap-y-10 justify-center items-center'>
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                            <ProductBox
                                gradientColor="#b91c1c"
                                colors={['#334155', '#ffffff', '#000000']}
                                imageSrc="Images/Products/p1.png"
                            />
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Products;