// react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { BiArrowBack, BiCategory } from 'react-icons/bi';

// components
import CategoryItem from '../../../Categories/CategoryItem/CategoryItem';

// react hook form
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// react spinner
import { BeatLoader } from 'react-spinners';

// axios
import { postCreateCategory } from '../../../../Services/Axios/Requests/category';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// create new category
const CreateNewCategory: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// category cover
	const [image, setImage] = useState<string>();

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// category gradient color
	const [gradientColor, setGradientColor] = useState<string>();

	// initialize hook form
	const { register, handleSubmit, getValues } = useForm({
		mode: 'all'
	});

	// form values
	const [formValue, setFormValues] = useState<FieldValues>();

	const newCategoryHandler: SubmitHandler<any> = (formData) => {
		setIsFormFetching(true);

		formData.image = image;
		formData.gradientColor = gradientColor;

		const data = new FormData();

		data.append('shortName', String(formData.href));
		data.append('Name', String(formData.Name));
		data.append('href', String(formData.href));
		data.append('image', formData.cover ? formData.cover[0] : '');
		data.append('gradientColor', String(formData.gradientColor));

		postCreateCategory(data)
			.then((res) => {
				toast.success(`دسته‌بندی ${res.data.Name} با موفقیت افزوده شد ✅‍`, {
					onClose: () => navigate('/admin/categories')
				});
			})
			.catch(() => toast.error(`افزودن دسته‌بندی انجام نشد! ❌‍`))
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
						افزودن دسته‌بندی جدید
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
			<main className="m-10 flex flex-col relative md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<section className="mx-auto md:mx-0">
					{formValue ? (
						<CategoryItem
							Name={getValues('Name')}
							gradientColor={gradientColor}
							href={getValues('href')}
							image={image}
						/>
					) : (
						<CategoryItem Name="عنوان دسته بندی" gradientColor="#FFC01E" />
					)}
				</section>
				<section className="grow">
					{/* form */}
					<form
						onChange={() => setFormValues(getValues())}
						onSubmit={handleSubmit(newCategoryHandler)}
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
								id="Name"
							/>
						</label>
						{/* productColor */}
						<div className="flex relative flex-col w-3/4 gap-y-1 items-center justify-center">
							{/* input */}
							<input
								className="cursor-pointer shadow-md h-10 w-2/12 rounded-lg border-2 border-DarkYellow p-0.5 my-3"
								onBlur={(e) => setGradientColor(e.target.value)}
								type="color"
								id="productColor"
								autoComplete="productColor"
							/>
							<div className="flex gap-x-2.5 justify-center items-center w-full flex-wrap gap-y-2.5">
								{gradientColor ? (
									<span
										className="px-2.5 select-none py-1.5 bg-gradient-to-r cursor-pointer from-LightYellow to-DarkYellow rounded-lg shadow"
										style={{ color: gradientColor }}
										onClick={() => setGradientColor('')}
									>
										{gradientColor}
									</span>
								) : null}
							</div>
						</div>
						{/* cover */}
						<section className="flex gap-y-1 relative items-center justify-between">
							<span className="absolute sm:text-base right-0 -translate-y-1/2 top-1/2 font-Lalezar text-sm text-Dark/80">
								تصویر:
							</span>
							{/* input */}
							<input
								{...register('cover')}
								onChange={(e) => {
									setImage(e.target.files ? URL.createObjectURL(e.target.files[0]) : '');

									window.scrollTo({ top: 0, behavior: 'smooth' });
								}}
								className="rounded-lg shadow-md border-2 md:w-24 w-[77px] py-1 mx-auto border-r-DarkYellow pr-0.5 my-3"
								type="file"
								accept="image/*"
								id="cover"
							/>
							{image ? (
								<img
									onClick={() => setImage('')}
									className="mx-auto absolute cursor-pointer -top-4 hidden xl:block left-0 border-2 border-DarkYellow p-1 rounded-lg h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
									src={image}
									alt="تصویر محصول"
									loading="lazy"
								/>
							) : null}
						</section>
						<button
							disabled={isFormFetching}
							className="font-Lalezar mx-auto mt-5 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-10 md:w-[200px] md:p-2 md:text-lg disabled:bg-gray-400"
							type="submit"
						>
							{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'افزودن دسته‌بندی جدید'}
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

export default CreateNewCategory;
