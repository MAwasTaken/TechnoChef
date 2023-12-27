// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// axios
import { getById } from '../../../../Services/Axios/Requests/orders';

// react toastify
import { ToastContainer } from 'react-toastify';

// icons
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { FiBox } from 'react-icons/fi';
import { HiMap } from 'react-icons/hi';
import { HiCalendarDays, HiMapPin, HiPencilSquare } from 'react-icons/hi2';
import { AiOutlineNumber } from 'react-icons/ai';
import { SiStatuspal } from 'react-icons/si';

// order details
const OrderDetails: React.FC = () => {
	// GET order id from query params
	const { orderID } = useParams();

	// navigator
	const navigate = useNavigate();

	// order details
	const [order, setOrder] = useState<any>();

	// GET order from server
	useEffect(() => {
		getById(orderID!).then((res) => setOrder(res.data));
	}, []);

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<MdProductionQuantityLimits className="text-red-500" />
						{`جزئیات سفارش - ${orderID}`}
					</span>
					<Link
						to="/panel/orders"
						className="md:border-2 border duration-500 transition-all border-Info p-1 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
					>
						<span>
							<BiArrowBack className="text-red-500 w-5 h-5" />
						</span>
					</Link>
				</h3>
			</div>
			<main className="m-10 flex relative flex-col md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<section className="grow">
					<div className="flex flex-col gap-y-2 md:gap-y-4">
						{/* order id */}
						<div className="flex gap-x-2 items-center justify-center" title="شماره پیگیری">
							<AiOutlineNumber className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.ref_id}
							</span>
						</div>
						{/* status */}
						<div className="flex gap-x-2 items-center justify-center" title="وضعیت">
							<SiStatuspal className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.status}
							</span>
						</div>
						{/* created at */}
						<div className="flex gap-x-2 items-center justify-center" title="تاریخ ثبت سفارش">
							<HiCalendarDays className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order
									? `${order.orderInfo.createdAt.slice(
											11,
											16
									  )} :: ${order.orderInfo.createdAt.slice(0, 10)}`
									: ''}
							</span>
						</div>
						{/* updated at */}
						<div className="flex gap-x-2 items-center justify-center" title="تاریخ آخرین ویرایش">
							<HiPencilSquare className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order
									? `${order?.orderInfo.updatedAt.slice(
											11,
											16
									  )} :: ${order?.orderInfo.createdAt.slice(0, 10)}`
									: ''}
							</span>
						</div>
						{/* postal coce */}
						<div className="flex gap-x-2 items-center justify-center" title="کدپستی">
							<HiMap className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.postalCode}
							</span>
						</div>
						{/* address */}
						<div className="flex gap-x-2 items-center justify-center" title="آدرس">
							<HiMapPin className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.address}
							</span>
						</div>
					</div>
					{/* header */}
					<h4 className="flex justify-between items-center py-3 mt-10">
						<span className="flex select-none transition-colors items-center gap-x-2 text-lg md:text-xl lg:text-2xl font-Lalezar tracking-wider">
							<FiBox className="text-red-500" />
							محصولات
						</span>
						<span className="font-Vazir text-sm md:text-lg lg:text-xl tracking-tight mx-2 select-none font-bold text-slate-600">
							{order?.orderInfo.totalPrice.toLocaleString('fa-IR')}
							<span className="text-red-600"> تومان </span>
						</span>
					</h4>
					<table className="table-auto border md:border-2 border-Info w-full text-center">
						<thead className="border-b-2 h-10 border-Info">
							<tr className="">
								<td className="sm:text-sm font-black text-Dark/70 h-10">تعداد</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10">تصویر</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10">عنوان</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">
									قیمت
								</td>
							</tr>
						</thead>
						<tbody>
							{order?.orderInfo.products.map((product: any, index: number) => (
								<tr
									key={index}
									className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
									onClick={() => navigate(`/products/${String(product.productId.shortName)}`)}
								>
									<td className="font-Lalezar text-base lg:text-lg">{product.quantity}</td>
									<td>
										<img
											className="w-32 h-32 object-contain mx-auto"
											src={`https://45.159.150.221:3000/${product.productId?.cover}`}
											alt="تصویر محصول"
											loading="lazy"
										/>
									</td>
									<td className="tracking-tighter sm:text-base">{product.productId.productName}</td>
									<td className="tracking-tighter sm:text-base">
										{product.productId.finalPrice.toLocaleString('fa-IR')}{' '}
										<span className="text-red-500 mr-1">تومان</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
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

// exports
export default OrderDetails;
