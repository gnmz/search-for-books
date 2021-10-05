import React, { FC } from "react";
import { Link } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./MainPage.css";

const MainPage: FC = () => {
  const { data, searchResult, isLoading, error } = useTypedSelector(
    (state) => state.books
  );
  
  interface IBook {
    id: string;
    volumeInfo: {
      categories: string[];
      title: string;
      imageLinks: {
        thumbnail: string | undefined;
      };
      authors: string[];
    };
  }


  if (error.length > 0) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Ничего не найдено</div>;
  }



  if (data) {
    return (
      <div className="main-page">
        {data.length > 0 ? (
          <p className="found-results">Found {searchResult} results</p>
        ) : null}
        <div className="books-list">
          {data.map((item: IBook, index) => (
            <Link
              key={item.id + index}
              to={`/${item.id}`}
              className="book-item-link"
            >
              <BookItem item={item} />
            </Link>
          ))}
        </div>
        {isLoading && <Loader />}
        {data.length > 0 && <LoadMoreBtn />}
      </div>
    );
  }
  return<div></div>
};

export default MainPage;
