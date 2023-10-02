// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { BiLogIn } from 'react-icons/bi';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// react hook form
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginAuthSchema } from '../../Services/Yup/loginAuth';

// types
import { loginInputs } from '../../Types/loginInputs.types';

// react toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// axios
import { postLogin } from '../../Services/Axios/Requests/auth';

// react query
import useGetMe from '../../Hooks/useGetMe';

// redux
import { useDispatch } from 'react-redux';
import { setUser } from '../../Services/Redux/Slices/User';

// react spinner
import { BeatLoader } from 'react-spinners';

// login page
const Login: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// redux dispatch hook
	const dispatch = useDispatch();

	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - ورود';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// initialize hook form
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<loginInputs>({
		mode: 'all',
		resolver: yupResolver(loginAuthSchema)
	});

	// google recaptch handler
	const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);

	// form xss prevent handler
	const [isFormReady, setIsFormReady] = useState<boolean>(true);

	// GET user data when already login
	const { data, refetch } = useGetMe();

	// spinner handler
	const [isFormFetching, setIsFormFetching] = useState<boolean>(false);

	// login handler
	const loginHandler: SubmitHandler<loginInputs> = (formData) => {
		// set form unavailable
		setIsFormReady(false);

		// set is fetching to true
		setIsFormFetching(true);

		// POST login
		postLogin(formData)
			// on success
			.then((res) =>
				toast.success(`${res.data.firstName} ${res.data.lastName} با موفقیت وارد شدید 👋`, {
					onOpen: () => {
						refetch();

						// set user data to redux global state
						dispatch(setUser(data));
					},
					onClose: () => {
						// navigate to user panel
						res.data.isAdmin === true ? navigate('/admin') : navigate('/panel');

						// set form available
						setIsFormReady(true);
					}
				})
			)
			// on error
			.catch(() =>
				toast.error('اطلاعات وارد شده صحیح نمی‌باشند ❌', {
					onClose: () =>
						// set form available
						setIsFormReady(true)
				})
			)
			// set is fetching to false
			.finally(() => setIsFormFetching(false));
	};

	// tsx
	return (
		<>
			<div className="flex h-screen flex-col justify-between">
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
								<BiLogIn className="text-red-500" />
								<span>ورود به حساب‌کاربری</span>
							</h2>
						</section>
						{/* form */}
						<form
							onSubmit={handleSubmit(loginHandler)}
							className="flex flex-col gap-y-2 md:gap-y-4"
						>
							{/* username */}
							<label
								className="flex flex-col gap-y-1 items-center justify-center"
								htmlFor="username"
							>
								{/* input */}
								<input
									{...register('userInfo')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right ${
										errors.userInfo ? 'focus:border-red-500 border-red-500' : ''
									}`}
									type="text"
									inputMode="email"
									placeholder="نام کاربری یا ایمیل"
									id="username"
									autoComplete="username"
								/>
								{errors.userInfo ? (
									<span className="text-red-500 cursor-pointer">{errors.userInfo.message}</span>
								) : null}
							</label>
							{/* password */}
							<label
								className="flex gap-y-1 flex-col items-center justify-center"
								htmlFor="password"
							>
								{/* input */}
								<input
									{...register('password')}
									className={`border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-full text-right ${
										errors.password ? 'focus:border-red-500 border-red-500' : ''
									}`}
									placeholder="رمز عبور"
									type="password"
									id="password"
									dir="ltr"
									autoComplete="current-password"
								/>
								{errors.password ? (
									<span className="text-red-500 cursor-pointer">{errors.password.message}</span>
								) : null}
							</label>
							{/* forgot password */}
							<p className="flex w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
								<span className="md:text-xs">رمزعبور خود را فراموش کرده‌اید؟</span>
								<Link
									className="text-blue-600 tracking-tight font-bold hover:text-blue-700"
									to="/signup"
								>
									بازیابی رمزعبور
								</Link>
							</p>
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
								// disabled={!(isRecaptcha && isFormReady)}
								className="font-Lalezar mx-auto mt-2 md:h-11 h-9 from-LightYellow to-DarkYellow flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg disabled:bg-gray-400"
								type="submit"
							>
								{isFormFetching ? <BeatLoader size={10} color="#FCFCFC" /> : 'ورود'}
							</button>
						</form>
						{/* signup */}
						<p className="flex w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:text-xs">حساب‌کاربری ندارید؟</span>
							<Link
								className="text-blue-600 tracking-tight font-bold hover:text-blue-700"
								to="/signup"
							>
								ساخت حساب‌کاربری
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
export default Login;
