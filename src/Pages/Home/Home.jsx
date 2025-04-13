import React from "react";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const addTaskClient = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };
  return (
    <div className="bg-emerald-500 h-screen flex justify-center items-center">
      <div className="bg-blue-950 p-8 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-1/3 border-2 border-black">
        <div className=" py-2 flex justify-center items-center flex-col">
          <div className="font-custom text-5xl font-normal not-italic text-center mb-2 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            The best Todo List
          </div>
          <div className="mx-4 flex justify-center items-center gap-2 ">
            <input
              type="text"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" border-2  border-transparent rounded-md px-2 py-1   focus:outline-none focus:border-blue-500 bg-gray-600"
            />
            <button
              onClick={addTaskClient}
              className="bg-blue-500 px-6 py-1 h-full rounded-md border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 "
            >
              Add
            </button>
          </div>
        </div>

        <div className=" overflow-y-auto max-h-48">
          {list.map((item, index) => (
            <p
              className=" border border-blue-500 my-2 rounded-md px-2  py-2 backdrop-blur bg-white/15"
              key={index}
            >
              <input type="checkbox" id={`item-${index}`} />
              <label className="px-2" htmlFor={`item-${index}`}>
                {item}
              </label>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
