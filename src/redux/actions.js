import { PLUS, MINUS } from './constants';

export const plusAction = (payload = 1) => ({
  type: PLUS,
  payload
});

export const minusAction = (payload = 1) => ({
  type: MINUS,
  payload
});