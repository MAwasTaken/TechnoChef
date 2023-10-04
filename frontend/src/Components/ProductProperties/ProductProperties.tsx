import React from 'react'
import { BiComment, BiShoppingBag, BiInfoCircle } from 'react-icons/bi';
import ProductPropertiesBox from '../../Components/ProductPropertiesBox/ProductPropertiesBox';

const ProductProperties = () => {
    return (
        <div className='flex justify-center items-center'>
            <main className='flex flex-col gap-x-2 gap-y-4 items-center p-8 justify-center w-[1400px] h-max lg:rounded-3xl bg-white shadow-md'>
                {/* Property label */}
                <div className="flex flex-row w-full">
                    <label htmlFor="" className='flex flex-row gap-x-3 items-center text-3xl'><BiInfoCircle className='text-red-500'></BiInfoCircle><span>مشخصات</span></label>
                </div>
                {/* divider */}
                <div className="border-t border-red-500 w-full"></div>
                {/* properties */}
                <div className="flex w-4/5 flex-col p-4 items-center">
                    <ProductPropertiesBox />
                    <ProductPropertiesBox />
                    <ProductPropertiesBox />
                </div>
            </main>
        </div>
    )
}

export default ProductProperties