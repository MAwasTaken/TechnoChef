// react
import React, { useEffect, useState } from 'react';

// redux
import { useSelector } from 'react-redux';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// react spinner
import { BeatLoader } from 'react-spinners';

// icons
import { FiEdit } from 'react-icons/fi';
import { user } from '../../../Types/User.types';
import { putSingleUser } from '../../../Services/Axios/Requests/user';
import { ToastContainer, toast } from 'react-toastify';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import {
	HiFingerPrint,
	HiIdentification,
	HiMap,
	HiPhone,
	HiScale,
	HiUserCircle
} from 'react-icons/hi';
import { VscWorkspaceTrusted, VscWorkspaceUntrusted } from 'react-icons/vsc';
import { SiTrustpilot } from 'react-icons/si';
import { postSendVerifyCode, postVerifyEmail } from '../../../Services/Axios/Requests/auth';
import { AiOutlineNumber } from 'react-icons/ai';

// edit user panel
const PanelEditUser: React.FC = () => {
	// initialize hook form
	const { register, reset, handleSubmit } = useForm({
		mode: 'all'
	});

	// is verifying email address
	const [isVerifyingEmail, setIsVerifyingEmail] = useState<boolean>(false);

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
	const [isFormFetching2, setIsFormFetching2] = useState<boolean>(false);

	// verify code
	const [verifyCode, setVerifyCode] = useState<string>('');

	// verifying email address
	const verifyEmail = () => {
		setIsFormFetching2(true);

		postVerifyEmail({ code: verifyCode })
			.then(() =>
				toast.success('ایمیل شما با موفقیت تایید شد ✅', {
					onClose: () => location.reload()
				})
			)
			.catch(() => toast.error('کد تایید وارد شده صحیح نمی‌باشد ❌'))
			.finally(() => {
				setIsFormFetching2(false);
				setIsVerifyingEmail(false);
			});
	};

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
					<div className="flex relative gap-x-2 items-center justify-center">
						<HiEnvelope className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow cursor-pointer" />
						{user.emailVerified ? (
							<VscWorkspaceTrusted className="text-green-500 absolute left-2 bg-green-400/50 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 cursor-none" />
						) : (
							<VscWorkspaceUntrusted
								onClick={() => {
									postSendVerifyCode()
										.then(() => {
											setIsVerifyingEmail(true);

											toast.success('کد تایید به ایمیل شما ارسال شد ✅', {
												onOpen: () => {
													const section = document.querySelector('#verifyEmail');
													section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
												}
											});
										})
										.catch(() =>
											toast.error('ایرادی در فرایند ارسال کد رخ داد ❌', {
												onClose: () => setIsVerifyingEmail(false)
											})
										);
								}}
								className="text-red-500 absolute left-2 bg-red-400/50 hover:bg-red-500/50 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 cursor-pointer"
							/>
						)}
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
					</div>
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
			{isVerifyingEmail ? (
				<section className="p-3 md:p-5 mb-10" id="verifyEmail">
					{/* header */}
					<h4 className="flex justify-between items-center border-b border-Info pb-3">
						<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
							<SiTrustpilot className="text-red-500" />
							تایید ایمیل
						</span>
					</h4>
					{/* confirmCode */}
					<label className="flex mt-10 gap-x-2 items-center justify-center" htmlFor="confirmCode">
						<AiOutlineNumber className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-Info/50 hover:bg-Info cursor-pointer" />
						{/* input */}
						<input
							required
							value={verifyCode}
							className="border-2 border-Info text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px md:w-1/2 xl:w-1/4 w-full text-right px-2"
							type="number"
							inputMode="decimal"
							placeholder="کد تایید"
							id="confirmCode"
							onChange={(e) => setVerifyCode(e.target.value)}
						/>
					</label>
					{/* submit button */}
					<button
						onClick={verifyEmail}
						disabled={isFormFetching2}
						className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-auto items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
						type="submit"
					>
						{isFormFetching2 ? <BeatLoader size={10} color="#FCFCFC" /> : 'تایید'}
					</button>
				</section>
			) : null}
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

export default PanelEditUser;
