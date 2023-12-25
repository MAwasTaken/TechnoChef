// react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// react query
import useGetBasket from '../../../Hooks/useGetBasket';

// icons
import { BiArrowBack } from 'react-icons/bi';
import { BsBasket, BsTrash } from 'react-icons/bs';

// axios
import { putRemoveProduct } from '../../../Services/Axios/Requests/basket';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// react spinner
import { BeatLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { HiRss } from 'react-icons/hi';

// panel basket
const PanelBasket: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// GET user data from redux
	const user = useSelector((state: any) => state.user);

	// get basket from react query
	const { data, isFetching, refetch } = useGetBasket();

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// remove product
	const removeProductFromBasket = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		productID: string
	) => {
		setIsFormFetching2(true);

		event.stopPropagation();

		putRemoveProduct({ productId: productID, quantity: 1 })
			.then(() =>
				toast.success('محصول با موفقیت از سبدخرید حذف شد !', {
					onOpen: () => refetch()
				})
			)
			.catch(() => toast.error('حذف محصول با اشکال مواجه شد! ❌', { onOpen: () => refetch() }))
			.finally(() => setIsFormFetching2(false));
	};

	// payment
	const payBasket = () => {
		setIsFormFetching(true);

		// check user details for payment
		if (!user.nationalCode || !user.postalCode || !user.address) {
			toast.error('برای ثبت سفارش ابتدا اطلاعات کاربری خود را تکمیل کنید !', {
				onOpen: () => setIsFormFetching(false),
				onClose: () => navigate(`/panel/${user.username}`)
			});
		} else {
      
    }
	};

	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<BsBasket className="text-red-500" />
						سبدخرید
					</span>
				</h3>
			</div>
			<main className="mx-5 gap-y-10">
				{isFetching ? (
					<span className="flex items-center justify-center gap-x-5 text-center w-full font-bold xl:text-lg bg-sky-500 md:py-4 text-Light py-2 rounded-md">
						در حال دریافت اطلاعات سبدخرید از سرور صبر کنید !
					</span>
				) : data?.products.length ? (
					<>
						<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
							<thead className="border-b-2 h-10 border-Info">
								<tr className="">
									<td className="sm:text-sm font-black text-Dark/70 h-10">تعداد</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10">تصویر</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10">عنوان</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">
										قیمت
									</td>
									<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">
										حذف
									</td>
								</tr>
							</thead>
							<tbody>
								{data?.products.map((product: any, index: number) => (
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
										<td className="tracking-tighter sm:text-base">
											{product.productId.productName}
										</td>
										<td className="tracking-tighter sm:text-base">
											{product.productId.finalPrice.toLocaleString('fa-IR')}{' '}
											<span className="text-red-500 mr-1">تومان</span>
										</td>
										<td className="tracking-tighter sm:text-base">
											<button
												onClick={(event) => removeProductFromBasket(event, product.productId._id)}
												type="button"
												className="bg-red-500 shadow-md p-1 md:p-1.5 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-red-600 transition-colors mr-1.5"
											>
												{isFormFetching2 ? (
													<HiRss className="md:w-6 md:h-6 h-4 w-4 text-white animate-pulse duration-[20ms]" />
												) : (
													<BsTrash className="md:w-6 md:h-6 h-4 w-4 text-white" />
												)}
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<section>
							<div className="mt-3 md:mt-5">
								<p className="md:text-xl text-lg font-Lalezar lg:text-2xl tracking-wider select-none">
									مبلغ قابل پرداخت:
									<span className="font-Vazir text-sm md:text-lg lg:text-xl tracking-tight mx-2 select-none font-bold text-slate-600">
										{data.totalPrice.toLocaleString('fa-IR')}
									</span>
									<span className="text-red-600 text-base md:text-sm lg:text-lg">تومان</span>
								</p>
							</div>
							{/* submit button */}
							<button
								disabled={isFormFetching}
								className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-emerald-400 to-green-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								onClick={payBasket}
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'پرداخت'}
							</button>
						</section>
					</>
				) : (
					<span
						onClick={() => navigate('/products')}
						className="text-center w-full font-bold cursor-pointer xl:text-lg bg-rose-500 py-2 md:py-4 text-Light rounded-md flex gap-x-5 items-center justify-center mb-40"
					>
						سبدخرید شما خالی می‌باشد !
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

export default PanelBasket;
