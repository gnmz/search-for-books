import React, { FC } from "react";

import './SelectOptions.css'

interface ISelectOptionsProps {
  list: any[];
  change: (e: any) => void;
  title: string;
}

const SelectOptions: FC<ISelectOptionsProps> = ({ list, change, title }) => {
  return (
    <div className="select-options">
      <p className="select-options-title">{title}</p>
      <select onChange={change} defaultValue={list[0].value} className="select-options-list">
        {list.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
