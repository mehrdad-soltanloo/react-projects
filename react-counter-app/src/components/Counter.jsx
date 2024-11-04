const Counter = ({ counter, setCounter }) => {
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => {
    if (counter === 0) return;
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <div className="btn-container">
        <button onClick={increment} className="btn-control">
          +
        </button>
        <button onClick={decrement} className="btn-control">
          -
        </button>
        <button onClick={reset} className="btn-control reset">
          reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
