// react
import { useNavigate } from 'react-router-dom';

// icons
import { GoComment } from 'react-icons/go';

// components
import ProductDetailsCmBox from './ProductDetailsCmBox';

// icons
import { BsPlusLg } from 'react-icons/bs';

// redux
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ProductDetailsComments: React.FC = () => {
	// GET user details from redux
	const user = useSelector((state: any) => state.user);

	// navigator
	const navigate = useNavigate();

	// is adding new comment
	const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

	// create new comment
	const createNewCommentHandler = () => {
		user._id
			? setIsAddingComment(true)
			: toast.error('برای افزودن نظر ابتدا باید وارد شوید ❌', {
					onClose: () => {
						// navigate to login page
						navigate('/login');
					}
			  });
	};

	// tsx
	return (
		<div className="md:container w-full mx-auto">
			<main className="flex w-full flex-col gap-x-2 md:gap-y-4 gap-y-1 items-center p-4 md:p-8 justify-center md:rounded-3xl bg-white shadow-md">
				{/* comment label */}
				<div className="flex justify-between w-full">
					<label htmlFor="" className="flex flex-row md:gap-x-3 gap-x-1 items-center text-lg">
						<GoComment className="text-orange-500 md:text-3xl text-sm" />
						<span className="font-Lalezar md:text-3xl text-sm tracking-wide">نظرات</span>
					</label>
					<button
						onClick={createNewCommentHandler}
						className="md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
					>
						<span className="hidden md:block">افزودن نظر جدید</span>
						<BsPlusLg className="text-red-500 w-5 h-5" />
					</button>
				</div>
				{/* divider */}
				<div className="border-t border-red-500 w-full"></div>
				{/* comment box */}
				{isAddingComment ? (
					<section>

          </section>
				) : (
					<span className="text-center w-full sm:w-1/2 font-bold xl:text-lg bg-slate-500 py-1 md:py-2.5 text-slate-100 rounded-md my-2 flex gap-x-5 items-center justify-center">
						هنوز نظری برای این محصول ثبت نشده است‌ !
					</span>
				)}
				<ProductDetailsCmBox />
				<ProductDetailsCmBox />
			</main>
		</div>
	);
};

export default ProductDetailsComments;
