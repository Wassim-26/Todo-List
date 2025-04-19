import React, { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  async function fetchTasks() {
    const res = await fetch("http://localhost:5000/task");
    const tasks = await res.json();

    return tasks.data;
  }

  async function addTaskServer() {
    const res = await fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputValue,
        description: "description",
      }),
    });

    const newTask = await res.json();

    return newTask;
  }
  const addTaskClient = async () => {
    if (inputValue.trim() === "") return;
    await addTaskServer(inputValue);
    setList([
      ...list,
      {
        title: inputValue,
        description: "desc",
      },
    ]);
    setInputValue("");
  };

  useEffect(() => {
    async function fetchInitialData() {
      const tasks = await fetchTasks();
      setList(tasks);
    }

    fetchInitialData();
  }, []);

  return (
    <div className="bg-emerald-500 py-4 h-screen">
      <div className="max-w-5xl mx-auto px-4 justify-center items-center grid sm:grid-cols-1-py-6  gap-x-8 gap-y-4  md:grid-cols-2  lg:grid-cols-3">
        <div className="bg-blue-950 px-8 py-4 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  border-2 border-black">
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

          <div className=" overflow-y-auto max-h-32">
            {list.map((item, index) => (
              <p
                className=" border text-white border-blue-500 my-2 rounded-md px-2  py-2 backdrop-blur bg-white/15"
                key={index}
              >
                <input type="checkbox" id={`item-${index}`} />
                <label className="px-2" htmlFor={`item-${index}`}>
                  {item.title} - {item.description}
                </label>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
