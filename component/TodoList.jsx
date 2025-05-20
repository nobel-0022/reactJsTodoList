import { useState } from "react";
import "./TodoList.css";
function TodoList() {
  let [arr, setArr] = useState([]);
  let [task, setTask] = useState("");
  let [error, setError] = useState("");
  let [isEdit, setIsEdit] = useState(false);
  let [editIndex, setEditIndex] = useState("");

  let handleTask = (e) => {
    setTask(e.target.value);
  };

  let handleSubmit = () => {
    if (task === "") {
      setError("Please enter your task");
    } else {
      let newArr = [...arr];
      newArr.push(task);
      setArr(newArr);
      setTask("");
    }
  };

  let handleEdit = (item, index) => {
    console.log(item);
    setTask(item);
    setIsEdit(true);
    setEditIndex(index);
  };

  let handleUpdate = () => {
    if (task == "") {
      setError("Please enter your task");
    } else {
      let newArr = [...arr];
      newArr[editIndex] = task;
      setArr(newArr);
      setTask("");
      setIsEdit(false);
    }
  };
  const handleDelete = () => {
    let newArr = [...arr];
    newArr.splice(editIndex, 1);
    setArr(newArr);
  };
  return (
    <>
      <h1>Todo List</h1>
      <input value={task} type="text" onChange={handleTask} />

      {isEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}

      <br />
      {error && <small>{error}</small>}

      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(item, index)}>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
