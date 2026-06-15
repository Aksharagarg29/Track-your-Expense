import React, { use, useState } from "react";
import styles from "./add.module.css";
import expenseData from "./expenseData";

const add = ({ setExpenses, data, setData, editingRowId, setEditingRowId }) => {
  
  const form_handler = (e) => {
    e.preventDefault();
    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((ex) => {
          if (ex.id === editingRowId) {
            return { ...data, id: editingRowId };
          }
          return ex;
        })
      );
      setEditingRowId("");
      setData({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...data, id: crypto.randomUUID() },
    ]);

    setData({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form onSubmit={form_handler}>
      <div className={styles.field}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          required
          onChange={(e) => {
            setData((prevState) => ({ ...prevState, title: e.target.value }));
          }}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={data.category}
          required
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              category: e.target.value,
            }));
          }}
        >
          <option value="select" hidden>
            Select Category
          </option>
          <option value="Medicine">Medicine</option>
          <option value="Grocery">Grocery</option>
          <option value="Bills">Bills</option>
          <option value="Clothes">Clothes</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          required
          value={data.amount}
          onChange={(e) => {
            setData((prevState) => ({ ...prevState, amount: e.target.value }));
          }}
        />
      </div>

      <div className={styles.field}>
        <button style={{ height: "30px" }}>
          {editingRowId ? "SAVE" : "ADD"}
        </button>
      </div>
    </form>
  );
};

export default add;
