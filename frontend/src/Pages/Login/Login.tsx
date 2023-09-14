// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// icons
import { BiLogIn, BiUser } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// login page
const Login: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - ورود';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// tsx
	return (
		<div className="flex h-screen flex-col justify-between">
			<Header />
			<div className="flex items-center justify-center">
				<main className="bg-Info/50 flex h-auto w-full flex-col items-center gap-y-2 px-8 py-8 backdrop-blur-[2px] sm:w-4/4 md:rounded-3xl md:gap-y-4 md:w-[590px]">
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
					<form className="flex flex-col gap-y-2 md:gap-y-4">
						{/* username */}
						<label className="flex items-center justify-center" htmlFor="username">
							{/* label */}
							{/* <div className="xl:right-26 absolute right-16 flex items-center gap-x-[2px] text-[10px] md:gap-x-1 md:text-lg lg:right-10">
								<BiUser className="text-red-500" />
								<span>نام‌کاربری</span>
							</div> */}
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="text"
								placeholder="نام کاربری"
								id="username"
								dir="ltr" />
						</label>
						{/* password */}
						<label className="flex items-center justify-center" htmlFor="password">
							{/* label */}
							{/* <div className="xl:right-26 absolute right-16 flex items-center gap-x-[2px] text-[10px] md:gap-x-1 md:text-lg lg:right-10">
								<FiLock className="text-red-500" />
								<span>رمزعبور</span>
							</div> */}
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right"
								placeholder="رمز عبور"
								type="password"
								id="password"
								dir="ltr"/>

						</label>
						{/* forgot password */}
						<p className="flex w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:text-xs">رمزعبور خود را فراموش کرده‌اید؟</span>
							<Link className="text-blue-600 hover:text-blue-700" to="/signup">
								بازیابی رمزعبور
							</Link>
						</p>
						{/* google recaptcha */}
						<section>
							<ReCAPTCHA sitekey="6LcFwgAoAAAAAEmWVSlMLHjYKEMqcOPu1UnCsUTb" size="normal" />
						</section>
						{/* submit button */}
						<button
							className="font-Lalezar from-LightYellow to-DarkYellow mx-auto mt-2 flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-base shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg"
							type="submit"
						>
							ورود
						</button>
					</form>
					{/* signup */}
					<p className="flex mt-3 w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:inline-block md:text-sm">حساب‌کاربری ندارید؟</span>
							<Link className="text-blue-600 hover:text-blue-700" to="/signup">
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
	);
};

// exports
export default Login;