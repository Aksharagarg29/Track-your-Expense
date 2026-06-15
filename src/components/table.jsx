import React, { useState } from "react";
import styles from "./table.module.css";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./contextMenu";

const table = ({ expenses, setExpenses, setData, setEditingRowId }) => {
  let total = 0;
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        setExpenses={setExpenses}
        expenses={expenses}
        setData={setData}
        setEditingRowId={setEditingRowId}
      ></ContextMenu>
      <div className={styles.table}>
        <table onClick={() => setMenuPosition({})}>
          <tbody>
            <tr>
              <th>
                <div className={styles.sort}>
                  Title
                  <div
                    style={{ display: "flex" }}
                    className={styles.img_container}
                  >
                    <img
                      src="src\assets\up-long-solid-full.svg"
                      alt=""
                      height={15}
                      title="Ascending"
                      onClick={() => {
                        expenses.sort((a,b)=> a.title.localeCompare(b.title));
                      }}
                    />
                    <img
                      src="src\assets\down-long-solid-full.svg"
                      alt=""
                      height={15}
                      title="Descending"
                      onClick={() => {
                        expenses.sort((a,b)=> b.title.localeCompare(a.title));
                      }}
                    />
                  </div>
                </div>
              </th>
              <th>
                <select
                  name="itmes"
                  id="items"
                  className={styles.select_item}
                  onChange={(e) => {
                    setQuery(e.target.value.toLowerCase());
                  }}
                >
                  <option value="All">All</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Bills">Bills</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Education">Education</option>
                </select>
              </th>
              <th>
                <div className={styles.sort}>
                  Amount
                  <div
                    style={{ display: "flex" }}
                    className={styles.img_container}
                  >
                    <img
                      src="src\assets\up-long-solid-full.svg"
                      alt=""
                      height={15}
                      title="Ascending"
                      onClick={() => {
                        expenses.sort((a, b) => a.amount - b.amount);
                      }}
                    />
                    <img
                      src="src\assets\down-long-solid-full.svg"
                      alt=""
                      height={15}
                      title="Descending"
                      onClick={() => {
                        expenses.sort((a, b) => b.amount - a.amount);
                      }}
                    />
                  </div>
                </div>
              </th>
            </tr>

            {filteredData.map((ex) => {
              total = total + +ex.amount;
              return (
                <tr
                  key={ex.id}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setMenuPosition({
                      left: e.clientX + 4,
                      top: e.clientY + 4,
                    });
                    setRowId(ex.id);
                  }}
                >
                  <td>
                    {ex.title.charAt(0).toUpperCase() + ex.title.slice(1)}
                  </td>
                  <td>{ex.category}</td>
                  <td>₹{ex.amount}</td>
                </tr>
              );
            })}
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td></td>
              <td>₹{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default table;
