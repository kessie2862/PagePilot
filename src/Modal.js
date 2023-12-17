import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, item, onClose }) => {
  if (!show || !item || !item.volumeInfo) {
    return null;
  }

  const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button
            type="button"
            className="close"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <i className="fas fa-times" />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button type="button">More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
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
