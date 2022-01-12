import React from "react";
import SingleTask from "./SingleTask";

const Tasks = ({ data, deleteFunc, remind }) => {
  return (
    <div className="task">
      {data.map((task) => {
        return (
          <SingleTask
            data={task}
            key={task.id}
            deleteFunc={() => deleteFunc(task.id)}
            remind={remind}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
