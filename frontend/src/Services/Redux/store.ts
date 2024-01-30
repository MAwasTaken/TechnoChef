// redux
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// reducers
import Search from './Slices/Search';
import Category from './Slices/Category';
import User from './Slices/User';
import AdminShownProducts from './Slices/AdminShownProducts';
import PriceSort from './Slices/PriceSort';

// store
export const store = configureStore({
	reducer: {
		search: Search,
		category: Category,
		priceSort: PriceSort,
		user: User,
		adminShownProducts: AdminShownProducts
	}
});

// types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// exports
export default store;
