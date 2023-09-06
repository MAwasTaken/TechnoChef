// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
		<main>
			{/* logo */}
			<Link to="/">TechnoShef</Link>
			{/* title */}
			<section>
				<span>ساخت حساب‌کاربری</span>
				<p>
					<span>حساب‌کاربری دارید؟</span>
					<Link to="/login">وارد شوید</Link>
				</p>
			</section>
			{/* form */}
			<form>
				{/* first name */}
				<label htmlFor="firstName">
					{/* label */}
					<span>نام</span>
					{/* input */}
					<input type="text" id="firstName" />
				</label>
				{/* last name */}
				<label htmlFor="lastName">
					{/* label */}
					<span>نام‌خانوادگی</span>
					{/* input */}
					<input type="text" id="lastName" />
				</label>
				{/* phone */}
				<label htmlFor="phone">
					{/* label */}
					<span>شماره تماس</span>
					{/* input */}
					<input type="tel" inputMode="tel" id="phone" />
				</label>
				{/* email */}
				<label htmlFor="email">
					{/* label */}
					<span>ایمیل</span>
					{/* input */}
					<input type="email" inputMode="email" id="email" />
				</label>
				{/* password */}
				<label htmlFor="password">
					{/* label */}
					<span>رمزعبور</span>
					{/* input */}
					<input type="password" id="password" />
				</label>
				{/* repeat password */}
				<label htmlFor="repeatPassword">
					{/* label */}
					<span>تکرار رمزعبور</span>
					{/* input */}
					<input type="password" id="repeatPassword" />
				</label>
				{/* google recaptcha */}
				<section>
					<ReCAPTCHA sitekey="6LcFwgAoAAAAAEmWVSlMLHjYKEMqcOPu1UnCsUTb" size="normal" />
				</section>
				{/* submit button */}
				<button type="submit">ثبت‌نام</button>
			</form>
			{/* rules */}
			<section>
				<p>
					ورود شما به معنای پذیرش شرایط و قوانین <Link to="/">تکنوشف</Link> است.
				</p>
				<p>رمز عبور باید عبارتی حداقل ۸ کاراکتری شامل حروف بزرگ و کوچک و اعداد لاتین باشد.</p>
			</section>
		</main>
	);
};

// exports
export default Signup;
