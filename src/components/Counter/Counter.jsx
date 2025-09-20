import { useDispatch, useSelector } from "react-redux";
import { plusAction, minusAction } from "../../redux/actions";
import { selectAmount } from "../../redux/selectors";

export const Counter = () => {
  const dispatch = useDispatch();
  const amount = useSelector(selectAmount);

  return (
    <div>
      <h1>{amount}</h1>
      <div>
        <button onClick={() => dispatch(minusAction())}>-</button>
        <button onClick={() => dispatch(plusAction())}>+</button>
      </div>
    </div>
  );
};
