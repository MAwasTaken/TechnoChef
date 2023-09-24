import { object, ref, string } from 'yup';

// user auth login authorization
const signUpAuthSchema = object().shape({
	firstName: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(3, 'طول نام‌کاربری یا ایمیل حداقل ۳ کاراکتر می‌باشد!'),
	lastName: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(3, 'طول رمزعبور حداقل ۳ کاراکتر می‌باشد!'),
	phoneNumber: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.length(11, 'طول شماره‌تماس باید ۱۱ عدد باشد!'),
	email: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.email('ساختار وارد شده صحیح نمی‌باشد!'),
	username: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(3, 'طول نام‌کاربری حداقل ۳ کاراکتر می‌باشد!'),
	password: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(8, 'طول رمزعبور حداقل ۸ کاراکتر می‌باشد!'),
	confirmPassword: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.oneOf([ref('password')], 'مقدار وارد شده صحیح نمی‌باشد!')
});

export { signUpAuthSchema };
