// react
import { useEffect } from 'react';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';
import ProductCategories from '../../Components/ProductsCategories/ProductCategories';
import ProductSort from '../../Components/ProductSort/ProductSort';

// react query
import useFiltered from '../../Hooks/useFiltered';

// types
import { ProductProps } from '../../Types/Products.types';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../Services/Redux/Slices/Search';

// Products page
const Products = () => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - محصولات';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	// search
	const searchValue = useSelector((state: any) => state.search);

	// category
	const categoryValue = useSelector((state: any) => state.category);

	// price sort
	const priceSort = useSelector((state: any) => state.priceSort);

	// GET products from react query
	const { data, refetch, isFetching } = useFiltered(categoryValue, searchValue, priceSort);

	useEffect(() => {
		// refetch data for search in products page
		refetch();

		// set search value to empty string for next usage
		dispatch(setSearchValue(''));
	}, [searchValue, categoryValue, priceSort]);

	// tsx
	return (
		<>
			<Header />
			<div className="container">
				<main className="flex flex-col justify-center pb-3 xl:flex-row xl:gap-x-10 xl:py-5 2xl:gap-x-20">
					{/* right side */}
					<aside className="flex h-max gap-y-10 md:flex-row md:gap-y-8 xl:sticky xl:top-10 xl:flex-col">
						<ProductCategories />
					</aside>
					{/* divider */}
					<div className="hidden xl:flex">
						<span className="bg-Dark/50 sticky top-10 h-full w-[2px]"></span>
					</div>
					{/* left side */}
					<section className="flex h-max flex-col gap-y-5 w-full">
						<ProductSort />
						{/* all products */}
						<main className="flex flex-wrap items-start justify-center xl:justify-startG gap-x-7 gap-y-10 xl:w-[780px] 2xl:w-full">
							{isFetching ? (
								<span className="flex items-center justify-center gap-x-5 text-center w-full font-bold xl:text-lg bg-sky-500 md:py-4 text-Light py-2 rounded-md">
									در حال دریافت لیست محصولات از سرور صبر کنید !
								</span>
							) : priceSort === '' && data?.length ? (
								data
									.reverse()
									.map((product: ProductProps) => <ProductBox {...product} key={product._id} />)
							) : data?.length ? (
								data.map((product: ProductProps) => <ProductBox {...product} key={product._id} />)
							) : (
								<span className="text-center w-full font-bold xl:text-lg bg-rose-500 py-2 md:py-4 text-Light rounded-md flex gap-x-5 items-center justify-center mb-40">
									این آرشیو یا فیلتر ها هیچ محصولی ندارند !
								</span>
							)}
						</main>
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Products;
