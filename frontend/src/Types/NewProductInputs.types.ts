export type NewProductInputs = {
	productName?: string;
	shortName?: string;
	price?: number;
	finalPrice?: number;
	QTY?: number;
	description?: string;
	category?: string;
	productColor?: string[];
	cover?: any;
	best_seller?: boolean;
	details?: {
		title: string;
		value: string;
	}[];
	images?: any;
};
