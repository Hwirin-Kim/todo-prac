import { useEffect, useState } from "react";
import AddTodo from "./components/add/AddTodo";
import Nav from "./components/nav/Nav";
import List from "./components/todolist/List";
import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
function App() {
  // const init = [
  //   {
  //     id: 1,
  //     todo: "공부하기",
  //     isChecked: false,
  //   },
  //   {
  //     id: 2,
  //     todo: "공부하기",
  //     isChecked: false,
  //   },
  // ];

  //초기값에 콜백함수 또는 다음과같이 선언자체를 넣어야하고, 함수를 넣어버리면 리렌더링시마다 계속 초기화 되어 무거운 함수라면 계속 다시 함수를 실행하게 되버림
  const [todoList, setTodoList] = useState(readLocalStorageTodoList);
  const filters = ["All", "Active", "Completed"];
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
    <DarkModeProvider>
      <div className="container">
        <Nav filters={filters} filter={filter} setFilter={setFilter} />
        <List
          todoList={todoList}
          filtered={filtered}
          setTodoList={setTodoList}
        />
        <AddTodo todoList={todoList} setTodoList={setTodoList} />
      </div>
    </DarkModeProvider>
  );
}

export default App;

function readLocalStorageTodoList() {
  console.log("hihi");
  const todoList = localStorage.getItem("todoList");
  return todoList ? JSON.parse(todoList) : [];
}
