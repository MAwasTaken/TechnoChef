import React from 'react'
import { BiComment, BiShoppingBag, BiInfoCircle } from 'react-icons/bi';

const ProductProperties = () => {
  return (
    <div className='flex justify-center items-center'>
        <main className='flex flex-col gap-x-2 gap-y-4 items-center p-8 justify-center w-[1400px] h-[800px] lg:rounded-3xl bg-white shadow-md'>
            {/* comment label */}
            <div className="flex flex-row w-full">
                    <label htmlFor="" className='flex flex-row gap-x-3 items-center text-3xl'><BiInfoCircle className='text-red-500'></BiInfoCircle><span>ویژگی ها</span></label>
                </div>
                {/* divider */}
                <div className="border-t border-red-500 w-full"></div>
        </main>
    </div>
  )
}

export default ProductProperties