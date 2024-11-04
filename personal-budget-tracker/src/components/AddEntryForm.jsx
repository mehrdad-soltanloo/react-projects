import { nanoid } from "nanoid";
import { useState } from "react";

const AddEntryForm = ({ onAddEntry, categories }) => {
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry({
      id: nanoid(),
      type: formData.type,
      category: formData.category,
      amount: parseFloat(formData.amount),
      date: formData.date,
    });

    setFormData({ type: "", category: "", amount: "", date: "" });
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
      <select
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Type</option>
        <option value="income">Budget</option>
        <option value="expense">Expense</option>
      </select>
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => {
          return (
            <option key={cat} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />
      <button type="submit">add entry</button>
    </form>
  );
};
export default AddEntryForm;
