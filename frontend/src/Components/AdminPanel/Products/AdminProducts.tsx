// icons
import { BsBoxSeam, BsPlusLg } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

// react query
import useAllProducts from '../../../Hooks/useAllProducts';
import { ProductProps } from '../../../Types/Products.types';

const AdminProducts = () => {
	// navigator
	const navigate = useNavigate();

	// GET all product from react query
	const { data } = useAllProducts();

	data ? console.log(data) : '';

	// tsx
	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<BsBoxSeam className="text-red-500" />
					محصولات
				</span>
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
					{data?.reverse().map((product: ProductProps, index: number) => (
						<tr
							key={product._id}
							className="border-b border-DarkYellow hover:bg-Info/20 transition-all duration-500 cursor-pointer"
							onClick={() => navigate(String(product.shortName))}
						>
							<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
							<td>
								<img
									className="w-32 max-h-32 object-contain mx-auto"
									src={`https://45.159.150.221:3000/api/${
										product.images ? product.images[0] : undefined
									}`}
									alt="تصویر محصول"
								/>
							</td>
							<td className="tracking-tighter sm:text-base">{product.productName}</td>
							<td>{product.category}</td>
							<td className="tracking-tighter">
								{product.finalPrice} <span className="text-red-500 mr-1">تومان</span>
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
