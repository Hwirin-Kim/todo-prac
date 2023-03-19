import { useState } from "react";
import AddTodo from "./components/add/AddTodo";
import Nav from "./components/nav/Nav";
import List from "./components/todolist/List";

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
  return (
    <div className="App">
      <Nav />
      <List todoList={todoList} setTodoList={setTodoList} />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
