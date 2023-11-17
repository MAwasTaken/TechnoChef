// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// axios
import { deleteSingleUser, getSingleUser } from '../../../../Services/Axios/Requests/user';

// react hook form
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// icons
import { BsBoxSeam } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

// react spinner
import { BeatLoader } from 'react-spinners';
import { newUserInputs } from '../../../../Types/NewUserInputs.types';

// single user
const SingleUser: React.FC = () => {
	// uel params
	const { userName } = useParams();

	// navigator
	const navigate = useNavigate();

	// spinner handlers
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// initialize hook form
	const { register, handleSubmit, getValues, reset } = useForm({
		mode: 'all'
	});

	useEffect(() => {
		getSingleUser(String(userName)).then((res) => {
			reset({
				firstName: res.data.firstName,
				lastName: res.data.lastName,
				userName: res.data.username,
				phoneNumber: res.data.phoneNumber,
				email: res.data.email
			});
		});
	}, []);

	// edit user handler
	const editUserHandler: SubmitHandler<newUserInputs> = (formData) => {
		console.log(formData);
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
						{`ویرایش کاربر - ${userName}`}
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
						<label
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="firstName"
						>
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
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="lastName">
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
						{/* userName */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="userName">
							{/* input */}
							<input
								required
								{...register('userName')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="text"
								placeholder="نام کاربری"
								id="userName"
							/>
						</label>
						{/* phoneNumber */}
						<label
							className="flex flex-col gap-y-1 items-center justify-center"
							htmlFor="phoneNumber"
						>
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
						{/* email */}
						<label className="flex flex-col gap-y-1 items-center justify-center" htmlFor="email">
							{/* input */}
							<input
								required
								{...register('email')}
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-3/4 xl:w-1/2 w-full text-right px-2"
								type="email"
								placeholder="ایمیل"
								id="email"
							/>
						</label>
						<div className="flex items-center justify-evenly">
							<button
								className="font-Lalezar mt-2 md:h-11 h-9 from-emerald-400 to-green-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ویرایش کاربر'}
							</button>
							<button
								className="font-Lalezar cursor-pointer mt-2 md:h-11 h-9 from-rose-400 to-red-500 flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								onClick={deleteUserHandler}
								disabled={isFormFetching}
							>
								{isFormFetching2 ? <BeatLoader size={10} color="#FCFCFC" /> : 'حذف کاربر'}
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

export default SingleUser;
