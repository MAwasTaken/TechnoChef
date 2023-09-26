// change en numbers to fa
const toFarsiNumber = (payload: string) => {
	const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

	return payload.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
};

// exports
export default toFarsiNumber;
