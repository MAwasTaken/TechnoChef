// react
import React from 'react';
import { Link } from 'react-router-dom';

// google recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// login page
const Login: React.FC = () => {
	// tsx
	return (
		<main>
			{/* logo */}
			<span>TechnoShef</span>
			{/* title */}
			<section>
				<span>ورود به حساب‌کاربری</span>
				<p>
					<span>حساب‌کاربری ندارید؟</span>
					<Link to="/register">ساخت حساب‌کاربری</Link>
				</p>
			</section>
			{/* form */}
			<form>
				{/* username */}
				<label htmlFor="username">
					{/* label */}
					<span>نام‌کاربری</span>
					{/* input */}
					<input type="text" id="username" />
				</label>
				{/* password */}
				<label htmlFor="password">
					{/* label */}
					<span>رمزعبور</span>
					{/* input */}
					<input type="password" id="password" />
				</label>
				{/* forgot password */}
				<span>
					رمزعبور خود را فراموش کرده‌اید؟
					<Link to="">بازیابی رمزعبور</Link>
				</span>
				{/* google recaptcha */}
				<section>
					<ReCAPTCHA sitekey="6LcFwgAoAAAAAEmWVSlMLHjYKEMqcOPu1UnCsUTb" size="normal" />
				</section>
				{/* submit button */}
				<button type="submit">ورود</button>
			</form>
			{/* rules */}
			<section>
				<p>
					ورود شما به معنای پذیرش شرایط و قوانین <Link to="/">تکنوشف</Link> است.
				</p>
				<p>رمز عبور عبارتی حداقل ۸ کاراکتریست شامل حروف بزرگ و کوچک و اعداد لاتین.</p>
			</section>
		</main>
	);
};

// exports
export default Login;
