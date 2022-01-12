import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import NullItems from "./components/NullItems";
import AddTaskMenu from "./components/AddTaskMenu";
import { useState, useEffect } from "react";

const App = () => {
  // adding a new task
  const addTask = async (task) => {
    const command = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (command.status === 201) {
      const newData = await command.json();
      setData([...info, newData]);
      alert("Task Added");
    }
    // const id = new Date().getTime().toString();
    // const newTask = { id, ...task };
    // setData([...info, newTask]);
  };
  //deleting a task
  const deleteTask = async (id) => {
    const dd = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (dd.status === 200) {
      alert("Item deleted");
    }
    setData(info.filter((task) => task.id !== id));
  };
  //updating the reminder of a task
  const settingReminder = async (id) => {
    const single_ = await getSingleData(id);
    const updatedValue = { ...single_, reminder: !single_.reminder };

    const req_ = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    });

    const returnedData = await req_.json();
    setData(
      info.map((task) =>
        task.id === id ? { ...task, reminder: returnedData.reminder } : task
      )
    );
  };
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  const [info, setData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  //fetching data
  const url = "http://localhost:5000/data";
  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  };
  const getSingleData = async (id) => {
    const data = await fetch(`${url}/${id}`);
    const res = await data.json();

    return res;
  };
  //using useEffect to call the getData once to fetch the data
  useEffect(() => {
    const fetchTask = async () => {
      const readyData = await getData();
      setData(readyData);
    };
    fetchTask();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <Header
          title={"Task Manager"}
          addForm={toggleAddForm}
          addFormState={showAddForm}
        />
        {showAddForm && <AddTaskMenu addTask={addTask} />}
        <div className="holder">
          {info.length > 0 ? (
            <Tasks
              data={info}
              deleteFunc={deleteTask}
              remind={settingReminder}
            />
          ) : (
            <NullItems />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
