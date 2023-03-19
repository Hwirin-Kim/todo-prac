import React, { useState } from "react";
import classes from "./AddTodo.module.css";
export default function AddTodo({ todoList, setTodoList }) {
  const [form, setForm] = useState({
    id: "",
    todo: "",
    isChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, form]);
  };
  const onChangeHandler = (e) => {
    setForm({ ...form, todo: e.target.value, id: Date().toString() });
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.wrapper}>
        <input type="text" onChange={onChangeHandler} />
        <button>Add</button>
      </div>
    </form>
  );
}
