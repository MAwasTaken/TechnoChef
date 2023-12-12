// icons
import React, { FC, useState } from 'react';
import { BiShoppingBag, BiCategory } from 'react-icons/bi';

// types
import { ProductProps } from '../../Types/Products.types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Services/Redux/Slices/Category';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// axios
import { putAddProduct } from '../../Services/Axios/Requests/basket';
import { BeatLoader } from 'react-spinners';

// product details box
export const ProductDetailsBox: React.FC<ProductProps> = ({
	productName,
	category,
	description,
	finalPrice,
	price,
	cover,
	images,
	productColor,
	_id
}) => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// navigator
	const navigate = useNavigate();

	// GET user details from redux
	const user = useSelector((state: any) => state.user);

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// add product to basket
	const addProductToBasket = () => {
		setIsFormFetching(true);

		user._id
			? putAddProduct([
					{
						productId: _id!,
						quantity: 1
					}
			  ])
					.then(() =>
						toast.success(`محصول ${productName} به سبدخرید اضافه شد ! ✅`, {
							onClose: () =>
								// navigate to basket panel
								navigate('/panel/basket')
						})
					)
					.finally(() => setIsFormFetching(false))
			: toast.error('برای اضافه کردن محصول به سبدخرید ابتدا باید وارد شوید! ❌', {
					onOpen: () => setIsFormFetching(false),
					onClose: () =>
						// navigate to login page
						navigate('/login')
			  });
	};

	// tsx
	return (
		<>
			<div className="flex justify-center items-center lg:container">
				<div className="flex flex-col lg:flex-row gap-x-2 items-center md:p-5 justify-center h-max rounded-3xl lg:bg-white backdrop-blur-[2px] lg:shadow-md	w-full">
					{/* right side (responsive:up) */}
					<div className="flex w-2/6 justify-center items-center h-max">
						<div className="flex h-auto w-full">
							<Swiper
								loop={true}
								pagination={{
									dynamicBullets: true
								}}
								dir="ltr"
								autoFocus={true}
								autoplay={{
									delay: 3500,
									disableOnInteraction: true
								}}
								keyboard={{
									enabled: true
								}}
								modules={[Pagination, Autoplay, Keyboard]}
								className="w-full"
							>
								<SwiperSlide>
									<img
										className="mx-auto h-[134px] object-contain w-[134px] md:h-[230px] md:w-[230px] xl:w-[300px] xl:h-[300px]"
										src={`https://45.159.150.221:3000/${cover}`}
										alt="تصویر محصول"
										loading="lazy"
									/>
								</SwiperSlide>
								{images?.map((image: any, index: number) =>
									image !== '' ? (
										<SwiperSlide key={index}>
											<img
												className="mx-auto h-[134px] object-contain w-[134px] md:h-[230px] md:w-[230px] xl:w-[300px] xl:h-[300px]"
												src={`https://45.159.150.221:3000/${image}`}
												alt="تصویر محصول"
												loading="lazy"
											/>
										</SwiperSlide>
									) : null
								)}
							</Swiper>
						</div>
					</div>
					{/* divider */}
					<div className="flex">
						<span className="bg-white-300 h-full w-[2px]"></span>
					</div>
					{/* left side (responsive:down) */}
					<div className="flex px-5 items-center md:items-start flex-col w-full h-full">
						<div className="flex flex-col items-start md:gap-y-8 gap-y-4 justify-center h-2/3 w-full lg:w-2/3">
							<h1 className="font-Lalezar mr-4 flex select-none items-center self-center gap-x-1 text-sm md:gap-x-4 md:text-3xl line-clamp-2 mt-5 lg:mt-0">
								{productName}
							</h1>
							<div className="flex w-3/4 mx-auto justify-between md:gap-y-8 md:gap-x-0 gap-x-20 items-center flex-row">
								{category ? (
									<button
										onClick={() => {
											dispatch(setCategory(category));

											navigate('/products');
										}}
										className="flex bg-Info/50 lg:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer group hover:shadow-md transition-all shadow"
									>
										<span className="tracking-tighter font-semibold lg:text-black/75 flex items-center justify-between gap-x-1 group-hover:text-black group-hover:font-bold transition-colors duration-500">
											<BiCategory className="text-red-500 sm:group-hover:text-base transition-all" />
											{category}
										</span>
									</button>
								) : null}
								<div className="flex flex-row justify-end gap-x-1.5 md:gap-x-3">
									<span className="text-black/75 font-black">رنگ:</span>
									{productColor?.map((color, index: number) => (
										<span
											key={index}
											className="border-Dark/70 block md:h-5 md:w-5 h-[13px] w-[13px] duration-500 rounded-full border"
											style={{ backgroundColor: color }}
										></span>
									))}
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-y-8 items-center w-full flex-col md:flex-row">
							{description ? (
								<div className="flex md:leading-6 text-Dark/60 text-justify mt-4 md:w-1/2 tracking-tight">
									<span className="line-clamp-6 md:text-base text-xs">{description}</span>
								</div>
							) : null}
							<div className="md:flex flex-col w-1/2 gap-y-1 items-end px-10 justify-center hidden">
								<div className="flex flex-row gap-x-4 items-center">
									{finalPrice !== price ? (
										<span className="flex justify-center items-center rounded-lg bg-gradient-to-l from-red-500 to-red-600 pt-[3px] text-center text-[10px] font-bold text-white/70 h-6 w-10 text-sm">
											{Math.trunc(100 - (finalPrice * 100) / price).toLocaleString('fa-IR')}%
										</span>
									) : null}
									<span className="line font-Lalezar text-left font-bold tracking-tight text-red-500/80 line-through text-xl"></span>
								</div>
								{finalPrice !== price ? (
									<div className="flex flex-row items-center gap-x-2">
										<span className="font-Lalezar mt-1 text-2xl line-through text-Dark/70">
											{price.toLocaleString('fa-IR')}
										</span>
										<div className="h-6 w-6 text-orange-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 14 14"
												fill="currentColor"
											>
												<path
													d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
									</div>
								) : null}
								{!isFormFetching ? (
									<button
										disabled={user.isAdmin}
										onClick={addProductToBasket}
										className="font-Lalezar from-LightYellow to-DarkYellow flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-[10px] tracking-tighter shadow-md transition-all hover:bg-gradient-to-t md:w-[150px] md:p-2 md:text-lg"
									>
										<div className="flex gap-x-3 items-center justify-between">
											<span className="font-Lalezar mt-1 text-2xl">
												{finalPrice?.toLocaleString('fa-IR')}
											</span>
											<BiShoppingBag className="text-red-500 text-3xl"></BiShoppingBag>
										</div>
									</button>
								) : (
									<div className="font-Lalezar from-LightYellow to-DarkYellow flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-[10px] tracking-tighter shadow-md transition-all h-[52px] hover:bg-gradient-to-t md:w-[150px] md:p-2 md:text-lg">
										<BeatLoader size={10} color="#ffffff" />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* mobile add to cart section */}
			<section className="cursor-pointer md:hidden bg-Info/50 backdrop-blur-sm w-screen h-14 rounded-t-lg shadow-xl z-40 p-2 bottom-0 fixed flex gap-x-16 justify-center px-5 items-center">
				{finalPrice !== price ? (
					<span className="flex justify-center items-center rounded-lg bg-gradient-to-l from-red-500 to-red-600 pt-[3px] text-center text-[10px] font-bold text-white/70 h-6 w-10 text-sm">
						{Math.trunc(100 - (finalPrice * 100) / price).toLocaleString('fa-IR')}%
					</span>
				) : null}
				{!isFormFetching ? (
					<button
						disabled={user.isAdmin}
						onClick={addProductToBasket}
						className="flex justify-center items-center gap-x-1 bg-gradient-to-r from-LightYellow to-DarkYellow hover:bg-gradient-to-l transition-colors duration-500 rounded-md px-2 py-1"
					>
						<BiShoppingBag className="text-red-500 w-5 h-5" />
						<span className="font-Lalezar text-xl tracking-tight">
							{finalPrice?.toLocaleString('fa-IR')}
						</span>
						<div className="w-5 h-5 text-red-500">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor">
								<path
									d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					</button>
				) : (
					<div className="flex w-[145px] h-9 justify-center items-center gap-x-1 bg-gradient-to-r from-LightYellow to-DarkYellow hover:bg-gradient-to-l transition-colors duration-500 rounded-md px-2 py-1">
						<BeatLoader size={10} color="#ffffff" />
					</div>
				)}
				{finalPrice !== price ? (
					<span className="font-Lalezar mt-1 text-base line-through text-Dark/70">
						{price?.toLocaleString('fa-IR')}
					</span>
				) : null}
			</section>
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
export default ProductDetailsBox;
