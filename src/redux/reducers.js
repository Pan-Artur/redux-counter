// import { PLUS, MINUS } from './constants';

// const initialState = {
//   amount: 0,
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS:
//       return {
//         ...state,
//         amount: state.amount + action.payload,
//       };
//     case MINUS:
//       return {
//         ...state,
//         amount: state.amount - action.payload,
//       };
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { plusAction, minusAction } from "./actions";

const initialState = {
  amount: 0,
};

// Застарілий приклад

// export const reducer = createReducer(initialState, {
//   [plusAction]: (state, action) => {
//     return {
//         ...state,
//         amount: state.amount + action.payload,
//       };
//   },
//   [minusAction]: (state, action) => {
//     return {
//         ...state,
//         amount: state.amount - action.payload,
//       };
//   },
// });

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(plusAction, (state, action) => ({
      ...state,
      amount: state.amount + action.payload,
    }))
    .addCase(minusAction, (state, action) => ({
      ...state,
      amount: state.amount - action.payload,
    }));
});
