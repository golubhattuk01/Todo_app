import css from "./SingleElement.module.css";

function SingleElement({ obj, DltTodo }) {
  return (
    <div className={`row ${css.rowcls1}`}>
      <div className="col-6">
        <h5>{obj.task}</h5>
      </div>
      <div className="col-4">
        <h5>{obj.dueDate}</h5>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger my_btn"
          onClick={() => DltTodo(obj.task)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default SingleElement;
