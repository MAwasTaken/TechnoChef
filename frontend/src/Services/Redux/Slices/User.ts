// redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// init value
const initialState: {
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	postalCode?: string;
	nationalCode?: string;
	address?: string;
	emailVerified: boolean;
	createdAt: string;
	updatedAt: string;
} = {
	_id: '',
	username: '',
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
	postalCode: '',
	nationalCode: '',
	address: '',
	emailVerified: false,
	createdAt: '',
	updatedAt: ''
};

// page slice
const slice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<{
				_id: string;
				username: string;
				firstName: string;
				lastName: string;
				phoneNumber: string;
				createdAt: string;
				email: string;
				emailVerified: boolean;
				isAdmin: boolean;
				updatedAt: string;
			}>
		) => action.payload,
		clearUser: () => {
			return {
				_id: '',
				username: '',
				firstName: '',
				lastName: '',
				phoneNumber: '',
				email: '',
				postalCode: '',
				nationalCode: '',
				address: '',
				emailVerified: false,
				createdAt: '',
				updatedAt: ''
			};
		}
	}
});

// exports
export const { setUser, clearUser } = slice.actions;
export default slice.reducer;
