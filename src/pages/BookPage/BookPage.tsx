import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./BookPage.css";

const BookPage: FC = () => {
  const{ book } = useTypedSelector(state => state.books)
  const { id } = useParams<{ id: string }>();
  const { getBook } = useAction();
  useEffect(() => {
    getBook(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const{volumeInfo}:any = book

  if(volumeInfo){
    return <div className="book-page">
    <div className="book-page-img">
      <img src={volumeInfo && volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
    </div>
    <div className="book-page-info">
      <p className='book-page-categories'>{volumeInfo.categories}</p>
      <p className="book-page-title">{volumeInfo.title}</p>
      <p className="book-page-authors">{volumeInfo.authors}</p>
      <div className="book-page-description">
      <p className="book-page-description__text">{volumeInfo.description}</p>
      </div>
      
    </div>
  </div>;
  }
 
  return <div>Not found</div>
  
};

export default BookPage;
