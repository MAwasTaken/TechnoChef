// react
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// icons
import { BsBoxSeam, BsPlus, BsTrash } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

// components
import ProductBox from '../../../ProductBox/ProductBox';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// react hook form
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// react query
import useCategories from '../../../../Hooks/useCategories';

// react spinner
import { BeatLoader } from 'react-spinners';

// axios
import {
	deleteSingleProduct,
	getSingleProduct,
	putSingleProduct
} from '../../../../Services/Axios/Requests/products';

// types
import { NewProductInputs } from '../../../../Types/NewProductInputs.types';

// ck editor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// single product
const SingleProduct = () => {
	// uel params
	const params = useParams();

	// navigator
	const navigate = useNavigate();

	// initialize hook form
	const { register, handleSubmit, getValues, reset } = useForm({
		mode: 'all'
	});

	// details count
	const [detailsCount, setDetailsCount] = useState<number>(1);

	// spinner handlers
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// GET categories from backend
	const { data } = useCategories();

	// form values
	const [formValue, setFormValues] = useState<FieldValues>();

	// product colors list
	const [productColor, setProductColor] = useState<string[]>([]);

	// product image data url
	const [cover, setCover] = useState<string>('');

	// product images
	const [images, setImages] = useState<any>([]);

	// product description
	const [description, setDescription] = useState<string>('');

	// mounting side effects
	useEffect(() => {
		getSingleProduct(String(params.shortName)).then((res) => {
			setFormValues(res.data);

			reset({
				productName: res.data.productName,
				shortName: res.data.shortName,
				price: res.data.price,
				finalPrice: res.data.finalPrice,
				QTY: res.data.QTY,
				productColor: res.data.productColor,
				category: res.data.category,
				cover: res.data.cover,
				details: res.data.details,
				images: res.data.images,
				best_seller: res.data.best_seller
			});

			setDescription(res.data.description);
			setProductColor(res.data.productColor);
			setCover(`${res.data.cover}`);
			setDetailsCount(res.data.details.length);
			setImages(res.data.images);
		});
	}, []);

	// edit product handler
	const editProductHandler: SubmitHandler<NewProductInputs> = (formData) => {
		setIsFormFetching(true);

		formData.details = formData.details?.slice(0, detailsCount);
		formData.productColor = productColor;
		formData.images = images;

		const data = new FormData();

		data.append('productName', String(formData.productName));
		data.append('shortName', String(formData.shortName));
		data.append('price', String(formData.price));
		data.append('finalPrice', String(formData.finalPrice));
		formData.productColor.map((color) => data.append('productColor', color));
		data.append('QTY', String(formData.QTY));
		cover === ''
			? data.append('cover', '')
			: typeof formData.cover === 'string'
			? data.append('cover', formData.cover)
			: data.append('cover', formData.cover[0]);
		data.append('description', String(description));
		data.append('category', String(formData.category));
		formData.images.length === 0
			? data.append('images', '')
			: formData.images.map((image: File) => data.append('images', image));
		formData.details?.map((item: { title: string; value: string }, index) => {
			data.append(`details[${index}][title]`, item.title);
			data.append(`details[${index}][value]`, item.value);
		});
		data.append('best_seller', String(formData.best_seller));

		putSingleProduct(String(params.shortName), data)
			.then((res) => {
				toast.success(`محصول ${getValues('productName')} با موفقیت ویرایش شد ✅‍`, {
					onClose: () => navigate('/admin/products')
				});
			})
			.catch((err) =>
				toast.error(`ویرایش محصول انجام نشد! ❌‍`, {
					onClose: () => location.reload()
				})
			)
			.finally(() => setIsFormFetching(false));
	};

	// delete product handler
	const deleteProductHandler = () => {
		setIsFormFetching2(true);

		deleteSingleProduct(String(params.shortName))
			.then((res) =>
				toast.success(`محصول ${formValue?.productName} با موفقیت حذف شد ✅‍`, {
					onClose: () => navigate('/admin/products')
				})
			)
			.catch(() => toast.error('حذف محصول انجام نشد ! ❌'))
			.finally(() => setIsFormFetching(false));
	};

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<BsBoxSeam className="text-red-500" />
						{`ویرایش محصول - ${params.shortName}`}
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
			<main className="m-10 flex relative flex-col md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<section className="mx-auto md:mx-0">
					{formValue ? (
						<ProductBox
							productName={formValue.productName}
							shortName={formValue.shortName}
							price={Number(formValue.price)}
							finalPrice={Number(formValue.finalPrice)}
							productColor={productColor}
							cover={cover}
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
						onSubmit={handleSubmit(editProductHandler)}
						className="flex flex-col gap-y-2 md:gap-y-4"
					>
						{/* productName */}
						<label
							title="نام محصول"
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
							title="نام کوتاه"
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
						<label
							title="قیمت"
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="price"
						>
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
							title="قیمت نهایی"
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
						<label
							title="تعداد"
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="QTY"
						>
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
						<label
							title="توضیحات"
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="description"
						>
							{/* input */}
							<CKEditor
								config={{ language: 'fa', toolbar: { shouldNotGroupWhenFull: true } }}
								data={description}
								editor={ClassicEditor}
								onChange={(event, editor) => setDescription(editor.getData())}
							/>
						</label>
						{/* details */}
						<section className="flex flex-col gap-y-2">
							<span className="sm:text-base font-Lalezar text-sm text-Dark/80">مشخصات:</span>
							{Array.from({ length: detailsCount }).map((item, index) => (
								<label
									key={index}
									htmlFor="details"
									className="flex items-center relative justify-between"
								>
									<span className="block absolute font-Lalezar text-xl -right-6">
										{Number(index + 1).toLocaleString('fa-IR')}
									</span>
									<span className="h-full w-0.5 rounded-full block absolute bg-red-500 -right-1"></span>
									{/* input */}
									<div className="flex flex-col w-full lg:flex-row relative gap-y-px items-center justify-center gap-x-px">
										<input
											{...register(`details[${index}][title]`)}
											type="text"
											placeholder="عنوان"
											className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 w-full lg:w-2/6 text-right px-2"
										/>
										<input
											{...register(`details[${index}][value]`)}
											type="text"
											placeholder="مقدار"
											className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 w-full text-right px-2"
										/>
									</div>
								</label>
							))}
							<div className="flex self-end gap-x-2">
								<button
									type="button"
									className="bg-red-500 shadow-md p-1 md:p-1.5 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-red-600 transition-colors mr-1.5"
									onClick={() => setDetailsCount(detailsCount - 1)}
									disabled={detailsCount === 1}
								>
									<BsTrash className="md:w-6 md:h-6 h-4 w-4 text-white" />
								</button>
								<button
									type="button"
									className="bg-sky-500 shadow-md p-1 md:p-1.5 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-sky-600 transition-colors mr-1.5"
									onClick={() => setDetailsCount(detailsCount + 1)}
								>
									<BsPlus className="md:w-6 md:h-6 h-5 w-5 text-white" />
								</button>
							</div>
						</section>
						{/* productColor */}
						<div className="flex relative flex-col gap-y-1 items-center justify-center">
							<span className="absolute sm:text-base right-0 top-1/4 font-Lalezar text-sm text-Dark/80">
								رنگ:
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
								کاور:
							</span>
							{/* input */}
							<input
								{...register('cover')}
								onChange={(e) =>
									setCover(e.target.files ? URL.createObjectURL(e.target.files[0]) : '')
								}
								className="rounded-lg border-2 md:w-24 w-[77px] py-1 mx-auto border-r-DarkYellow pr-0.5 my-3"
								type="file"
								accept="image/*"
								id="images"
							/>
							{cover ? (
								<img
									onClick={() => setCover('')}
									className="mx-auto absolute cursor-pointer hidden xl:block left-0 border-2 border-DarkYellow p-1 rounded-lg h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
									src={
										cover.includes('public') ? `https://45.159.150.221:3000/${cover}` : `${cover}`
									}
									alt="تصویر محصول"
									loading="lazy"
								/>
							) : null}
						</div>
						{/* best seller */}
						<label
							className="inline-flex gap-y-1 gap-x-2 items-center justify-between absolute -top-10 -right-5"
							htmlFor="best_seller"
						>
							<span className="select-none cursor-pointer font-Lalezar text-Dark/80 sm:text-base text-sm">
								نمایش به عنوان پرفروش:
							</span>
							{/* input */}
							<input
								{...register('best_seller')}
								className="w-5 h-5 accent-DarkYellow cursor-pointer shadow-md"
								type="checkbox"
								placeholder="قیمت پس از تخفیف"
								id="best_seller"
							/>
						</label>
						{/* images */}
						<section className="flex flex-col gap-y-1 relative items-center justify-between">
							<div className="flex items-center justify-evenly w-full">
								<span className="sm:text-base font-Lalezar text-sm text-Dark/80">تصاویر:</span>
								<input
									disabled={images.length >= 5}
									{...register('images')}
									onChange={(e) =>
										setImages([...images, e.target.files ? e.target.files[0] : null])
									}
									className="rounded-lg shadow-md border-2 md:w-[95px] w-[80px] py-1 mx-auto border-r-DarkYellow pr-0.5 my-3"
									type="file"
									accept="image/*"
									id="images"
								/>
							</div>
							<div className="flex gap-x-2.5 flex-wrap gap-y-2.5">
								{images?.map((image: any, index: number) =>
									image !== '' ? (
										<img
											key={index}
											onClick={() =>
												setImages(
													images.filter((item: File, itemIndex: number) => itemIndex !== index)
												)
											}
											className="mx-auto cursor-pointer border-2 border-red-500 p-1 rounded-lg h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
											src={
												typeof image === 'string'
													? `https://45.159.150.221:3000/${image}`
													: `${URL.createObjectURL(image)}`
											}
											alt="تصویر محصول"
											loading="lazy"
										/>
									) : null
								)}
							</div>
						</section>
						<div className="flex items-center justify-evenly">
							<button
								className="font-Lalezar mt-2 md:h-11 h-9 from-emerald-400 to-green-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ویرایش محصول'}
							</button>
							<button
								className="font-Lalezar cursor-pointer mt-2 md:h-11 h-9 from-rose-400 to-red-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								onClick={deleteProductHandler}
								disabled={isFormFetching}
							>
								{isFormFetching2 ? <BeatLoader size={10} color="#FCFCFC" /> : 'حذف محصول'}
							</button>
						</div>
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
export default SingleProduct;
