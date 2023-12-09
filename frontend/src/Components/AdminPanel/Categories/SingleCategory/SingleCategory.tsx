// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// react query
import useCategories from '../../../../Hooks/useCategories';

// icons
import { BiArrowBack, BiCategory } from 'react-icons/bi';

// react hook form
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// components
import CategoryItem from '../../../Categories/CategoryItem/CategoryItem';

// react spinner
import { BeatLoader } from 'react-spinners';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { deleteCategory, putCategory } from '../../../../Services/Axios/Requests/category';

// single category
const SingleCategory: React.FC = () => {
	// GET category href from url param
	const { href } = useParams();

	// initialize hook form
	const { register, handleSubmit, getValues, reset } = useForm({
		mode: 'all'
	});

	// category gradient color
	const [gradientColor, setGradientColor] = useState<string>();

	// category cover
	const [image, setImage] = useState<string>();

	// spinner handlers
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// form values
	const [formValue, setFormValues] = useState<FieldValues>();

	const [categoryID, setCategoryID] = useState<string>('');

	// GET all categories from react query
	const { data } = useCategories();

	// filter selected category
	useEffect(() => {
		const categoryData = data?.filter((category: any) => category.href === href);

		if (categoryData) {
			reset({
				Name: categoryData[0].Name,
				shortName: categoryData[0].shortName,
				href: categoryData[0].href
			});

			setFormValues(categoryData[0]);
			setCategoryID(categoryData[0]._id);
			setImage(categoryData[0].image);
			setGradientColor(categoryData[0].gradientColor);
		}
	}, [data]);

	const editCategoryHandler: SubmitHandler<any> = (formData) => {
		setIsFormFetching(true);

		formData.shortName = formData.href;
		formData.image = image;
		formData.gradientColor = gradientColor;

		const data = new FormData();

		data.append('Name', String(formData.Name));
		data.append('shortName', String(formData.shortName));
		data.append('href', String(formData.href));
		data.append('gradientColor', String(formData.gradientColor));
		image === ''
			? data.append('image', '')
			: typeof formData.image === 'string'
			? data.append('image', formData.image)
			: data.append('image', formData.image[0]);

		putCategory(categoryID, data)
			.then(() => {
				toast.success(`دسته‌بندی ${getValues('Name')} با موفقیت ویرایش شد ✅‍`, {
					onClose: () => location.assign('/admin/categories')
				});
			})
			.catch(() =>
				toast.error(`ویرایش دسته‌بندی انجام نشد! ❌‍`, {
					onClose: () => location.reload()
				})
			)
			.finally(() => setIsFormFetching(false));
	};

	const deleteCategoryHandler = () => {
		setIsFormFetching2(true);

		deleteCategory(categoryID)
			.then(() =>
				toast.success(`دسته‌بندی ${formValue?.Name} با موفقیت حذف شد ✅‍`, {
					onClose: () => location.assign('/admin/categories')
				})
			)
			.catch(() => toast.error('حذف دسته‌بندی انجام نشد ! ❌'))
			.finally(() => setIsFormFetching(false));
	};

	// tsx
	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<BiCategory className="text-red-500" />
						{`ویرایش دسته‌بندی - ${formValue?.Name}`}
					</span>
					<Link
						to="/admin/categories"
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
						<CategoryItem Name={formValue.Name} gradientColor={gradientColor} image={image} />
					) : (
						<CategoryItem Name="عنوان دسته‌بندی" gradientColor="#FFC01E" />
					)}
				</section>
				<section className="grow">
					{/* form */}
					<form
						onChange={() => setFormValues(getValues())}
						onSubmit={handleSubmit(editCategoryHandler)}
						className="flex flex-col gap-y-2 md:gap-y-4"
					>
						{/* Name */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="Name">
							{/* input */}
							<input
								required
								{...register('Name')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="عنوان دسته‌بندی"
								id="Name"
							/>
						</label>
						{/* href */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="href">
							{/* input */}
							<input
								required
								{...register('href')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="پسوند دسته‌بندی"
								id="href"
							/>
						</label>
						{/* categoryColor */}
						<div className="flex relative flex-col w-3/4 gap-y-1 items-center justify-center">
							{/* input */}
							<input
								className="cursor-pointer shadow-md h-10 w-2/12 rounded-lg border-2 border-DarkYellow p-0.5 my-3"
								onBlur={(e) => setGradientColor(e.target.value)}
								type="color"
								id="categoryColor"
								autoComplete="categoryColor"
							/>
							<div className="flex gap-x-2.5 justify-center items-center w-full flex-wrap gap-y-2.5">
								{gradientColor ? (
									<span
										className="px-2.5 select-none py-1.5 bg-gradient-to-r from-LightYellow to-DarkYellow rounded-lg shadow"
										style={{ color: gradientColor }}
									>
										{gradientColor}
									</span>
								) : null}
							</div>
						</div>
						{/* image */}
						<section className="flex gap-y-1 relative items-center justify-between">
							<span className="absolute sm:text-base right-0 -translate-y-1/2 top-1/2 font-Lalezar text-sm text-Dark/80">
								تصویر:
							</span>
							{/* input */}
							<input
								{...register('image')}
								onChange={(e) => {
									setImage(e.target.files ? URL.createObjectURL(e.target.files[0]) : '');

									window.scrollTo({ top: 0, behavior: 'smooth' });
								}}
								className="rounded-lg shadow-md border-2 md:w-24 w-[77px] py-1 mx-auto border-r-DarkYellow pr-0.5 my-3"
								type="file"
								accept="image/*"
								id="image"
							/>
							{image ? (
								<img
									onClick={() => setImage('')}
									className="mx-auto absolute cursor-pointer hidden xl:block left-0 border-2 border-DarkYellow p-1 rounded-lg h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
									src={
										image.includes('public') ? `https://45.159.150.221:3000/${image}` : `${image}`
									}
									alt="تصویر دسته‌‌بندی"
									loading="lazy"
								/>
							) : null}
						</section>
						<div className="flex items-center justify-evenly">
							<button
								className="font-Lalezar mt-2 md:h-11 h-9 from-emerald-400 to-green-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ویرایش دسته‌بندی'}
							</button>
							<button
								className="font-Lalezar cursor-pointer mt-2 md:h-11 h-9 from-rose-400 to-red-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								onClick={deleteCategoryHandler}
								disabled={isFormFetching2}
							>
								{isFormFetching2 ? <BeatLoader size={10} color="#FCFCFC" /> : 'حذف دسته‌بندی'}
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

export default SingleCategory;
