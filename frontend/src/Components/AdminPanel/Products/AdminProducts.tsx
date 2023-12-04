// react
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { BsBoxSeam, BsPlusLg, BsBoxes } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';

// react query
import useAllProducts from '../../../Hooks/useAllProducts';
import useBestSellers from '../../../Hooks/useBestSellers';
import useLatest from '../../../Hooks/useLatest';

// types
import { ProductProps } from '../../../Types/Products.types';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../Services/Redux/Slices/AdminShownProducts';

// admin products
const AdminProducts = () => {
	// navigator
	const navigate = useNavigate();

	// redux dispatch hook
	const dispatch = useDispatch();

	// GET all product from react query
	const { data: all, refetch: allRefetch } = useAllProducts();

	// GET best sellers product from react query
	const { data: bestSellers, refetch: bestSellersRefetch } = useBestSellers();

	// GET latest product from react query
	const { data: latest, refetch: latestRefetch } = useLatest();

	// shown product filter
	const filter = useSelector((state: any) => state.adminShownProducts);

	// mounting side effects
	useEffect(() => {
		// refetch product when mounting
		allRefetch();
		bestSellersRefetch();
		latestRefetch();
	}, []);

	// tsx
	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<BsBoxSeam className="text-red-500" />
					محصولات
				</span>
				<div className="flex gap-x-2">
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${
							filter === 'all' ? 'bg-Info/50' : ''
						}`}
						onClick={() => dispatch(setFilter('all'))}
					>
						<span className="hidden md:block">همه محصولات</span>
						<BsBoxes className="text-red-500 w-5 h-5" />
					</button>
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${
							filter === 'bestSellers' ? 'bg-Info/50' : ''
						}`}
						onClick={() => dispatch(setFilter('bestSellers'))}
					>
						<span className="hidden md:block">محصولات پرفروش</span>
						<AiOutlineStar className="text-red-500 w-5 h-5" />
					</button>
					<button
						className={`md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center ${
							filter === 'latest' ? 'bg-Info/50' : ''
						}`}
						onClick={() => dispatch(setFilter('latest'))}
					>
						<span className="hidden md:block">جدیدترین محصولات</span>
						<MdOutlineWatchLater className="text-red-500 w-5 h-5" />
					</button>
				</div>
				<Link
					to="create"
					className="md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
				>
					<span className="hidden md:block">افزودن محصول جدید</span>
					<BsPlusLg className="text-red-500 w-5 h-5" />
				</Link>
			</h3>
			{/* table */}
			<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
				<thead className="border-b-2 h-10 border-Info">
					<tr className="">
						<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">تصویر</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">عنوان</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">دسته‌بندی</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10 border-l border-l-Info">قیمت</td>
					</tr>
				</thead>
				<tbody>
					{filter === 'bestSellers'
						? bestSellers?.reverse().map((product: ProductProps, index: number) => (
								<tr
									key={product._id}
									className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
									onClick={() => navigate(String(product.shortName))}
								>
									<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
									<td>
										<img
                    loading="lazy"
											className="w-32 h-32 object-contain mx-auto"
											src={`https://45.159.150.221:3000/${product?.cover}`}
											alt="تصویر محصول"
										/>
									</td>
									<td className="tracking-tighter sm:text-base">{product.productName}</td>
									<td>{product.category}</td>
									<td className="tracking-tighter sm:text-base">
										{product.finalPrice.toLocaleString('fa-IR')} <span className="text-red-500 mr-1">تومان</span>
									</td>
								</tr>
						  ))
						: filter === 'latest'
						? latest?.reverse().map((product: ProductProps, index: number) => (
								<tr
									key={product._id}
									className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
									onClick={() => navigate(String(product.shortName))}
								>
									<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
									<td>
										<img
                    loading="lazy"
											className="w-32 h-32 object-contain mx-auto"
											src={`https://45.159.150.221:3000/${product?.cover}`}
											alt="تصویر محصول"
										/>
									</td>
									<td className="tracking-tighter sm:text-base">{product.productName}</td>
									<td>{product.category}</td>
									<td className="tracking-tighter">
										{product.finalPrice.toLocaleString('fa-IR')} <span className="text-red-500 mr-1">تومان</span>
									</td>
								</tr>
						  ))
						: all?.reverse().map((product: ProductProps, index: number) => (
								<tr
									key={product._id}
									className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
									onClick={() => navigate(String(product.shortName))}
								>
									<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
									<td>
										<img
                    loading="lazy"
											className="w-32 h-32 object-contain mx-auto"
											src={`https://45.159.150.221:3000/${product?.cover}`}
											alt="تصویر محصول"
										/>
									</td>
									<td className="tracking-tighter sm:text-base">{product.productName}</td>
									<td>{product.category}</td>
									<td className="tracking-tighter">
										{product.finalPrice.toLocaleString('fa-IR')} <span className="text-red-500 mr-1">تومان</span>
									</td>
								</tr>
						  ))}
				</tbody>
			</table>
		</section>
	);
};

// exports
export default AdminProducts;
