import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from 'tw-elements-react';

const Modal = ({ show, item, onClose }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  if (!showModal || !item || !item.volumeInfo) {
    return null;
  }

  const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <TERipple rippleColor="white">
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              <h1>{item.volumeInfo.title}</h1>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={onClose}
                aria-label="Close Modal"
              >
                {/* <FontAwesomeIcon icon="fas fa-window-close" /> */}
              </button>
            </TEModalHeader>
            <TEModalBody>
              <div className="inner-box">
                <img src={thumbnail} alt="" />
                <div className="info">
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
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={onClose}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={onClose}
                >
                  Understood
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </TERipple>
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
