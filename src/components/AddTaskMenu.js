import React from "react";
import { useState } from "react";

const AddTaskMenu = ({ addTask }) => {
  const [text, setTask] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!text || !day) {
      alert("fill all fields");
    } else {
      addTask({ text, day, time, reminder });
      setDay("");
      setTask("");
      setReminder(false);
    }
  };
  return (
    <form className="form">
      <div className="formArea">
        <label htmlFor="">Task</label>
        <input
          type="text"
          id="task"
          value={text}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="formArea">
        <label htmlFor="day">Day</label>
        <input
          type="date"
          min="2022-01-01"
          name="day"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="formArea">
        <label htmlFor="time">Set Time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="formReminder">
        <label htmlFor="reminder"> Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          id="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" onClick={submit} />
    </form>
  );
};

export default AddTaskMenu;
