import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./todoSlice";

const TodoItems = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const deleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li>
      <div>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleComplete}
          ></input>
          {title}
        </span>
        <button onClick={deleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItems;
