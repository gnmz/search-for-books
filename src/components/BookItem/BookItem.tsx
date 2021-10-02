import React, { FC } from "react";

import "./BookItem.css";

interface IBookItemProps {
  item: { volumeInfo: any | {} };
}

const BookItem: FC<IBookItemProps> = ({ item }) => {
  const { volumeInfo } = item;

  return (
    <div className="book-item">
      {volumeInfo.imageLinks ? (
        <img
          src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null}
          alt={volumeInfo.title}
          className="book-item-img"
        />
      ) : (
        <div className="book-item-img"></div>
      )}
      <div className="book-item-description">
      {volumeInfo.categories ?<p className="book-item-description_category">{volumeInfo.categories[0]}</p>:<p className="book-item-description_category"></p>}
      <p className='book-item-description_title'>{volumeInfo.title}</p>
      {volumeInfo.authors && <p className="book-item-description_author">{volumeInfo.authors[0]}</p>}
      </div>
    </div>
  );
};

export default BookItem;
