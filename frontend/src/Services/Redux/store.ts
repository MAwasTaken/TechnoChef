// redux
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// reducers
import Search from './Slices/Search';
import Category from './Slices/Category';

// store
export const store = configureStore({
	reducer: {
		search: Search,
		category: Category
	}
});

// types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// exports
export default store;
