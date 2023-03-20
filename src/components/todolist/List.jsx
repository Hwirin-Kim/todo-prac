import React, { useState } from "react";
import Todo from "./Todo";
import classes from "./List.module.css";

export default function List({ todoList, setTodoList, filtered }) {
  return (
    <div className={classes.container}>
      {filtered.map((todo) => {
        return (
          <Todo
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}
