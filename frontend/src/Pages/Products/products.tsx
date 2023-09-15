// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// icons
import { IoCreateOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiFillAccountBook, AiFillDollarCircle, AiOutlineIdcard } from 'react-icons/ai';
import { BiCategory, BiMoney, BiSort, BiUser } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';

// Products page
const Products = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
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
                <main className='flex flex-row w-[95%] gap-x-20 py-5 px-16'>
                    {/* right side */}
                    <div id='right side' className='flex flex-col h-[800px] gap-y-8 sticky top-10 w-[600px]'>
                        {/* product category */}
                        <div id="prod-category" className='flex p-9 flex-col gap-y-9 w-full rounded-3xl h-max bg-gray-300'>
                            <label htmlFor="" className='flex items-center text-xl gap-x-3 flex-rowtext-2xl'>
                                <BiCategory className='text-red-500 text-3xl' />
                                <span>دسته بندی محصولات</span>
                            </label>
                            <div id='checkbox' className="flex flex-col mr-8 gap-y-6">
                                <div className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">یخچال ها و برودتی</span>
                                </div>
                                <div id='checkbox' className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">مایکروویو</span>
                                </div>
                                <div id='checkbox' className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">گاز رومیزی و جدا</span>
                                </div>
                                <div id='checkbox' className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">گرمایش و بخاری</span>
                                </div>
                                <div id='checkbox' className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">ماشین ظرفشویی</span>
                                </div>
                                <div id='checkbox' className="flex flex-row gap-x-3 items-center">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        id="custom-checkbox"
                                    />
                                    <label
                                        htmlFor="custom-checkbox"
                                        className={`w-7 h-7 rounded-full border-2 ${isChecked ? "bg-yellow-500 border-yellow-500" : "border-gray-400"
                                            }`}
                                    ></label>
                                    <span className="mt-1 text-base text-gray-700">ماشین لباسشویی</span>
                                </div>
                            </div>
                        </div>
                        {/* product price */}
                        <div id="prod-price" className='flex p-9 flex-col gap-y-9 w-full h-max rounded-3xl bg-gray-300'>
                            <label htmlFor="" className='flex items-center text-xl gap-x-3 flex-rowtext-2xl'>
                                <AiFillDollarCircle className='text-red-500 text-3xl' />
                                <span>انتخاب بازه قیمت</span>
                            </label>
                            <div className="flex flex-col gap-y-4">
                                <div id='from' className="flex flex-row items-center  justify-center">
                                    <label className="flex items-center flex-row gap-x-7" htmlFor="firstName">
                                        <div className="flex items-center text-base pr-5 tracking-tighter">
                                            <span>حداقل :</span>
                                        </div>
                                        <input
                                            className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-3/5 text-right focus:shadow-md transition-all"
                                            placeholder="مثلا : 1,000,000"
                                            type="text"
                                            id="startPrice"
                                        />
                                    </label>
                                </div>
                                <div id='to' className="flex flex-row items-center justify-center">
                                    <label className="flex items-center flex-row gap-x-7" htmlFor="firstName">
                                        <div className="flex items-center text-base pr-5 tracking-tighter">
                                            <span>حداکثر :</span>
                                        </div>
                                        <input
                                            className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-3/5 text-right focus:shadow-md transition-all"
                                            placeholder="مثلا : 999,999,999"
                                            type="text"
                                            id="startPrice"
                                        />
                                    </label>
                                </div>                            </div>

                        </div>
                    </div>
                    {/* divider */}
                    <div id='divider' className="flex ">
                        <div className="w-px h-[800px] sticky top-10 bg-gray-500"></div>
                    </div>
                    {/* left side */}
                    <div id='left side' className='flex flex-col gap-y-5 h-max w-full'>
                        {/* product sort */}
                        <div id="prod-sort" className='flex flex-row gap-x-5 items-center w-full p-9 h-20 rounded-3xl bg-gray-300'>
                            <label htmlFor="" className='flex items-center text-xl gap-x-2 flex-rowtext-2xl'>
                                <BiSort className='text-red-500 text-3xl' />
                                <span>مرتب سازی :</span>
                            </label>
                            <div className="flex flex-row gap-x-4 ">
                                <a href="" className='bg-amber-400 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>ارزان ترین</a>
                                <a href="" className='bg-gray-200 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>گران ترین</a>
                                <a href="" className='bg-gray-200 transition duration-300 flex hover:bg-gray-400 px-7 py-3 items-center justify-center text-base rounded-xl'>تخفیف دارها</a>
                            </div>
                        </div>
                        {/* all products */}
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