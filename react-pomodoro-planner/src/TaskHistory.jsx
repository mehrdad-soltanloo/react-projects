import { useState, useEffect } from "react";

const TaskHistory = () => {
  const [yesterdayTasks, setYesterdayTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("yesterdayTasks")) || [];
  });
  useEffect(() => {
    // // Assuming yesterdayTasks is stored in localStorage at the end of the day
    const storedTasks = localStorage.getItem("yesterdayTasks");
    if (storedTasks) {
      setYesterdayTasks(JSON.parse(storedTasks));
    }
  }, []);
  return (
    <div>
      <h2>yesterday tasks</h2>
      <ul>
        {yesterdayTasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskHistory;
