import React from "react";
import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const Todolist = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItems id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default Todolist;
