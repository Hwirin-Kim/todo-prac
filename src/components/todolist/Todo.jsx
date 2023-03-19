import React from "react";
import classes from "./Todo.module.css";
export default function Todo({ todo, setTodoList, todoList }) {
  //체크 핸들러
  const onCheckHandler = (e) => {
    setTodoList(
      todoList.map((el) => {
        if (el.id === todo.id) {
          return { ...el, isChecked: e.target.checked };
        }
        return el;
      })
    );
  };

  //삭제
  const onClickHandler = () => {
    setTodoList(
      todoList.filter((el) => {
        if (el.id === todo.id) {
          return null;
        }
        return el;
      })
    );
  };
  return (
    <div className={classes.container}>
      <div>
        <input
          id={todo.id}
          type="checkbox"
          onChange={onCheckHandler}
          checked={todo.isChecked}
        />
        <label htmlFor={todo.id} className={todo.isChecked && classes.done}>
          {todo.todo}
        </label>
      </div>
      <span onClick={onClickHandler}>삭제</span>
    </div>
  );
}
