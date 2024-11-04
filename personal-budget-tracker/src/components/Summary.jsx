const Summary = ({ entries }) => {
  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((acc, { amount }) => acc + amount, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((acc, { amount }) => acc + amount, 0);

  const categoryTotals = entries.reduce((acc, { category, amount }) => {
    if (!acc[category]) acc[category] = 0;
    acc[category] += amount;
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>monthly summary</h2>
      <p>total budget: {totalIncome}</p>
      <p>total expense: {totalExpense}</p>
      <h3>category breakdown</h3>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <p key={category}>
          {category}: {total}
        </p>
      ))}
    </div>
  );
};
export default Summary;
