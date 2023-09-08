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
				<main className="bg-Info/50 flex h-auto w-full flex-col items-center gap-y-2 px-4 py-2 backdrop-blur-[2px] sm:w-3/4 sm:rounded-3xl md:gap-y-4 lg:w-1/2">
					{/* logo */}
					<Link
						className="font-Lalezar mt-2 text-sm font-bold tracking-tight text-orange-500 transition-all hover:text-orange-600 md:text-3xl"
						to="/"
					>
						TechnoShef
					</Link>
					{/* title */}
					<section className="flex w-full items-center justify-between">
						<h2 className="font-Lalezar flex select-none items-center gap-x-[2px] text-sm md:gap-x-1 md:text-3xl">
							<BiLogIn className="text-red-500" />
							<span>ورود به حساب‌کاربری</span>
						</h2>
						<p className="flex items-center gap-x-[2px] text-[10px] tracking-tighter md:gap-x-1 md:text-sm">
							<span className="hidden md:inline-block">حساب‌کاربری ندارید؟</span>
							<Link className="font-bold text-blue-600 hover:text-blue-700" to="/signup">
								ساخت حساب‌کاربری
							</Link>
						</p>
					</section>
					{/* form */}
					<form className="flex flex-col gap-y-2 md:gap-y-4">
						{/* username */}
						<label className="flex items-center justify-center" htmlFor="username">
							{/* label */}
							<div className="xl:right-26 absolute right-[50px] flex items-center gap-x-[2px] text-[10px] tracking-tighter md:gap-x-1 md:text-lg lg:right-4 xl:right-16">
								<BiUser className="text-red-500" />
								<span>نام‌کاربری:</span>
							</div>
							{/* input */}
							<input
								className="focus:border-DarkYellow h-6 w-6/12 rounded-md bg-white/80 p-2 text-[10px] outline-none transition-all focus:border focus:shadow-md sm:w-8/12 md:h-10 md:w-10/12 md:text-lg focus:md:border-2 lg:w-11/12"
								placeholder="مثلا: technoshef"
								type="text"
								id="username"
							/>
						</label>
						{/* password */}
						<label className="flex items-center justify-center" htmlFor="password">
							{/* label */}
							<div className="xl:right-26 absolute right-[50px] flex items-center gap-x-[2px] text-[10px] tracking-tighter md:gap-x-1 md:text-lg lg:right-4 xl:right-16">
								<FiLock className="text-red-500" />
								<span>رمزعبور:</span>
							</div>
							{/* input */}
							<input
								className="focus:border-DarkYellow h-6 w-6/12 rounded-md bg-white/80 p-2 text-[10px] outline-none transition-all focus:border focus:shadow-md sm:w-8/12 md:h-10 md:w-10/12 md:text-lg focus:md:border-2 lg:w-11/12"
								placeholder="مثلا: @techn0$hef"
								type="password"
								id="password"
							/>
						</label>
						{/* forgot password */}
						<p className="flex w-full items-center justify-center gap-x-[2px] text-[10px] tracking-tight md:gap-x-1 md:text-sm">
							<span className="md:text-xs">رمزعبور خود را فراموش کرده‌اید؟</span>
							<Link className="font-bold text-blue-600 hover:text-blue-700" to="/signup">
								بازیابی رمزعبور
							</Link>
						</p>
						{/* google recaptcha */}
						<section>
							<ReCAPTCHA sitekey="6LcFwgAoAAAAAEmWVSlMLHjYKEMqcOPu1UnCsUTb" size="normal" />
						</section>
						{/* submit button */}
						<button
							className="font-Lalezar from-LightYellow to-DarkYellow mx-auto mt-2 flex w-24 items-center justify-center rounded-lg bg-gradient-to-r p-1.5 text-sm shadow-md transition-all hover:bg-gradient-to-t md:mt-4 md:w-[150px] md:p-2 md:text-lg"
							type="submit"
						>
							ورود
						</button>
					</form>
					{/* rules */}
					<ul className="text-Dark/75 list-disc self-start px-8 py-4">
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
