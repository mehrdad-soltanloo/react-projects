import { useState } from "react";
import AddEntryForm from "./AddEntryForm";
import EntriesList from "./EntriesList";
import Summary from "./Summary";
const BudgetTracker = () => {
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([
    "Groceries",
    "Rent",
    "Utilities",
    "Entertainment",
    "Transport",
  ]);

  const handleDeleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };
  const handleAddEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };
  return (
    <div className="budget-tracker">
      <AddEntryForm onAddEntry={handleAddEntry} categories={categories} />
      <EntriesList entries={entries} onDeleteEntry={handleDeleteEntry} />
      <Summary entries={entries} />
    </div>
  );
};
export default BudgetTracker;
