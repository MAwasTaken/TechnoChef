// redux
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// reducers
import Search from './Slices/Search';
import Category from './Slices/Category';
import User from './Slices/User';

// store
export const store = configureStore({
	reducer: {
		search: Search,
		category: Category,
		user: User
	}
});

// types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// exports
export default store;
