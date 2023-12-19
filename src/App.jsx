import { useState } from "react";
import Heading from "../components/Heading";
import TodoHead from "../components/TodoHead";
import TodoLoad from "../components/TodoLoad";
import WelcomeMsg from "../components/WelcomeMsg";

function App() {
  const [list, setList] = useState([
    {
      task: "go to college",
      dueDate: "13/02/2023",
    },
    {
      task: "buy milk",
      dueDate: "13/02/2023",
    },
    {
      task: "mid sem exam",
      dueDate: "13/02/2023",
    },
  ]);

  let addNewTodo = (taskName, taskDate) => {
    let newList = [...list, { task: taskName, dueDate: taskDate }];
    setList(newList);
  };

  let DltTodo = (t_name) => {
    let newArr = list.filter((item) => item.task !== t_name);
    setList(newArr);
    // console.log(t_name);
  };

  return (
    <center className="todo-container">
      <Heading></Heading>
      <TodoHead newItemHandler={addNewTodo}></TodoHead>
      {list.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoLoad list1={list} DltTodo={DltTodo}></TodoLoad>
    </center>
  );
}
export default App;
