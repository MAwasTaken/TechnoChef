// react
import React, { useEffect } from 'react';
import { getVerify } from '../../Services/Axios/Requests/payment';

// check payment
const CheckPayment: React.FC = () => {
	useEffect(() => {
		const query = new URLSearchParams(location.search);
		const authority = query.get('Authority');
		const status = query.get('Status');

		status === 'OK' && authority ? getVerify(authority) : null;
	}, []);

	return <div>CheckPayment</div>;
};

export default CheckPayment;
