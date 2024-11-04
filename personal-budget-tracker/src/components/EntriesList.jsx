const EntriesList = ({ entries, onDeleteEntry }) => {
  return (
    <div className="entries-list">
      {entries.length ? (
        entries.map(({ id, type, category, amount, date }) => (
          <div className="entry-item" key={id}>
            <span>Type: {type === "budget" ? "Budget" : "Expense"}</span>{" "}
            {/* Updated label */}
            <span>Category: {category || "N/A"}</span>
            <span>Amount: {amount}</span>
            <span>Date: {date}</span>
            <button className="delete-button" onClick={() => onDeleteEntry(id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No entries to display</p>
      )}
    </div>
  );
};

export default EntriesList;
