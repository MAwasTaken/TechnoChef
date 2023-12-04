// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// axios
import {
	deleteSingleUser,
	getSingleUser,
	putSingleUser
} from '../../../../Services/Axios/Requests/user';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// react spinner
import { BeatLoader } from 'react-spinners';

// types
import { newUserInputs } from '../../../../Types/NewUserInputs.types';

// icons
import { BsBasket, BsBoxSeam } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import {
	HiAtSymbol,
	HiFingerPrint,
	HiIdentification,
	HiMap,
	HiOutlineKey,
	HiPhone,
	HiScale,
	HiUserCircle
} from 'react-icons/hi';
import { HiCalendarDays, HiEnvelope, HiMapPin, HiPencilSquare } from 'react-icons/hi2';

// single user
const SingleUser: React.FC = () => {
	// uel params
	const { userName } = useParams();

	// navigator
	const navigate = useNavigate();

	// user basket
	const [basket, setBasket] = useState<any>();

	// user orders
	const [orders, setOrders] = useState<any>();

	// spinner handlers
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// initialize hook form
	const { register, handleSubmit, reset } = useForm({
		mode: 'all'
	});

	useEffect(() => {
		getSingleUser(String(userName)).then((res) => {
			setBasket(res.data.userInfo.basket);
			setOrders(res.data.orders);

			console.log(res.data.orders);

			reset({
				firstName: res.data.userInfo.firstName,
				lastName: res.data.userInfo.lastName,
				phoneNumber: res.data.userInfo.phoneNumber,
				email: res.data.userInfo.email,
				username: res.data.userInfo.username,
				nationalCode: res.data.userInfo.nationalCode,
				postalCode: res.data.userInfo.postalCode,
				address: res.data.userInfo.address,
				createdAt: `${res.data.userInfo.createdAt.slice(
					0,
					10
				)} - ${res.data.userInfo.createdAt.slice(11, 19)}`,
				updatedAt: `${res.data.userInfo.updatedAt.slice(
					0,
					10
				)} - ${res.data.userInfo.updatedAt.slice(11, 19)}`,
				emailVerified: res.data.userInfo.emailVerified === false ? 'خیر' : 'بله',
				isAdmin: res.data.userInfo.isAdmin === false ? 'خیر' : 'بله'
			});
		});
	}, []);

	// edit user handler
	const editUserHandler: SubmitHandler<any> = (formData) => {
		// set is fetching to true
		setIsFormFetching(true);

		delete formData.createdAt;
		delete formData.updatedAt;
		delete formData.emailVerified;
		formData.isAdmin === 'بله' ? (formData.isAdmin = true) : (formData.isAdmin = false);

		putSingleUser(formData)
			.then(() =>
				toast.success('ویرایش اطلاعات با موفقیت انجام شد ✅', {
					onOpen: () => setIsFormFetching(false),
					onClose: () => location.reload()
				})
			)
			.catch(() =>
				toast.error('ویرایش اطلاعات با مشکل مواجه شد !', {
					onClose: () => setIsFormFetching(false)
				})
			);
	};

	// delete user handler
	const deleteUserHandler = () => {
		setIsFormFetching2(true);

		deleteSingleUser(String(userName))
			.then((res) =>
				toast.success(`کاربر  با موفقیت حذف شد ✅‍`, {
					onClose: () => navigate('/admin/users')
				})
			)
			.catch(() => toast.error('حذف کاربر انجام نشد ! ❌'))
			.finally(() => setIsFormFetching2(false));
	};

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<BsBoxSeam className="text-red-500" />
						{`ویرایش کاربر ${userName}`}
					</span>
					<Link
						to="/admin/users"
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
					{/* form */}
					<form
						onSubmit={handleSubmit(editUserHandler)}
						className="flex flex-col gap-y-2 md:gap-y-4"
					>
						{/* firstName */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="firstName">
							<HiUserCircle className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* input */}
							<input
								required
								{...register('firstName')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام"
								id="firstName"
							/>
						</label>
						{/* lastName */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="lastName">
							<HiIdentification className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* input */}
							<input
								required
								{...register('lastName')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام خانوادگی"
								id="lastName"
							/>
						</label>
						{/* phoneNumber */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="phoneNumber">
							<HiPhone className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* input */}
							<input
								required
								{...register('phoneNumber')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="شماره تماس"
								id="phoneNumber"
							/>
						</label>
						{/* username */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="username">
							<HiFingerPrint className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* input */}
							<input
								required
								{...register('username')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام کاربری"
								id="username"
							/>
						</label>
						{/* email */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="email">
							<HiEnvelope className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
							{/* input */}
							<input
								required
								{...register('email')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="email"
								inputMode="email"
								placeholder="شماره تماس"
								id="email"
							/>
						</label>
						{/* postalCode */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="nationalCode">
							<HiScale className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-Info/50 hover:bg-Info cursor-pointer" />
							{/* input */}
							<input
								{...register('nationalCode')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								inputMode="decimal"
								placeholder="کدملی"
								id="nationalCode"
							/>
						</label>
						{/* postalCode */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="postalCode">
							<HiMap className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-Info/50 hover:bg-Info cursor-pointer" />
							{/* input */}
							<input
								{...register('postalCode')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								inputMode="decimal"
								placeholder="کدپستی"
								id="postalCode"
							/>
						</label>
						{/* address */}
						<label className="flex gap-x-2 items-center justify-center" htmlFor="address">
							<HiMapPin className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-Info/50 hover:bg-Info cursor-pointer" />
							{/* input */}
							<textarea
								{...register('address')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								inputMode="decimal"
								placeholder="آدرس"
								id="address"
							/>
						</label>
						{/* createdAt */}
						<label
							className="cursor-not-allowed flex gap-x-2 items-center justify-center"
							htmlFor="createdAt"
						>
							<HiCalendarDays className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* input */}
							<input
								{...register('createdAt')}
								readOnly
								className="border-2 cursor-not-allowed border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								inputMode="decimal"
								placeholder="تاریخ ساخت حساب‌کاربری"
								id="createdAt"
							/>
						</label>
						{/* updatedAt */}
						<label
							className="cursor-not-allowed flex gap-x-2 items-center justify-center"
							htmlFor="updatedAt"
						>
							<HiPencilSquare className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* input */}
							<input
								{...register('updatedAt')}
								readOnly
								className="border-2 cursor-not-allowed border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								inputMode="decimal"
								placeholder="تاریخ آخرین به‌روزرسانی"
								id="updatedAt"
							/>
						</label>
						{/* emailVerified */}
						<label
							className="cursor-not-allowed flex gap-x-2 items-center justify-center"
							htmlFor="emailVerified"
						>
							<HiAtSymbol className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* input */}
							<input
								{...register('emailVerified')}
								readOnly
								className="border-2 cursor-not-allowed border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								inputMode="decimal"
								placeholder="آیا ایمیل تایید شده است ؟"
								id="emailVerified"
							/>
						</label>
						{/* isAdmin */}
						<label
							className="cursor-not-allowed flex gap-x-2 items-center justify-center"
							htmlFor="isAdmin"
						>
							<HiOutlineKey className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-red-400/50 hover:bg-red-400" />
							{/* input */}
							<input
								{...register('isAdmin')}
								readOnly
								className="border-2 cursor-not-allowed border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								inputMode="decimal"
								placeholder="آیا کاربر ادمین می‌باشد؟"
								id="isAdmin"
							/>
						</label>
						<div className="flex items-center justify-evenly">
							<button
								className="font-Lalezar mt-2 md:h-11 h-9 from-emerald-400 to-green-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
								disabled={isFormFetching}
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ویرایش کاربر'}
							</button>
							<button
								className="font-Lalezar cursor-pointer mt-2 md:h-11 h-9 from-rose-400 to-red-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								onClick={deleteUserHandler}
								disabled={isFormFetching2}
							>
								{isFormFetching2 ? <BeatLoader size={10} color="#FCFCFC" /> : 'حذف کاربر'}
							</button>
						</div>
					</form>
					{/* header */}
					<h4 className="flex justify-between items-center py-3 mt-10">
						<span className="flex select-none transition-colors items-center gap-x-2 text-lg md:text-xl lg:text-2xl font-Lalezar tracking-wider">
							<BsBasket className="text-red-500" />
							سفارشات کاربر
						</span>
						<span className="font-Vazir text-sm md:text-lg lg:text-xl tracking-tight mx-2 select-none font-bold text-slate-600">
							<span className="text-red-600"> تعداد: </span>
							{orders?.length.toLocaleString('fa-IR')}
						</span>
					</h4>
					<table className="table-auto border md:border-2 border-Info w-full text-center">
						<thead className="border-b-2 h-10 border-Info">
							<tr className="">
								<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10">تاریخ</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10">وضعیت</td>
								<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">
									قیمت کل
								</td>
							</tr>
						</thead>
						<tbody>
							{orders?.map((order: any, index: number) => (
								<tr
									key={index}
									className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer h-20"
									onClick={() => navigate(`/admin/orders/${String(order._id)}`)}
								>
									<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
									<td className="tracking-tighter sm:text-base">{order.updatedAt.slice(0, 16)}</td>
									<td className="tracking-tighter sm:text-base">
										{order.status === 'pending' ? (
											<span className="bg-yellow-400 px-5 font-bold py-1 rounded-full">انتظار</span>
										) : null}
									</td>
									<td className="tracking-tighter sm:text-base">
										{order.totalPrice.toLocaleString('fa-IR')}{' '}
										<span className="text-red-500 mr-1">تومان</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{/* header */}
					<h4 className="flex justify-between items-center py-3 mt-10">
						<span className="flex select-none transition-colors items-center gap-x-2 text-lg md:text-xl lg:text-2xl font-Lalezar tracking-wider">
							<BsBasket className="text-red-500" />
							سبدخرید کاربر
						</span>
						<span className="font-Vazir text-sm md:text-lg lg:text-xl tracking-tight mx-2 select-none font-bold text-slate-600">
							{basket?.totalPrice.toLocaleString('fa-IR')}
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
							{basket?.products.map((product: any, index: number) => (
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

export default SingleUser;
