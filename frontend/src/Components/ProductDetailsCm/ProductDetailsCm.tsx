// react
import React, { useState } from 'react';

// icons
import { BiComment, BiShoppingBag, BiSort } from 'react-icons/bi';

// components
import ProductDetailsCmBox from '../../Components/ProductDetailsCm/ProductDetailsCmBox';

const ProductDetailsCm = () => {
    return (
        <div className="flex justify-center items-center">
            <main className='flex flex-col gap-x-2 gap-y-4 items-center p-8 justify-center w-[1300px] h-max lg:rounded-3xl bg-white shadow-md'>
                {/* comment label */}
                <div className="flex flex-row w-full">
                    <label htmlFor="" className='flex flex-row gap-x-3 items-center text-3xl'><BiComment className='text-red-500'></BiComment><span>نظرات</span></label>
                </div>
                {/* divider */}
                <div className="border-t border-red-500 w-full"></div>
                {/* comment box */}
                <ProductDetailsCmBox />
                <ProductDetailsCmBox />
            </main>
        </div>
    )
}

export default ProductDetailsCm