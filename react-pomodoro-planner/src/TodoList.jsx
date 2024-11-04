import { nanoid } from "nanoid";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    if (newTaskText.trim() === "") return;
    const newTask = {
      id: nanoid(),
      text: newTaskText,
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setNewTaskText("");
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === taskId
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  return (
    <div className="todo-container">
      <h2>daily tasks</h2>
      <div className="new-task">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="enter a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-task-btn">
          add task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-list">
            <div className="added-task">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task.id)}
                className="task-checkbox"
              />
              <p
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
                className="task-text"
              >
                {task.text}
              </p>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-task-btn"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
