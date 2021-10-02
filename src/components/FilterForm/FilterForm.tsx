import React, { FC } from "react";

import "./FilterForm.css";

const FilterForm: FC = () => {
  return <div className="filter-form">
      <label style={{color:'#fff'}}>Categories
          <select>
              <option>all</option>
              <option>art</option>
              <option>biography</option>
              <option>computers</option>
              <option>history</option>
              <option>medical</option>
              <option>poetry</option>
          </select>
           </label>
      <label style={{color:'#fff'}}>Sorting by
        <select>
            <option>relevance</option>
            <option>newest</option>
            
        </select>
       </label>
  </div>;
};

export default FilterForm;
