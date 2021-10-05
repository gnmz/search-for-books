import React, { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./SearchInput.css";

const SearchInput: FC = () => {
  const { inputValue, sort, category } = useTypedSelector(
    (state) => state.books
  );
  const { inputValueHandler, getData, setStartIndex, setSearchValue } =
    useAction();

  const history = useHistory();
  const location = useLocation();

  const searchDataHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter" && inputValue) {
      let value = inputValue;
      if (location.pathname !== "/") {
        history.push("/");
        setSearchValue(value);
        getData(value, 30, category, sort);
        setStartIndex(30);
      } else {
        setSearchValue(value);
        getData(value, 30, category, sort);
        setStartIndex(30);
      }
    }
  };

  const searchData = () => {
    if (location.pathname !== "/") {
      history.push("/");
      getData(inputValue, 30, category, sort);
      setStartIndex(30);
    } else {
      getData(inputValue, 30, category, sort);
      setStartIndex(30);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        value={inputValue}
        onChange={inputValueHandler}
        onKeyDown={searchDataHandler}
        placeholder="Search..."
      />

      <button
        className="search-btn"
        onClick={searchData}
        disabled={inputValue.length < 1}
      >
        &#128269;
      </button>
    </div>
  );
};

export default SearchInput;
