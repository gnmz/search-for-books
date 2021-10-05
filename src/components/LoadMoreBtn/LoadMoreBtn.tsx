import React, { FC } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./LoadMoreBtn.css";

const LoadMoreBtn: FC = () => {
  const { maxResult, startIndex, inputValue, category, sort } =
    useTypedSelector((state) => state.books);
  const { setStartIndex, loadMore } = useAction();

  const oneMore = () => {
    loadMore(startIndex, maxResult, inputValue, category, sort);
    setStartIndex(startIndex + 30);
  };

  return (
    <button onClick={oneMore} className="load-more">
      load more
    </button>
  );
};

export default LoadMoreBtn;
