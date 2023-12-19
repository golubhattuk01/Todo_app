import SingleElement from "./SingleElement";
function TodoLoad({ list1, DltTodo }) {
  return (
    <div className="container text-center todo_container">
      {list1.map((i) => (
        <SingleElement obj={i} DltTodo={DltTodo} key={i.task}></SingleElement>
      ))}
    </div>
  );
}
export default TodoLoad;
