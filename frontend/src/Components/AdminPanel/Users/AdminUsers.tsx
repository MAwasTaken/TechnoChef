// react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { BsPeople } from 'react-icons/bs';

// react query
import useGetAllUsers from '../../../Hooks/useGetAllUsers';

// types
import { user } from '../../../Types/User.types';

// admin users
const AdminUsers: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// GET all users from react query
	const { data } = useGetAllUsers();

	// tsx
	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<BsPeople className="text-red-500" />
					کاربران
				</span>
			</h3>
			{/* table */}
			<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
				<thead className="border-b-2 h-10 border-Info">
					<tr className="">
						<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">نام و نام‌خانوادگی</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">نام کاربری</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">شماره تماس</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">ایمیل</td>
					</tr>
				</thead>
				<tbody>
					{data?.reverse().map((user: user, index: number) => (
						<tr
							key={user._id}
							className="border-b border-DarkYellow hover:bg-Info/20 p-52 transition-all duration-500 cursor-pointer h-20"
							onClick={() => navigate(String(user.username))}
						>
							<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
							<td className="tracking-tighter sm:text-base">
								{user.firstName} {user.lastName}
							</td>
							<td className="tracking-tighter sm:text-base">{user.username}</td>
							<td className="tracking-tighter sm:text-base">{user.phoneNumber}</td>
							<td className="tracking-tighter">{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default AdminUsers;
