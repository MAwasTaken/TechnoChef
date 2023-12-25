// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// icons
import { TbStatusChange } from 'react-icons/tb';

// react hook form
import { useForm } from 'react-hook-form';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// react spinner
import { BeatLoader } from 'react-spinners';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { postResetPassword } from '../../Services/Axios/Requests/auth';

// change password
const ChangePassword: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = `تکنو | Technoshef - تغییر رمزعبور`;

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// navigator
	const navigate = useNavigate();

	// jwt token
	const { jwtToken } = useParams();

	// initialize hook form
	const { register, reset, handleSubmit } = useForm<any>({
		mode: 'all'
	});

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// google recaptch handler
	const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);

	const changePasswordHandler = (formData: any) => {
		setIsFormFetching(true);

		if (formData.password === formData.confirmPassword) {
			jwtToken
				? postResetPassword(jwtToken, formData.password)
						.then(() =>
							toast.success('رمزعبور با موفقیت تغییر یافت ✅', {
								onClose: () => navigate('/login')
							})
						)
						.catch(() => toast.error('خطایی در فرایند تغییر رمزعبور رخ داد ❌'))
						.finally(() => setIsFormFetching(false))
				: null;
		} else {
			toast.error('مقادیر وارد شده یکسان نمی‌باشند ❌', {
				onClose: () => reset(),
				onOpen: () => setIsFormFetching(false)
			});
		}
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
								<TbStatusChange className="text-red-500" />
								<span>تغییر رمزعبور</span>
							</h2>
						</section>
						{/* form */}
						<form
							onSubmit={handleSubmit(changePasswordHandler)}
							className="flex flex-col gap-y-2 md:gap-y-4"
						>
							{/* password */}
							<label
								className="flex flex-col gap-y-1 items-center justify-center"
								htmlFor="password"
							>
								{/* input */}
								<input
									minLength={8}
									required
									{...register('password')}
									className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right"
									type="password"
									inputMode="text"
									placeholder="رمزعبور جدید"
									id="password"
									autoComplete="password"
								/>
							</label>
							{/* confirm password */}
							<label
								className="flex flex-col gap-y-1 items-center justify-center"
								htmlFor="confirmPassword"
							>
								{/* input */}
								<input
									minLength={8}
									required
									{...register('confirmPassword')}
									className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right"
									type="password"
									inputMode="text"
									placeholder="تکرار رمزعبور جدید"
									id="confirmPassword"
									autoComplete="confirmPassword"
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
						{/* rules */}
						<ul className="text-Dark/75 list-disc text-xs self-start px-8 py-4">
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

export default ChangePassword;
