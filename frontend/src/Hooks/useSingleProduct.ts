// react query
import { useQuery, useQueryClient } from 'react-query';

// axios
import { getSingleProduct } from '../Services/Axios/Requests/products';
import { ProductProps } from '../Types/Products.types';

// use best sellers
const useSingleProduct = (shortName: string) => {
	const queryClient = useQueryClient();

	return useQuery(
		['Products/single', shortName],
		() => getSingleProduct(shortName).then((res) => res.data),
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			initialData: () => {
				const filteredProducts: ProductProps[] | undefined = queryClient.getQueryData([
					'Products/Filtered'
				]);

				const product: ProductProps | undefined = filteredProducts?.find(
					(product: any) => product.shortName === shortName
				);

				return product;
			}
		}
	);
};

// exports
export default useSingleProduct;
