import { configureStore } from "@reduxjs/toolkit";
import allocationsReducer from "../src/reducers/allocationsReducer";

export default configureStore({
	reducer: { allocations: allocationsReducer },
});
