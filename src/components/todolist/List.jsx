import React, { useState } from "react";
import Todo from "./Todo";

export default function List({ todoList, setTodoList }) {
  return (
    <>
      {todoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}
          />
        );
      })}
    </>
  );
}
