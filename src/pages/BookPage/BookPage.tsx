import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./BookPage.css";

const BookPage: FC = () => {
  const{ book } = useTypedSelector(state => state.books)
  const { id } = useParams<{ id: string }>();
  const { getBook } = useAction();
  useEffect(() => {
    getBook(id)
  }, []);
 
  return <div className="book-page"><Link to='/'>назад</Link></div>;
};

export default BookPage;
