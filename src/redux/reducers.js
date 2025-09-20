import { PLUS, MINUS } from './constants';

const initialState = {
  amount: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    case MINUS:
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    default:
      return state;
  }
};
