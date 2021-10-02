import React, { FC } from "react";
import FilterForm from "../FilterForm/FilterForm";
import SearchInput from "../SearchInput/SearchInput";

import './AppHeader.css'

const AppHeader: FC = () => {

  return (
    <div className="app-header">
      <h1 className="app-title">Search for books</h1>
      <SearchInput />
      <FilterForm />
    </div>
  );
};

export default AppHeader;
