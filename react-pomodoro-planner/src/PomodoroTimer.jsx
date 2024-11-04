import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PomodoroTimer = () => {
  const [isRunning, setIsRunning] = useState(() => {
    return localStorage.getItem("isRunning") === "true";
  });
  const [secondsLeft, setSecondsLeft] = useState(() => {
    return Number(localStorage.getItem("secondsLeft") || 1500);
  });
  const [isFocusSession, setIsFocusSession] = useState(() => {
    return localStorage.getItem("isFocusSession") === "true";
  });
  const [completedFocusTime, setCompletedFocusTime] = useState(() => {
    return Number(localStorage.getItem("completedFocusTime") || 0);
  });

  const totalSessionTime = isFocusSession ? 1500 : 300;
  useEffect(() => {
    localStorage.setItem("secondsLeft", secondsLeft);
    localStorage.setItem("isRunning", isRunning);
    localStorage.setItem("isFocusSession", isFocusSession);
  }, [secondsLeft, isRunning, isFocusSession]);

  useEffect(() => {
    const switchSession = () => {
      if (isFocusSession) {
        setCompletedFocusTime((prev) => prev + 25);
      }
      setIsFocusSession(!isFocusSession);
      setSecondsLeft(isFocusSession ? 300 : 1500);
    };
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 0) {
            switchSession();
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isFocusSession]);

  useEffect(() => {
    localStorage.setItem("completedFocusTime", completedFocusTime);
  }, [completedFocusTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(1500);
    setIsFocusSession(true);
    // setSecondsLeft(isFocusSession ? 1500 : 300);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  };
  const percentage =
    ((totalSessionTime - secondsLeft) / totalSessionTime) * 100;
  return (
    <section>
      <div>
        <h2>{isFocusSession ? "Focus Time" : "Break Time"}</h2>
        <div style={{ width: 200, height: 200 }} className="custom-progress">
          <CircularProgressbar
            value={percentage}
            text={formatTime(secondsLeft)}
            styles={buildStyles({
              textColor: "#fff",
              textSize: "2.4rem",
              pathColor: isFocusSession ? "#f54e42" : "#4caf50",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={startTimer} className="btn">
          start
        </button>
        <button onClick={pauseTimer} className="btn btn--pause">
          pause
        </button>
        <button onClick={resetTimer} className="btn">
          reset
        </button>
      </div>
      <p className="body-text">focus time today: {completedFocusTime} mins</p>
    </section>
  );
};
export default PomodoroTimer;
