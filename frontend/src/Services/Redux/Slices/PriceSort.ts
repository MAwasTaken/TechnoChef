// redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// init value
const initialState: string = '1';

// page slice
const slice = createSlice({
	name: 'PriceSort',
	initialState,
	reducers: {
		descending: () => '1',
		acceding: () => '-1'
	}
});

// exports
export const { descending, acceding } = slice.actions;
export default slice.reducer;
