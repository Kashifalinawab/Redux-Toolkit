import React from "react";

import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const Inc = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const Dec = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const AddBy = () => {
    dispatch({
      type: "ADD_BY",
      payload: 10,
    });
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => Inc()}>Increment</button>
      <button onClick={() => Dec()}>Deccrement</button>
      <button onClick={() => AddBy()}>Add - 10</button>
    </div>
  );
}

export default Counter;
