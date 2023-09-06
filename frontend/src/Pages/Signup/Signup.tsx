// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// icons
import { BiLogIn, BiUser } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

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
				<main className="bg-Info/50 flex h-auto w-full flex-col items-center gap-y-2 px-8 py-8 backdrop-blur-[2px] sm:w-3/4 sm:rounded-3xl md:gap-y-4 md:w-3/5 lg:w-1/3 ">
					{/* logo */}
					<Link
					className="font-Lalezar mt-2 text-3xl font-bold tracking-tight text-orange-500 transition-all hover:text-orange-600 md:text-3xl"
					to="/">TechnoShef</Link>
					{/* title */}
					<section className="flex w-full items-center justify-between">
					<h2 className="font-Lalezar flex select-none items-center gap-x-[2px] text-2xl md:gap-x-1 md:text-3xl">
							<BiLogIn className="text-red-500" />
							<span>ساخت حساب‌کاربری</span>
						</h2>
					</section>
					{/* form */}
					<form className="flex flex-col gap-y-2 md:gap-y-4">
						{/* first name */}
						<label className="flex items-center justify-center" htmlFor="firstName">
							{/* label */}
							<span>نام</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="text"
								placeholder="نام"
								id="firstName"
								dir="ltr" />
						</label>
						{/* last name */}
						<label htmlFor="lastName">
							{/* label */}
							<span>نام‌خانوادگی</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="text"
								placeholder="نام خانوادگی"
								id="lastName"
								dir="ltr" />						</label>
						{/* phone */}
						<label htmlFor="phone">
							{/* label */}
							<span>شماره تماس</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="tel"
								placeholder="شماره تماس"
								id="phone"
								dir="ltr" />
						</label>
						{/* email */}
						<label htmlFor="email">
							{/* label */}
							<span>ایمیل</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="email"
								placeholder="ایمیل"
								id="email"
								dir="ltr" 
								inputMode="email"/>
						</label>
						{/* password */}
						<label htmlFor="password">
							{/* label */}
							<span>رمزعبور</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="password"
								placeholder="رمز عبور"
								id="password"
								dir="ltr" />						</label>
						{/* repeat password */}
						<label htmlFor="repeatPassword">
							{/* label */}
							<span>تکرار رمزعبور</span>
							{/* input */}
							<input className="border-2 border-gray-300 text-base focus:outline-none focus:border-DarkYellow rounded-lg py-2 px-4 w-10/12 text-right" 
								type="password"
								placeholder="تکرار رمز عبور"
								id="repeatPassword"
								dir="ltr" />						</label>
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
					{/* login */}
					<p className="flex mt-3 w-full items-center justify-center gap-x-[2px] text-xs md:gap-x-1 md:text-sm">
							<span className="md:inline-block md:text-sm">حساب‌کاربری دارید؟</span>
							<Link className="text-blue-600 hover:text-blue-700" to="/login">
								وارد شوید.
							</Link>
						</p>
					{/* rules */}
					<ul className="text-Dark/75 list-disc text-xs self-start px-8 py-4">
						<li>
						ثبت‌نام شما به معنای پذیرش شرایط و قوانین{' '}
							<Link className="text-orange-500" to="/">
								تکنوشف
							</Link>{' '}
							است.
						</li>
						<li>رمز عبور باید عبارتی حداقل ۸ کاراکتری شامل حروف بزرگ و کوچک و اعداد لاتین باشد.</li>
					</ul>
				</main>
			</div>
			<Footer />
			</div>
	);
};

// exports
export default Signup;
