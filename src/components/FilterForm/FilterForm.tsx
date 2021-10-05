import React, { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import SelectOptions from "../SelectOptions/SelectOptions";

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
      <SelectOptions
        list={categoryList}
        change={categoryOnChange}
        title="Categories"
      />
      <SelectOptions list={sortList} change={sortOnChage} title="Sorting By" />
    </div>
  );
};

export default FilterForm;
