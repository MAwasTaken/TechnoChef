// react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// icons
import { RiLockPasswordLine } from 'react-icons/ri';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { postResetPasswordEmail } from '../../Services/Axios/Requests/auth';
import ReCAPTCHA from 'react-google-recaptcha';

const ResetPassword: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// initialize hook form
	const { register, handleSubmit } = useForm<any>({
		mode: 'all'
	});

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// google recaptch handler
	const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);

	// send email handler
	const sendEmailHandler: SubmitHandler<any> = (userEmail: string) => {
		setIsFormFetching(true);

		postResetPasswordEmail(userEmail)
			.then(() =>
				toast.success('لینک بازیابی رمزعبور به ایمیل شما ارسال شد ✅', {
					onClose: () => navigate('/login')
				})
			)
			.catch(() =>
				toast.error('ایمیل وارد شده صحیح نمی‌باشد ❌', {
					onClose: () => navigate('/signup')
				})
			)
			.finally(() => setIsFormFetching(false));
	};

	// tsx
	return (
		<>
			<div className="flex flex-col justify-between">
				<Header />
				<div className="flex items-center justify-center">
					<main className="md:bg-Info/50 bg-transparent flex h-auto w-full flex-col items-center gap-y-2 px-8 py-8 backdrop-blur-[2px] sm:w-4/4 md:rounded-3xl md:gap-y-4 md:w-[590px]">
						{/* logo */}
						<Link
							className="font-Lalezar mt-2 text-3xl font-bold tracking-tight text-orange-500 transition-all hover:text-orange-600 md:text-3xl"
							to="/"
						>
							TechnoShef
						</Link>
						{/* title */}
						<section className="flex w-full items-center justify-between">
							<h2 className="font-Lalezar flex select-none items-center gap-x-[2px] text-2xl md:gap-x-1 md:text-3xl">
								<RiLockPasswordLine className="text-red-500" />
								<span>فراموشی رمزعبور</span>
							</h2>
						</section>
						{/* form */}
						<form
							onSubmit={handleSubmit(sendEmailHandler)}
							className="flex flex-col gap-y-2 md:gap-y-4"
						>
							{/* username */}
							<label
								className="flex flex-col gap-y-1 items-center justify-center"
								htmlFor="username"
							>
								{/* input */}
								<input
									required
									{...register('userEmail')}
									className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right"
									type="text"
									inputMode="email"
									placeholder="ایمیل"
									id="username"
									autoComplete="username"
								/>
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
								disabled={!(isRecaptcha && !isFormFetching)}
								className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'تایید'}
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

export default ResetPassword;
