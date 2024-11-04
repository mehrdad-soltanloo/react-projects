import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BudgetTracker from "./components/BudgetTracker.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <BudgetTracker />
      <Footer />
    </div>
  );
}

export default App;
