import React, { useState } from "react";

export const useFilter = (dataList, callback) => {
  const [query, setQuery] = useState("");
  const filteredData = dataList.filter((data) => {
    if (query === "" || query === "all") {
      return true; 
    }
    return callback(data).toLowerCase().includes(query);
  });
  return [filteredData, setQuery];
};
