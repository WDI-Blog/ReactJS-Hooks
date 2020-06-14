import React, { useState } from "react";
import Header from "./components/layout/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "HTML&CSS" },
    { id: 2, title: "Bootstrap 4" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "ReactJS" },
    { id: 5, title: "Wordpress" },
  ]);
  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    const newTodo = {
      id: todoList.length + 100,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <React.Fragment>
      <Header />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </React.Fragment>
  );
}
export default App;
