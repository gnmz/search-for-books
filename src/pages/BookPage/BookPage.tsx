import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";
import NotFound from "../../components/NotFound/NotFound";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./BookPage.css";

const BookPage: FC = () => {
  const{ book,isLoading,error } = useTypedSelector(state => state.books)
  const { id } = useParams<{ id: string }>();
  const { getBook } = useAction();
  useEffect(() => {
    getBook(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const{volumeInfo}:any = book

  if(isLoading){
    return <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}><Loader /></div>
  }

  if(error.length > 0){
    return<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}><LoadError message={error} /></div>
  }

  if(volumeInfo){
    return <div className="book-page">
    <div className="book-page-img">
      {volumeInfo.imageLinks? <img src={volumeInfo && volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} className="book-page-img__item" /> : null }
      
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
 
  return <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}
  
  ><NotFound /></div>
  
};

export default BookPage;
