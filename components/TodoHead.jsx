import { useState } from "react";

function TodoHead({ newItemHandler }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  let handleFun = () => {
    {
      if (todoName === "") {
        alert("enter the name");
      } else if (todoDate === "") {
        alert("enter the date");
      } else {
        newItemHandler(todoName, todoDate);
        setTodoDate("");
        setTodoName("");
      }
    }
  };

  return (
    <div className="container text-center todo_container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your TODO Here"
            className="input_cls1"
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(event) => setTodoDate(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my_btn"
            onClick={() => handleFun()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoHead;
