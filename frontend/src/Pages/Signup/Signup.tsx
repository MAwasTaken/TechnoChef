// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { IoCreateOutline } from 'react-icons/io5';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpAuthSchema } from '../../Services/Yup/signupAuth';

// types
import { signupInputs } from '../../Types/signupInputs.types';

// axios
import { postSignup } from '../../Services/Axios/Requests/auth';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// signup page
const Signup: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - ثبت‌نام';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// initialize hook form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<signupInputs>({
		mode: 'all',
		resolver: yupResolver(signUpAuthSchema)
	});

	// google recaptch handler
	const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);

	// form xss prevent handler
	const [isFormReady, setIsFormReady] = useState<boolean>(true);

	// signup handler
	const signupHandler: SubmitHandler<signupInputs> = (data) => {
		// set form unavailable
		setIsFormReady(false);

		// delete confirmPassword filed
		Reflect.deleteProperty(data, 'confirmPassword');

		// POST login
		postSignup(data)
			// on success
			.then((res) =>
				toast.success(`${res.data.firstName} ${res.data.lastName} خوش آمدید 👋 وارد شوید !`, {
					onClose: () => {
						// navigate to panel
						navigate('/login');

						// set form available
						setIsFormReady(true);
					}
				})
			)
			// on error
			.catch(() =>
				toast.error('ساخت حساب کاربری با مشکل مواجه شد ❌', {
					onClose: () =>
						// set form available
						setIsFormReady(true)
				})
			);
	};

	// tsx
	return (
		<>
			<div className="flex h-screen flex-col justify-between">
				<Header />
				<div className="flex items-center justify-center">
					<main className="md:bg-Info/50 bg-transparent flex h-auto w-full flex-col items-center gap-y-2 px-8 py-8 backdrop-blur-[2px] sm:w-4/4 md:rounded-3xl md:gap-y-4 md:w-[690px]">
						{/* logo */}
						<Link
							className="font-Lalezar mt- ${errors.firstName ? 'focus:border-red-500 border-red-500' : ''}2 text-3xl font-bold tracking-t`}ght text-orange-500 transition-all hover:text-orange-600 md:text-3xl"
							to="/"
						>
							TechnoShef
						</Link>
						{/* title */}
						<section className="flex w-full items-center justify-between">
							<h2 className="font-Lalezar flex select-none items-center gap-x-[2px] text-2xl md:gap-x-1 md:text-3xl">
								<IoCreateOutline className="text-red-500" />
								<span>ساخت حساب‌کاربری</span>
							</h2>
						</section>
						{/* form */}
						<form
							className="flex flex-col gap-y-2 md:gap-y-4"
							onSubmit={handleSubmit(signupHandler)}
						>
							{/* first name */}
							<label
								className="flex items-center justify-center flex-col gap-y-1"
								htmlFor="firstName"
							>
								{/* input */}
								<input
									{...register('firstName')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.firstName ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="نام"
									type="text"
									id="firstName"
								/>
								{errors.firstName ? (
									<span className="text-red-500 cursor-pointer">{errors.firstName.message}</span>
								) : null}
							</label>
							{/* last name */}
							<label
								className="flex items-center justify-center flex-col gap-y-1"
								htmlFor="lastName"
							>
								{/* input */}
								<input
									{...register('lastName')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.lastName ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="نام‌خانوادگی"
									type="text"
									id="lastName"
								/>
								{errors.lastName ? (
									<span className="text-red-500 cursor-pointer">{errors.lastName.message}</span>
								) : null}
							</label>
							{/* phone */}
							<label className="flex items-center justify-center flex-col gap-y-1" htmlFor="phone">
								{/* input */}
								<input
									{...register('phoneNumber')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.phoneNumber ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="شماره‌تماس"
									type="tel"
									inputMode="tel"
									id="phone"
								/>
								{errors.phoneNumber ? (
									<span className="text-red-500 cursor-pointer">{errors.phoneNumber.message}</span>
								) : null}
							</label>
							{/* email */}
							<label className="flex items-center justify-center flex-col gap-y-1" htmlFor="email">
								{/* input */}
								<input
									{...register('email')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.email ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="ایمیل"
									type="email"
									inputMode="email"
									id="email"
								/>
								{errors.email ? (
									<span className="text-red-500 cursor-pointer">{errors.email.message}</span>
								) : null}
							</label>
							{/* username */}
							<label
								className="flex items-center justify-center flex-col gap-y-1"
								htmlFor="username"
							>
								{/* input */}
								<input
									{...register('username')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.username ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="نام‌کاربری"
									type="text"
									inputMode="email"
									id="username"
								/>
								{errors.username ? (
									<span className="text-red-500 cursor-pointer">{errors.username.message}</span>
								) : null}
							</label>
							{/* password */}
							<label
								className="flex items-center justify-center flex-col gap-y-1"
								htmlFor="password"
							>
								{/* input */}
								<input
									{...register('password')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.password ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="رمزعبور"
									type="password"
									id="password"
								/>
								{errors.password ? (
									<span className="text-red-500 cursor-pointer">{errors.password.message}</span>
								) : null}
							</label>
							{/* confirm password */}
							<label
								className="flex items-center justify-center flex-col gap-y-1"
								htmlFor="confirmPassword"
							>
								{/* input */}
								<input
									{...register('confirmPassword')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right focus:shadow-md transition-all ${
										errors.confirmPassword ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="تکرار رمزعبور"
									type="password"
									id="confirmPassword"
								/>
								{errors.confirmPassword ? (
									<span className="text-red-500 cursor-pointer">
										{errors.confirmPassword.message}
									</span>
								) : null}
							</label>
							{/* google recaptcha */}
							<section>
								<ReCAPTCHA
									onChange={() => setIsRecaptcha(!isRecaptcha)}
									sitekey="6LcFwgAoAAAAAEmWVSlMLHjYKEMqcOPu1UnCsUTb"
									size="normal"
								/>
							</section>
							{/* submit button */}
							<button
								disabled={!(isRecaptcha && isFormReady)}
								className="font-Lalezar mx-auto mt-2 bg-DarkYellow flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								ورود
							</button>
						</form>
						<p className="flex w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:text-xs">حساب‌کاربری دارید</span>
							<Link
								className="text-blue-600 tracking-tight font-bold hover:text-blue-700"
								to="/login"
							>
								ورود به حساب‌کاربری
							</Link>
						</p>
						{/* rules */}
						<ul className="text-Dark/75 list-disc text-xs self-start px-8 py-4">
							<li>
								ورود شما به معنای پذیرش شرایط و قوانین{' '}
								<Link className="text-orange-500" to="/">
									تکنوشف
								</Link>{' '}
								است.
							</li>
							<li>رمز عبور عبارتی حداقل ۸ کاراکتریست شامل حروف بزرگ و کوچک و اعداد لاتین.</li>
						</ul>
					</main>
				</div>
				<Footer />
			</div>
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
export default Signup;
