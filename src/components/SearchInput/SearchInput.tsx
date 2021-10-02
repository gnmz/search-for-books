import React, { FC } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./SearchInput.css";

const SearchInput: FC = () => {
  const { inputValue } = useTypedSelector((state) => state.books);
  const { inputValueHandler, getData } = useAction();

  const searchDataHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      let value = inputValue;
      localStorage.setItem("input", value);
      getData(value, 30);
    }
  };

  const searchData = () => {
    if (inputValue.length > 0) {
      getData(inputValue, 30);
    } else if (localStorage.input){
      getData(localStorage.input, 30);
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
