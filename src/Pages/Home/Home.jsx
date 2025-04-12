import React from "react";
import "./Home.css";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const addTaskClient = (task) => {
    setList([...list, task]);
    setInputValue("");
  };

  return (
    <div className="home-container">
      <div className="box">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTaskClient}>Add</button>
        </div>
        <div className="todos">
          <h2>Task list</h2>
          <div className="todo-item">
            {list.map((item, index) => (
              <div className="todo-item" key={index}>
                <div>{item}</div>
                <div>X</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
