import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);

  return (
    <div>
      {book.map((item) => {
        const { title } = item.volumeInfo;
        const { authors } = item.volumeInfo;
        const { pageCount } = item.volumeInfo;
        const { publisher } = item.volumeInfo;
        const thumbnail = item.volumeInfo.imageLinks
          && item.volumeInfo.imageLinks.smallThumbnail;
        console.log(thumbnail);

        if (thumbnail !== undefined && title !== undefined) {
          return (
            <div
              key={item.id}
              className="card"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShow(true);
                  setItem(item);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img src={thumbnail} alt="" />
              <div>
                <h3 className="title">{title}</h3>
                <p>
                  Authors:
                  {authors}
                </p>
                <p>
                  Publisher:
                  {publisher}
                </p>
                <p>
                  Page Count:
                  {pageCount}
                </p>
              </div>
            </div>
          );
        }

        return null;
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      volumeInfo: PropTypes.shape({
        imageLinks: PropTypes.shape({
          smallThumbnail: PropTypes.string,
        }),
        title: PropTypes.string,
      }),
      saleInfo: PropTypes.shape({
        listPrice: PropTypes.shape({
          amount: PropTypes.number,
        }),
      }),
    }),
  ).isRequired,
};

export default Card;