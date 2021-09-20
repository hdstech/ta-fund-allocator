import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	total: 0,
	balance: 1000,
	funds: [
		{ name: "Fund A", percentage: 0, id: 1 },
		{ name: "Fund B", percentage: 0, id: 2 },
		{ name: "Fund C", percentage: 0, id: 3 },
		{ name: "Fund D", percentage: 0, id: 4 },
		{ name: "Fund E", percentage: 0, id: 5 },
	],
};

export const allocations = createSlice({
	name: "counter",
	initialState: {
		total: initialState.total,
		balance: initialState.balance,
		funds: initialState.funds,
	},
	reducers: {
		updatedFund: (state, { payload }) => {
			const newTotal = state.funds.reduce((prev, curr) => prev + curr.percentage, 0);
			state.funds[payload.idx - 1].percentage = payload.percentage;
			const remainingAmt = parseInt(1000 - newTotal * 1000).toFixed(2);
			if (remainingAmt < 0) {
				return;
			}
			state.total = parseFloat(newTotal.toFixed(2));
			state.balance = parseFloat((1000 - newTotal * 1000).toFixed(2));
		},
		getFunds: (state) => state.funds,
		getAll: (state) => state,
		reset: (state) => {
			return initialState;
		},
	},
});

export const { updatedFund, getFunds, getAll, reset } = allocations.actions;

export default allocations.reducer;
