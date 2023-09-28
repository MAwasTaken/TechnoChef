import React from 'react';
import { BiPlus, BiUser } from 'react-icons/bi';
import AdminUserBox from './../AdminUserBox/AdminUserBox';

const Users = () => {
	return (
		<div className="flex flex-col gap-y-5 p-5 justify-center items-center">
			<label htmlFor="" className="flex flex-row w-full gap-x-2 text-3xl">
				<BiUser className="text-red-500"></BiUser>
				<span>کاربران فعال شده</span>
			</label>
			{/* divider */}
			<div className="border-t border-gray-700 w-full"></div>
			{/* Users */}
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-row w-full bg-gray-500 "></div>
				<AdminUserBox />
			</div>
		</div>
	);
};

export default Users;
