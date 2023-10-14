// redux
import { createSlice } from '@reduxjs/toolkit';

// init value
const initialState: string = '';

// page slice
const slice = createSlice({
	name: 'PriceSort',
	initialState,
	reducers: {
		descending: () => '-1',
		acceding: () => '1',
		reset: () => ''
	}
});

// exports
export const { descending, acceding, reset } = slice.actions;
export default slice.reducer;
