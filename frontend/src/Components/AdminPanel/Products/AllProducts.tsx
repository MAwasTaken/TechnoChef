import React from 'react'
import { BiPlus, BiShoppingBag } from 'react-icons/bi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { AiFillDollarCircle } from 'react-icons/ai';
import AdminProductBox from './../AdminProductBox/AdminProductBox';


const AllProducts = () => {
    return (
        <div className='flex flex-col gap-y-5 p-5 justify-center items-center'>
            <label htmlFor="" className='flex flex-row w-full gap-x-2 text-3xl'><BiShoppingBag className='text-red-500'></BiShoppingBag><span>محصولات</span></label>
            {/* new profuct */}
            <div className="flex flex-row w-full h-max">
                <button className='flex flex-row items-center gap-x-2 text-base text-blue-700 py-1'><BiPlus></BiPlus><span>محصول جدید</span></button>
            </div>
            {/* divider */}
            <div className="border-t border-gray-700 w-full"></div>
            {/* products */}
            <div className='flex flex-wrap gap-5 '>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>
                <AdminProductBox></AdminProductBox>

            </div>


        </div>
    )
}

export default AllProducts