// import { createStore } from "redux";
// import { reducer } from "./reducers";

// export const store = createStore(reducer);

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export const store = configureStore({
  reducer: reducer,
});
