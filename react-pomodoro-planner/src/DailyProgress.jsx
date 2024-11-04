import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DailyProgress = () => {
  const [completedFocusTime, setCompletedFocusTime] = useState(() => {
    return Number(localStorage.getItem("completedFocusTime") || 0);
  });

  const [yesterdayFocusTime, setYesterdayFocusTime] = useState(() => {
    return Number(localStorage.getItem("yesterdayFocusTime") || 0);
  });

  const calculateProgress = () => {
    const goal = 480; // 8 hours
    return (completedFocusTime / goal) * 100;
  };
  useEffect(() => {
    const today = new Date().toDateString();
    const lastSavedDate = localStorage.getItem("lastSavedDate");

    if (lastSavedDate !== today) {
      localStorage.setItem("yesterdayFocusTime", completedFocusTime);
      localStorage.setItem("lastSavedDate", today);
      setYesterdayFocusTime(completedFocusTime);
      setCompletedFocusTime(0);
    }
  }, [completedFocusTime]);

  return (
    <section>
      <h2>today focus progress</h2>
      <div style={{ width: 150, height: 150 }} className="custom-progress">
        <CircularProgressbar
          value={calculateProgress()}
          text={`${calculateProgress().toFixed(2)}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#030712",
            textColor: "#fff",
            pathColor: "#fff",
            textSize: "1.4rem",
            trailColor: "transparent",
          })}
        />
      </div>
      <div>
        <p className="body-text">
          {calculateProgress().toFixed(2)}% of daily goal (8 hours)
        </p>
        <p className="body-text">focus time today: {completedFocusTime} mins</p>
        <p className="body-text">
          focus time yesterday: {yesterdayFocusTime} mins
        </p>
      </div>
    </section>
  );
};
export default DailyProgress;
