import React, { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";

import "./FilterForm.css";

const FilterForm: FC = () => {
  const [categoryList] = useState([
    { id: 1, value: "all" },
    { id: 2, value: "art" },
    { id: 3, value: "biography" },
    { id: 4, value: "computers" },
    { id: 5, value: "history" },
    { id: 6, value: "medical" },
    { id: 7, value: "poetry" },
  ]);

  const [sortList] = useState([
    { id: 1, value: "relevance" },
    { id: 2, value: "newest" },
  ]);

  const { sortOnChage, categoryOnChange } = useAction();

  return (
    <div className="filter-form">
      <label style={{ color: "#fff" }}>
        Categories
        <select onChange={categoryOnChange} defaultValue="all">
          {categoryList.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label style={{ color: "#fff" }}>
        Sorting by
        <select onChange={sortOnChage} defaultValue="relevance">
          {sortList.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterForm;
