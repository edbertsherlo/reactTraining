import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { addToCart} from "./slices/cartInfoSlice";
// import decrement as desc from "./roundSlice";

// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
        <button
          onClick={() => dispatch(addToCart(
            {name : 'edbert',age: 33}
          ))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
