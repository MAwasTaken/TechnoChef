// react
import React, { useState } from 'react';

// icons
import { BiComment, BiShoppingBag, BiSort } from 'react-icons/bi';

// components
import ProductDetailsCmBox from '../../Components/ProductDetailsCm/ProductDetailsCmBox';

const ProductDetailsCm = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='flex flex-col gap-x-2 gap-y-4 items-center p-5 justify-center w-[1400px] h-max lg:rounded-3xl'>
                {/* comment label */}
                <div className="flex flex-row w-full">
                    <label htmlFor="" className='flex flex-row gap-x-3 items-center text-3xl'><BiComment className='text-red-500'></BiComment><span>نظرات</span></label>
                </div>
                {/* divider */}
                <div className="border-t border-red-500 w-full"></div>
                {/* comment box */}
                <ProductDetailsCmBox />
                <ProductDetailsCmBox />
            </div>
        </div>
    )
}

export default ProductDetailsCm