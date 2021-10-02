import React, { FC } from "react";
import { Link } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./MainPage.css";

const MainPage: FC = () => {
  const { data, searchResult } = useTypedSelector((state) => state.books);
  
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

  console.log(data)

  return (
    <div className="main-page">
      <p className="found-results">Found {searchResult} results</p>
      <div className="books-list"
      >
        {data.map(
          (item: IBook) => (
            <Link key={item.id} to={`/${item.id}`} className='book-item-link'>
              <BookItem item={item} />
            </Link>
          )
        )}
      </div>
     
    </div>
  );
};

export default MainPage;
