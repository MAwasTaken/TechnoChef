// react
import React, { useEffect } from 'react';

// axios
import { getVerify } from '../../../Services/Axios/Requests/payment';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { MdProductionQuantityLimits } from 'react-icons/md';
import useOrders from '../../../Hooks/useOrders';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteClearBasket } from '../../../Services/Axios/Requests/basket';

// check payment
const PanelOrders: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// GET user from redux
	const user = useSelector((state: any) => state.user);

	// GET orders from server
	const { data, isFetching, refetch } = useOrders(user.username);

	// check ongoing payments
	useEffect(() => {
		const query = new URLSearchParams(location.search);
		const authority = query.get('Authority');

		authority
			? getVerify(authority)
					.then(() => {
						toast.success('تراکنش با موفقیت انجام شد ✅', {
							onOpen: () => {
								refetch();

								deleteClearBasket();
							}
						});
					})
					.catch(() =>
						toast.error('تراکنش موفقیت آمیز نبود ❌', {
							onClose: () => navigate('/panel/basket')
						})
					)
			: null;
	}, []);

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<MdProductionQuantityLimits className="text-red-500" />
						سفارشات
					</span>
				</h3>
			</div>
			<main className="mx-5 gap-y-10">
				{isFetching ? (
					<span className="flex items-center justify-center gap-x-5 text-center w-full font-bold xl:text-lg bg-sky-500 md:py-4 text-Light py-2 rounded-md">
						در حال دریافت اطلاعات سبدخرید از سرور صبر کنید !
					</span>
				) : data?.length ? (
					<>
						<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
							<thead className="border-b-2 h-10 border-Info">
								<tr className="">
									<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10">کدپیگیری</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10">مبلغ</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10">وضعیت</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10 hidden sm:table-cell">
										تاریخ
									</td>
								</tr>
							</thead>
							<tbody>
								{data.map((order: any, index: number) => (
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
					</>
				) : (
					<span
						onClick={() => navigate('/products')}
						className="text-center w-full font-bold cursor-pointer xl:text-lg bg-rose-500 py-2 md:py-4 text-Light rounded-md flex gap-x-5 items-center justify-center mb-40"
					>
						سفارشی برای نمایش وجود ندارد‌ !
					</span>
				)}
			</main>
			{/* react toastify container */}
			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick={false}
				rtl={true}
				theme="light"
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				toastStyle={{
					color: '#0A0706',
					fontFamily: 'Lalezar',
					background: '#FCFCFC',
					fontSize: '16px'
				}}
			/>
		</>
	);
};

export default PanelOrders;
