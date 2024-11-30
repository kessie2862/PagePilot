'use client';

import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import './styles/card.scss';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <div className="new">
      {book.map((item) => {
        const { title } = item.volumeInfo;
        const { authors } = item.volumeInfo;
        const { pageCount } = item.volumeInfo;
        const { publisher } = item.volumeInfo;
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

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
              <div className="card-container">
                <Image src={thumbnail} width={100} height={100} alt="Testing" />
                <div>
                  <h2 className="italic font-medium">{title}</h2>
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
    })
  ).isRequired,
};

export default Card;
