export type ProductProps = {
	shortName?: string;
	productName?: string;
	category?: string;
	images?: any;
	cover?: any;
	description?: string;
	best_seller?: boolean;
	_id?: string;
	createdAt?: string;
	updatedAt?: string;
	details?: { title: string; value: string }[];
	pricePerColor?: {
		QTY?: number;
		finalPrice?: number;
		price?: number;
		productColor?: string;
		shortCode?: string;
		_id?: string;
	}[];
};
