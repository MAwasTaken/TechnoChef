// react
import React, { useEffect, useState } from 'react';

// redux
import { useSelector } from 'react-redux';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { BsBoxSeam } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// icons
import { BiArrowBack } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { user } from '../../../Types/User.types';
import { putSingleUser } from '../../../Services/Axios/Requests/user';
import { toast } from 'react-toastify';

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
			username: user.username
		});
	}, []);

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const isDisabled = true;

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
			.catch(() => toast.error('ویرایش اطلاعات کاربری با مشکل مواجه شد ! ❌'));
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
					<Link
						to="/panel"
						className="md:border-2 border duration-500 transition-all border-Info p-1 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
					>
						<span>
							<BiArrowBack className="text-red-500 w-5 h-5" />
						</span>
					</Link>
				</h3>
			</div>
			<main className="m-5 flex flex-col relative md:flex-row-reverse gap-y-10 justify-center md:justify-between">
				<form
					onSubmit={handleSubmit(updateUserDetail)}
					className="flex flex-col gap-y-2 md:gap-y-4 grow"
				>
					{/* firstName */}
					<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="firstName">
						<span className='text-base text-right'>نام</span>
						{/* input */}
						<input
							required
							{...register('firstName')}
							className="text-base outline-none bg-white focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="text"
							placeholder="نام"
							id="firstName"
						/>
					</label>
					{/* lastName */}
					<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="lastName">
						<span>نام خانوادگی</span>
						{/* input */}
						<input
							required
							{...register('lastName')}
							className="text-base outline-none bg-white focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="text"
							placeholder="نام خانوادگی"
							id="lastName"
						/>
					</label>
					{/* phoneNumber */}
					<label
						className="flex flex-col gap-y-1 items-center justify-center"
						htmlFor="phoneNumber"
					>
						{/* input */}
						<span>شماره تماس</span>
						<input
							disabled={isDisabled}
							required
							{...register('phoneNumber')}
							className="text-base outline-none cursor-not-allowed focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="text"
							placeholder="شماره تماس"
							id="phoneNumber"
						/>
					</label>
					{/* username */}
					<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="username">
						{/* input */}
						<span>نام کاربری</span>

						<input
							required
							{...register('username')}
							className="text-base outline-none bg-white focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="text"
							placeholder="نام کاربری"
							id="username"
						/>
					</label>
					{/* email */}
					<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="email">
						{/* input */}
						<span>آدرس ایمیل</span>
						<input
							required
							{...register('email')}
							className="text-base outline-none bg-white focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="email"
							placeholder="شماره تماس"
							id="email"
						/>
					</label>
					{/* Address */}
					<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="email">
						{/* input */}
						<span>نشانی</span>
						<input
							required
							{...register('email')}
							className="text-base outline-none bg-white focus:drop-shadow-lg duration-100 rounded-lg py-4 drop-shadow-sm md:w-3/4 xl:w-1/2 w-full text-right px-4 flex items-center"
							type="email"
							placeholder="نشانی"
							id="email"
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
