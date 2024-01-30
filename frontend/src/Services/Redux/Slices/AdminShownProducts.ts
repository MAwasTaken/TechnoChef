// redux
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// init value
const initialState: string = 'all';

// page slice
const slice = createSlice({
	name: 'AdminShownProducts',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string>) => action.payload
	}
});

// exports
export const { setFilter } = slice.actions;
export default slice.reducer;
