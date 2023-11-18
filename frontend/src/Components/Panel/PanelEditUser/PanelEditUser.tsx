// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// react spinner
import { BeatLoader } from 'react-spinners';

// icons
import { BiArrowBack } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { user } from '../../../Types/User.types';
import { putSingleUser } from '../../../Services/Axios/Requests/user';
import { toast } from 'react-toastify';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import {
	HiFingerPrint,
	HiIdentification,
	HiMap,
	HiPhone,
	HiScale,
	HiUserCircle
} from 'react-icons/hi';

// edit user panel
const PanelEditUser: React.FC = () => {
	// initialize hook form
	const { register, reset, handleSubmit } = useForm({
		mode: 'all'
	});

	// GET user details from redux
	const user = useSelector((state: any) => state.user);

	useEffect(() => {
		reset({
			firstName: user.firstName,
			lastName: user.lastName,
			phoneNumber: user.phoneNumber,
			email: user.email,
			username: user.username,
			nationalCode: user.nationalCode,
			postalCode: user.postalCode,
			address: user.address
		});
	}, []);

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// update user infos
	const updateUserDetail: SubmitHandler<user> = (data) => {
		// set is fetching to true
		setIsFormFetching(true);

		putSingleUser(data)
			.then(() =>
				toast.success('ویرایش اطلاعات کاربری با موفقیت انجام شد ✅', {
					onOpen: () => setIsFormFetching(false),
					onClose: () => location.reload()
				})
			)
			.catch(() =>
				toast.error('ویرایش اطلاعات کاربری با مشکل مواجه شد !', {
					onClose: () => setIsFormFetching(false)
				})
			);
	};

	return (
		<>
			<div className="p-3 md:p-5">
				{/* header */}
				<h3 className="flex justify-between items-center border-b border-Info pb-3">
					<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
						<FiEdit className="text-red-500" />
						ویرایش اطلاعات کاربری
					</span>
				</h3>
			</div>
			<main className="m-5 flex flex-col relative md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<form
					onSubmit={handleSubmit(updateUserDetail)}
					className="flex flex-col gap-y-2 md:gap-y-4 grow"
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
							className="border-2 border-Info text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
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
							className="border-2 border-Info text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
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
							className="border-2 border-Info text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
							inputMode="decimal"
							placeholder="آدرس"
							id="address"
						/>
					</label>
					{/* submit button */}
					<button
						disabled={isFormFetching}
						className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
						type="submit"
					>
						{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ویرایش'}
					</button>
				</form>
			</main>
		</>
	);
};

export default PanelEditUser;
