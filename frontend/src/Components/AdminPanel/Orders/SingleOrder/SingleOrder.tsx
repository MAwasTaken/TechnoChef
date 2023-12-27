// react
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// icons
import { MdProductionQuantityLimits } from 'react-icons/md';
import { HiCalendarDays, HiEnvelope, HiMapPin, HiPencilSquare } from 'react-icons/hi2';
import {
	HiFingerPrint,
	HiIdentification,
	HiMap,
	HiPhone,
	HiScale,
	HiUserCircle
} from 'react-icons/hi';
import { FiBox } from 'react-icons/fi';
import { SiStatuspal } from 'react-icons/si';
import { AiOutlineNumber } from 'react-icons/ai';

// axios
import { deleteOrder, getById } from '../../../../Services/Axios/Requests/orders';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

// single order
const SingleOrder: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// GET order id from query params
	const { orderId } = useParams();

	// order
	const [order, setOrder] = useState<any>();

	// spinner handlers
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// status
	const [status, setStatus] = useState<string>('');

	// mounting side effects
	useEffect(() => {
		getById(orderId!).then((res) => {
			setOrder(res.data);
			setStatus(res.data.orderInfo.status);
		});
	}, []);

	// delete order
	const deleteOrderHandler = () => {
		setIsFormFetching(true);

		deleteOrder(orderId!)
			.then(() =>
				toast.success(`سفارش ${orderId} با موفقیت حذف شد ✅`, {
					onClose: () => navigate('/admin/orders')
				})
			)
			.catch(() =>
				toast.error(`خطایی در حذف سفارش رخ داد ❌`, {
					onClose: () => location.reload()
				})
			);
	};

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<MdProductionQuantityLimits className="text-red-500" />
						{`سفارش - ${orderId}`}
					</span>
				</h3>
			</div>
			<main className="m-10 flex relative flex-col md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<section className="grow">
					<div className="flex flex-col gap-y-2 md:gap-y-4">
						{/* order id */}
						<div className="flex gap-x-2 items-center justify-center" title="شماره پیگیری">
							<AiOutlineNumber className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.ref_id}
							</span>
						</div>
						{/* status */}
						<div className="flex gap-x-2 items-center justify-center" title="وضعیت">
							{status === order?.orderInfo.status ? (
								<SiStatuspal className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							) : (
								'lol'
							)}
							{/* value */}
							<input
								value={status}
								onChange={(e) => setStatus(e.target.value.trim())}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
							/>
						</div>
						{/* created at */}
						<div className="flex gap-x-2 items-center justify-center" title="تاریخ ثبت سفارش">
							<HiCalendarDays className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
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
							<HiPencilSquare className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
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
						{/* first name */}
						<div className="flex gap-x-2 items-center justify-center" title="نام">
							<HiUserCircle className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.firstName}
							</span>
						</div>
						{/* last name */}
						<div className="flex gap-x-2 items-center justify-center" title="نام">
							<HiIdentification className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.lastName}
							</span>
						</div>
						{/* phone number */}
						<div className="flex gap-x-2 items-center justify-center" title="شماره‌تماس">
							<HiPhone className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.phoneNumber}
							</span>
						</div>
						{/* username */}
						<div className="flex gap-x-2 items-center justify-center" title="نام‌کاربری">
							<HiFingerPrint className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.username}
							</span>
						</div>
						{/* email */}
						<div className="flex gap-x-2 items-center justify-center" title="ایمیل">
							<HiEnvelope className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.email}
							</span>
						</div>
						{/* national code */}
						<div className="flex gap-x-2 items-center justify-center" title="کدملی">
							<HiScale className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.user.nationalCode}
							</span>
						</div>
						{/* postal coce */}
						<div className="flex gap-x-2 items-center justify-center" title="کدپستی">
							<HiMap className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* value */}
							<span className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2">
								{order?.orderInfo.postalCode}
							</span>
						</div>
						{/* address */}
						<div className="flex gap-x-2 items-center justify-center" title="آدرس">
							<HiMapPin className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
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
					<div className="flex items-center justify-evenly mt-5">
						<button
							className="font-Lalezar cursor-pointer mt-2 md:h-11 h-9 from-rose-400 to-red-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
							onClick={deleteOrderHandler}
							disabled={isFormFetching}
						>
							{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'حذف سفارش'}
						</button>
					</div>
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
export default SingleOrder;
