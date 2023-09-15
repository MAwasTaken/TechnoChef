// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoCreateOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// signup page
const Signup: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - ثبت‌نام';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// tsx
	return (
		<div className="flex h-screen flex-col justify-between">
			<Header />
			<div className="flex items-center justify-center">
				<main className="bg-Info/50 flex h-auto w-full flex-col items-center gap-y-2 px-8 py-8 backdrop-blur-[2px] sm:w-4/4 md:rounded-3xl md:gap-y-4 md:w-[690px]">
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
							<IoCreateOutline className="text-red-500" />
							<span>ساخت حساب‌کاربری</span>
						</h2>
						{/* <p className="flex items-center gap-x-[2px] text-[10px] tracking-tighter md:gap-x-1 md:text-sm">
							<span className="hidden md:inline-block">حساب‌کاربری دارید؟</span>
							<Link className="font-bold text-blue-600 hover:text-blue-700" to="/login">
								ورود به حساب‌کاربری
							</Link>
						</p> */}
					</section>
					{/* form */}
					<form className="flex flex-col gap-y-2 md:gap-y-4">
						{/* first name */}
						<label className="flex items-center justify-center" htmlFor="firstName">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<BiUser className="text-red-500" />
								<span>نام:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: محسن"
								type="text"
								id="firstName"
							/>
						</label>
						{/* last name */}
						<label className="flex items-center justify-center" htmlFor="lastName">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<AiOutlineIdcard className="text-red-500" />
								<span>نام‌خانوادگی:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: رضایی"
								type="text"
								id="lastName"
							/>
						</label>
						{/* phone */}
						<label className="flex items-center justify-center" htmlFor="phone">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<BsTelephone className="text-red-500" />
								<span>شماره‌تماس:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: ۰۹۱۲۲۲۷۴۸۷۶"
								type="tel"
								inputMode="tel"
								id="phone"
							/>
						</label>
						{/* email */}
						<label className="flex items-center justify-center" htmlFor="email">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<BsTelephone className="text-red-500" />
								<span>ایمیل:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: hi@technoshef.com"
								type="email"
								inputMode="email"
								id="email"
							/>
						</label>
						{/* password */}
						<label className="flex items-center justify-center" htmlFor="password">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<FiLock className="text-red-500" />
								<span>رمزعبور:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: @techn0$hef"
								type="password"
								id="password"
							/>
						</label>
						{/* confirm password */}
						<label className="flex items-center justify-center" htmlFor="confirmPassword">
							{/* label */}
							<div className="md:right-[56px] absolute right-[20px] flex items-center gap-x-[2px] text-[16px] tracking-tighter md:gap-x-1 md:text-lg">
								<FiLock className="text-red-500" />
								<span>تکرار رمزعبور:</span>
							</div>
							{/* input */}
							<input
								className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right focus:shadow-md transition-all"
								placeholder="مثلا: @techn0$hef"
								type="password"
								id="confirmPassword"
							/>
						</label>
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
					<p className="flex mt-3 w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:inline-block md:text-sm">حساب‌کاربری دارید؟</span>
							<Link className="text-blue-600 hover:text-blue-700" to="/login">
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
	);
};

// exports
export default Signup;
