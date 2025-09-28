// import { PLUS, MINUS } from './constants';

// export const plusAction = (payload = 1) => ({
//   type: PLUS,
//   payload
// });

// export const minusAction = (payload = 1) => ({
//   type: MINUS,
//   payload
// });

import { createAction } from '@reduxjs/toolkit';
import { PLUS, MINUS } from './constants';

export const plusAction = createAction(PLUS);
export const minusAction = createAction(MINUS);