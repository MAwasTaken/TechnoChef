import { object, string } from 'yup';

// user auth login authorization
const loginAuthSchema = object().shape({
	userInfo: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(3, 'طول نام‌کاربری یا ایمیل حداقل ۳ کاراکتر می‌باشد!'),
	password: string()
		.required('لطفا این قسمت را خالی رها نکنید!')
		.min(8, 'طول رمزعبور حداقل ۸ کاراکتر می‌باشد!')
});

export { loginAuthSchema };
