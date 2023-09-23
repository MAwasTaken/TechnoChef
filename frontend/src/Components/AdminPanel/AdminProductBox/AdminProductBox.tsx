import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const AdminProductBox = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="flex">
                <div className="flex flex-col gap-y-4 bg-gray-300 rounded-2xl w-[290px] h-[420px] p-5">
                    <img
                        className="mx-auto h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
                        src="../../../../public/Images/Products/p1.png"
                        alt="تصویر محصول"
                        loading="lazy"
                    />
                    <div className="border-t border-gray-700 w-full"></div>
                    <label htmlFor="" className='flex justify-center items-center text-base text-center font-bold '><span>یخچال امرسان مدل جدید ۱۲ فوت سایز بزرگ</span></label>
                    <div className="flex gap-x-5 items-center">
                        <div className="flex bg-gray-100 py-2 px-4 rounded-2xl"><span>یخچال</span></div>
                        <div className="flex bg-gray-100 py-2 px-4 rounded-2xl"><span>کد کالا‌ : ۱۰۲</span></div>
                    </div>
                    <div className="flex flex-row gap-x-2 mt-1 px-1">
                        <span className='text-base'>رنگ :</span>
                        <button className='w-6 h-6 bg-blue-800 rounded-full'></button>
                        <button className='w-6 h-6 bg-purple-800 rounded-full'></button>
                        <button className='w-6 h-6 bg-gray-800 rounded-full'></button>
                    </div>
                    <div className="flex flex-row gap-x-3 justify-center items-center">
                        <button className='flex items-center justify-center bg-blue-500 py-2 w-full text-white rounded-lg'><span>جزییات محصول</span></button>
                        <button className='flex items-center justify-center text-red-500 bg-gray-400 hover:bg-gray-700 duration-300 py-1 px-1 rounded-lg text-3xl'><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductBox