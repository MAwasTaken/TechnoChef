export type NewProductInputs = {
	productName?: string;
	shortName?: string;
	description?: string;
	category?: string;
	cover?: any;
	best_seller?: boolean;
	details?: {
		title: string;
		value: string;
	}[];
	pricing?: {
		shortCode: string;
		price: number;
		finalPrice: number;
		QTY: number;
		productColor: string;
	}[];
	images?: any;
};
