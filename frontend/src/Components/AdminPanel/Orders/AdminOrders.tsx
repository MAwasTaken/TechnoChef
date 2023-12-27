// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { MdProductionQuantityLimits } from 'react-icons/md';
import { getAllOrders } from '../../../Services/Axios/Requests/orders';

// admin orders
const AdminOrders: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// orders
	const [orders, setOrders] = useState<any>();

	// mounting side effects
	useEffect(() => {
		// GET all orders from server
		getAllOrders().then((res) => setOrders(res.data));
	}, []);

	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<MdProductionQuantityLimits className="text-red-500" />
					سفارشات
				</span>
			</h3>
			{/* table */}
			<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
				<thead className="border-b-2 h-10 border-Info">
					<tr className="">
						<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">کدپیگیری</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">مبلغ</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">وضعیت</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10 hidden sm:table-cell">تاریخ</td>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order: any, index: number) => (
						<tr
							key={order.orderInfo._id}
							className="border-b h-24 border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
							onClick={() => navigate(`${String(order.orderInfo.ref_id)}`)}
						>
							<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
							<td className="text-base lg:text-lg">{order.orderInfo.ref_id}</td>
							<td className="tracking-tighter text-base lg:text-lg">
								{order.orderInfo.totalPrice.toLocaleString('fa-IR')}{' '}
								<span className="text-red-500 mr-1">تومان</span>
							</td>
							<td className="text-xs lg:text-lg">
								<span className="bg-teal-500/50 px-2 py-1.5 rounded-lg tracking-tight text-base font-Lalezar">
									{order.orderInfo.status}
								</span>
							</td>
							<td className="text-base lg:text-lg hidden sm:table-cell">{`${order.orderInfo.createdAt.slice(
								11,
								16
							)} :: ${order.orderInfo.createdAt.slice(0, 10)}`}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

// exports
export default AdminOrders;
