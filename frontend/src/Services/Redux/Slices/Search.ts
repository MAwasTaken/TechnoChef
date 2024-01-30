// redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// init value
const initialState: string = '';

// page slice
const slice = createSlice({
	name: 'Search',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => action.payload
	}
});

// exports
export const { setSearchValue } = slice.actions;
export default slice.reducer;
