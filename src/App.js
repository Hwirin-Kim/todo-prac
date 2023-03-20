import { useState } from "react";
import AddTodo from "./components/add/AddTodo";
import Nav from "./components/nav/Nav";
import List from "./components/todolist/List";
import "./App.css";
function App() {
  const init = [
    {
      id: 1,
      todo: "공부하기",
      isChecked: false,
    },
    {
      id: 2,
      todo: "공부하기",
      isChecked: false,
    },
  ];
  const [todoList, setTodoList] = useState(init);
  const filters = ["All", "Active", "Completed"];
  const [filter, setFilter] = useState("All");

  const filtering = (todoList, filter) => {
    if (filter === "All") {
      return todoList;
    } else if (filter === "Active") {
      return todoList.filter((todo) => todo.isChecked === false);
    } else if (filter === "Completed") {
      return todoList.filter((todo) => todo.isChecked === true);
    }
  };
  const filtered = filtering(todoList, filter);
  console.log(todoList);
  return (
    <div className="container">
      <Nav filters={filters} filter={filter} setFilter={setFilter} />
      <List todoList={todoList} filtered={filtered} setTodoList={setTodoList} />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
