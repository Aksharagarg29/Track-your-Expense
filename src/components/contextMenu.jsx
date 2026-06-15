import React from "react";

const contextMenu = ({
  expenses,
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setData,
  setEditingRowId
}) => {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setEditingRowId(rowId)
          const foundEx = expenses.find((ex) => ex.id === rowId);
          setData(foundEx);

          setMenuPosition({});
        
        }}
      >
        Edit
      </div>
      <hr />
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default contextMenu;
