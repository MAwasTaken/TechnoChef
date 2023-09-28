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
	isAdmin: boolean;
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
	updatedAt: '',
	isAdmin: false
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
		) => action.payload
	}
});

// exports
export const { setUser } = slice.actions;
export default slice.reducer;
