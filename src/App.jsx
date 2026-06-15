import "./App.css";
import Add from "./components/add";
import Table from "./components/table";
import ExpenseData from "./components/expenseData";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses' ,ExpenseData);
  const [data, setData] = useLocalStorage('data',{
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId',"");
  

  return (
    <main>
      <div className="heading">Track Your Expense</div>
      <div className="main">
        <Add
          setExpenses={setExpenses}
          data={data}
          setData={setData}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        ></Add>
        <Table
          setExpenses={setExpenses}
          expenses={expenses}
          setData={setData}
          setEditingRowId={setEditingRowId}
        ></Table>
      </div>
      <footer style={{ height: "60px" }}></footer>
    </main>
  );
}

export default App;
