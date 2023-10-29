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

interface UserItem {
	title: string;
	content: string;
}

interface UserProps {
	items: UserItem[];
}

const AdminUserBox: React.FC<UserProps> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return <section className="md:p-5 p-3 bg-red-300"></section>;
};

export default AdminUserBox;
