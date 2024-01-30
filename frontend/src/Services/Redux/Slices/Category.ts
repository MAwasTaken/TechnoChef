// redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// init value
const initialState: string = '';

// page slice
const slice = createSlice({
	name: 'Category',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => action.payload
	}
});

// exports
export const { setCategory } = slice.actions;
export default slice.reducer;
