'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Modal = ({ show, item, onClose }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  if (!showModal || !item || !item.volumeInfo) {
    return null;
  }

  const thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setShowModal(false);
            onClose();
          }}
          aria-label="Close Modal"
        >
          ✕
        </button>
        <div
          className="max-h-[80vh] overflow-y-auto p-4 sm:p-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <h1
            id="modal-title"
            className="mb-4 text-lg font-semibold text-gray-800 sm:text-xl"
          >
            {item.volumeInfo.title}
          </h1>
          <div className="flex items-start gap-4">
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={item.volumeInfo.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}
            <div className="space-y-2">
              <h3 className="font-medium text-gray-700">
                {Array.isArray(item.volumeInfo.authors)
                  ? item.volumeInfo.authors.join(', ')
                  : item.volumeInfo.authors}
              </h3>
              <h4 className="text-sm text-gray-600">
                {item.volumeInfo.publisher}
                <span className="ml-2 text-gray-500">
                  ({item.volumeInfo.publishedDate})
                </span>
              </h4>
              <p className="mt-4 text-gray-600">
                {item.volumeInfo.description}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 flex justify-end gap-4">
          <a
            href={item.volumeInfo.previewLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      title: PropTypes.string,
      authors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      previewLink: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  item: null,
};

export default Modal;
