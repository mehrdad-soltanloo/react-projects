import "./index.css";
import PomodoroTimer from "./PomodoroTimer";
import DailyProgress from "./DailyProgress";
import TodoList from "./TodoList";
import TaskHistory from "./TaskHistory";

function App() {
  return (
    <div className="app">
      {/* <h1>Time is Your Most Valuable Resource</h1> */}
      <div className="grid-container">
        <PomodoroTimer />
        <DailyProgress />

        <TodoList />
        <TaskHistory />
      </div>
    </div>
  );
}

export default App;
