// react
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { FaUsers } from 'react-icons/fa';

// react query
import useGetAllUsers from '../../../Hooks/useGetAllUsers';
import { user } from '../../../Types/User.types';

// admin users
const AdminUsers = () => {
	// navigator
	const navigate = useNavigate()

	// GET all users from react query
	const { data } = useGetAllUsers()

	// tsx
	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<FaUsers className="text-red-500" />
					کاربران
				</span>
				{/* <div className="flex gap-x-2">
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${filter === 'all' ? 'bg-Info/50' : ''
							}`}
						onClick={() => dispatch(setFilter('all'))}
					>
						<span className="hidden md:block">همه محصولات</span>
						<BsBoxes className="text-red-500 w-5 h-5" />
					</button>
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${filter === 'bestSellers' ? 'bg-Info/50' : ''
							}`}
						onClick={() => dispatch(setFilter('bestSellers'))}
					>
						<span className="hidden md:block">محصولات پرفروش</span>
						<AiOutlineStar className="text-red-500 w-5 h-5" />
					</button>
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${filter === 'latest' ? 'bg-Info/50' : ''
							}`}
						onClick={() => dispatch(setFilter('latest'))}
					>
						<span className="hidden md:block">جدیدترین محصولات</span>
						<MdOutlineWatchLater className="text-red-500 w-5 h-5" />
					</button>
				</div> */}
			</h3>
			{/* table */}
			<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
				<thead className="border-b-2 h-10 border-Info">
					<tr className="">
						<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">تصویر</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">عنوان</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">دسته‌بندی</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">قیمت</td>
					</tr>
				</thead>
				<tbody>
					{
						data?.reverse().map((user: user, index: number) => (
							<tr
								key={user._id}
								className="border-b border-DarkYellow hover:bg-Info/20 p-52 transition-all duration-500 cursor-pointer"
								onClick={() => navigate(String(user.username))}
							>
								<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
								<td>
								</td>
								<td className="tracking-tighter sm:text-base">{user.firstName} {user.lastName}</td>
								<td>{user.email}</td>
								<td className="tracking-tighter">

								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</section>
	);
};

export default AdminUsers;
