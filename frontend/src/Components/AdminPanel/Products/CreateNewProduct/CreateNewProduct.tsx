// react
import { useState } from 'react';

// react hook form
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// components
import ProductBox from '../../../ProductBox/ProductBox';
import { BsBoxSeam } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

// react query
import useCategories from '../../../../Hooks/useCategories';

// axios
import { postCreateProduct } from '../../../../Services/Axios/Requests/products';

// types
import { NewProductInputs } from '../../../../Types/NewProductInputs.types';

// react toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// react spinner
import { BeatLoader } from 'react-spinners';

// create new product
const CreateNewProduct: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// initialize hook form
	const { register, handleSubmit, getValues } = useForm({
		mode: 'all'
	});

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// GET categories from backend
	const { data } = useCategories();

	// create new product handler
	const newProductHandler: SubmitHandler<NewProductInputs> = (formData) => {
		setIsFormFetching(true);

		formData.productColor = productColor;

		const data = new FormData();

		data.append('productName', String(formData.productName));
		data.append('shortName', String(formData.shortName));
		data.append('price', String(formData.price));
		data.append('finalPrice', String(formData.finalPrice));
		formData.productColor.map((color) => data.append('productColor', color));
		data.append('QTY', String(formData.QTY));
		data.append('cover', formData.cover ? formData.cover[0] : '');
		data.append('description', String(formData.description));
		data.append('category', String(formData.category));
		data.append('best_seller', String(formData.best_seller));

		postCreateProduct(data)
			.then((res) => {
				toast.success(`محصول ${res.data.productName} با موفقیت افزوده شد ✅‍`, {
					onClose: () => navigate('/admin/products')
				});
			})
			.catch(() =>
				toast.error(`افزودن محصول انجام نشد! ❌‍`, {
					onClose: () => location.reload()
				})
			)
			.finally(() => setIsFormFetching(false));
	};

	// form values
	const [formValue, setFormValues] = useState<FieldValues>();

	// product colors list
	const [productColor, setProductColor] = useState<string[]>([]);

	// product image data url
	const [image, setImage] = useState<string>('');

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<BsBoxSeam className="text-red-500" />
						افزودن محصول جدید
					</span>
					<Link
						to="/admin/products"
						className="md:border-2 border duration-500 transition-all border-Info p-1 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
					>
						<span>
							<BiArrowBack className="text-red-500 w-5 h-5" />
						</span>
					</Link>
				</h3>
			</div>
			<main className="m-10 flex flex-col md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<section className="mx-auto md:mx-0">
					{formValue ? (
						<ProductBox
							productName={getValues('productName')}
							shortName={getValues('shortName')}
							price={Number(getValues('price'))}
							finalPrice={Number(getValues('finalPrice'))}
							productColor={productColor}
							cover={image}
						/>
					) : (
						<ProductBox
							productName="نام محصول"
							price={999999999}
							finalPrice={111111111}
							productColor={['#ffffff', '#999999', '#121212']}
						/>
					)}
				</section>
				<section className="grow">
					{/* form */}
					<form
						onChange={() => setFormValues(getValues())}
						onSubmit={handleSubmit(newProductHandler)}
						className="flex flex-col gap-y-2 md:gap-y-4"
					>
						{/* productName */}
						<label
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="productName"
						>
							{/* input */}
							<input
								required
								{...register('productName')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام محصول"
								id="productName"
							/>
						</label>
						{/* shortName */}
						<label
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="shortName"
						>
							{/* input */}
							<input
								required
								{...register('shortName')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام کوتاه"
								id="shortName"
							/>
						</label>
						{/* price */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="price">
							{/* input */}
							<input
								required
								{...register('price')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								inputMode="decimal"
								placeholder="قیمت"
								id="price"
								autoComplete="price"
							/>
						</label>
						{/* finalPrice */}
						<label
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="finalPrice"
						>
							{/* input */}
							<input
								required
								{...register('finalPrice')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								inputMode="decimal"
								placeholder="قیمت پس از تخفیف"
								id="finalPrice"
								autoComplete="finalPrice"
							/>
						</label>
						{/* QTY */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="QTY">
							{/* input */}
							<input
								required
								{...register('QTY')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="number"
								inputMode="decimal"
								placeholder="تعداد"
								id="QTY"
								autoComplete="QTY"
							/>
						</label>
						{/* description */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="QTY">
							{/* input */}
							<textarea
								required
								{...register('description')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 w-full xl:w-1/2 text-right px-2"
								placeholder="توضیحات"
								id="description"
								autoComplete="description"
							/>
						</label>
						{/* productColor */}
						<div className="flex relative flex-col gap-y-1 items-center justify-center">
							<span className="absolute sm:text-base right-0 top-1/4 font-Lalezar text-sm text-Dark/80">
								رنگ محصول:
							</span>
							{/* input */}
							<input
								required
								className="md:w-2/12 cursor-pointer w-1/2 h-10 rounded-lg border-2 border-DarkYellow p-0.5 my-3"
								onBlur={(e) => setProductColor([...productColor, e.target.value])}
								type="color"
								id="productColor"
								autoComplete="productColor"
							/>
							<div className="flex gap-x-2.5 justify-center items-center w-full flex-wrap gap-y-2.5">
								{productColor?.map((color, index) => (
									<span
										className="px-2.5 select-none py-1.5 bg-gradient-to-r cursor-pointer from-LightYellow to-DarkYellow rounded-lg shadow"
										key={index}
										style={{ color: color }}
										onClick={(e) =>
											setProductColor(productColor.filter((item, itemIndex) => itemIndex !== index))
										}
									>
										{color}
									</span>
								))}
							</div>
						</div>
						{/* category */}
						<div className="flex gap-y-1 relative items-center justify-center">
							<span className="absolute sm:text-base right-0 top-1/2 -translate-y-1/2 font-Lalezar text-sm text-Dark/80">
								دسته بندی:
							</span>
							{/* input */}
							<select
								{...register('category')}
								id="category"
								className="md:w-2/12 cursor-pointer w-1/2 h-10 rounded-lg border-2 border-DarkYellow p-0.5 my-3"
							>
								{data?.map(
									(category: {
										_id: string;
										shortName: string;
										Name: string;
										href: string;
										gradientColor: string;
									}) => (
										<option key={category._id} value={category.Name}>
											{category.Name}
										</option>
									)
								)}
							</select>
						</div>
						{/* cover */}
						<div className="flex gap-y-1 relative items-center justify-between">
							<span className="absolute sm:text-base right-0 -translate-y-1/2 top-1/2 font-Lalezar text-sm text-Dark/80">
								کاور محصول:
							</span>
							{/* input */}
							<input
								required
								{...register('cover')}
								onChange={(e) =>
									setImage(e.target.files ? URL.createObjectURL(e.target.files[0]) : '')
								}
								className="rounded-lg border-2 md:w-24 w-[77px] py-1 mx-auto border-r-DarkYellow pr-0.5 my-3"
								type="file"
								accept="image/*"
								id="images"
							/>
							{image ? (
								<img
									onClick={() => setImage('')}
									className="mx-auto absolute cursor-pointer hidden xl:block left-0 border-2 border-DarkYellow p-1 rounded-lg h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
									src={image}
									alt="تصویر محصول"
									loading="lazy"
								/>
							) : null}
						</div>
						{/* best seller */}
						<label
							className="inline-flex gap-y-1 items-center justify-between w-1/2"
							htmlFor="best_seller"
						>
							<span className="select-none cursor-pointer font-Lalezar text-Dark/80 sm:text-base text-sm">
								نمایش به عنوان پرفروش:
							</span>
							{/* input */}
							<input
								{...register('best_seller')}
								className="w-5 h-5 accent-DarkYellow cursor-pointer shadow-lg"
								type="checkbox"
								placeholder="قیمت پس از تخفیف"
								id="best_seller"
							/>
						</label>
						{/* submit button */}
						<button
							className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
							type="submit"
						>
							{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'افزودن محصول جدید'}
						</button>
					</form>
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
export default CreateNewProduct;
