import React from "react";
import { FaTimes } from "react-icons/fa";

const SingleTask = ({ data, deleteFunc, remind }) => {
  return (
    <div
      className={`col ${data.reminder ? "activeReminder" : ""}`}
      onDoubleClick={() => remind(data.id)}
    >
      <div className="eachTask">
        <h3>{data.text}</h3>
        <p>{data.day}</p>
        <p>{data.time}</p>
      </div>
      <FaTimes
        onClick={deleteFunc}
        style={{ color: "red", fontSize: "1.3rem", cursor: "pointer" }}
      />
    </div>
  );
};

export default SingleTask;
