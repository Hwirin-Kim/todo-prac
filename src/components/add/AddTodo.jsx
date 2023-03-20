import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import uuid from "react-uuid";
export default function AddTodo({ todoList, setTodoList }) {
  const [form, setForm] = useState({
    id: "",
    todo: "",
    isChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.todo.trim() === "") {
      return;
    }
    setTodoList([...todoList, form]);
    setForm({ ...form, todo: "" });
  };
  const onChangeHandler = (e) => {
    setForm({ ...form, todo: e.target.value, id: uuid() });
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.wrapper}>
        <input type="text" onChange={onChangeHandler} value={form.todo} />
        <button>Add</button>
      </div>
    </form>
  );
}
