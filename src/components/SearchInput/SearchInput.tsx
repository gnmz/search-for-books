import React, { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./SearchInput.css";

const SearchInput: FC = () => {
  const { inputValue, sort,category } = useTypedSelector((state) => state.books);
  const { inputValueHandler, getData } = useAction();

  const history = useHistory();
  const location = useLocation();

  const searchDataHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      let value = inputValue;
      localStorage.setItem("input", value);
      getData(value, 30, category, sort);
      if (location.pathname !== "/") {
        history.push("/");
      }
    }
  };

  const searchData = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
    if (inputValue.length > 0) {
      getData(inputValue, 30,  category, sort);
    } else if (localStorage.input) {
      getData(localStorage.input, 30,  category, sort);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        value={
          inputValue === "" && localStorage.input
            ? localStorage.input
            : inputValue
        }
        onChange={inputValueHandler}
        onKeyDown={searchDataHandler}
        placeholder="Search..."
      />

      <button
        className="search-btn"
        onClick={searchData}
        disabled={inputValue.length < 1 && !localStorage.input}
      >
        &#128269;
      </button>
    </div>
  );
};

export default SearchInput;
