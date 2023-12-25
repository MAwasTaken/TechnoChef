// react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllUsers from '../../../Hooks/useGetAllUsers';
import { user } from '../../../Types/User.types';
// icons
import { BsBag, BsPeople } from 'react-icons/bs';

const AllOrders: React.FC = () => {
    // navigator
    const navigate = useNavigate();

    // GET all users from react query
    const { data } = useGetAllUsers();

    return (
        <section className="md:p-5 p-3">
            {/* header */}
            <h3 className="flex justify-between items-center border-b border-Info pb-3">
                <span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
                    <BsBag className="text-red-500" />
                    سفارشات
                </span>
            </h3>
            {/* table */}
            <table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
                <thead className="border-b-2 h-10 border-Info">
                    <tr className="">
                        <td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
                        <td className="sm:text-sm font-black text-Dark/70 h-10">کد پیگیری</td>
                        <td className="sm:text-sm font-black text-Dark/70 h-10">نام مشتری</td>
                        <td className="sm:text-sm font-black text-Dark/70 h-10">قیمت</td>
                        <td className="sm:text-sm font-black text-Dark/70 h-10">وضعیت</td>
                        <td className="sm:text-sm font-black text-Dark/70 h-10">تاریخ</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.reverse().map((user: user, index: number) => (
                        <tr className="border-b border-DarkYellow hover:bg-Info/20 p-52 transition-all duration-500 cursor-pointer h-20"

                        >
                            <td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
                            <td className="tracking-tighter sm:text-base"></td>
                            <td className="tracking-tighter sm:text-base">{user.firstName} {user.lastName}</td>
                            <td className="tracking-tighter sm:text-base"></td>
                            <td className="tracking-tighter"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>)
}

export default AllOrders;