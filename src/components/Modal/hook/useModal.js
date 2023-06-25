import { useState, useCallback } from 'react';
import Modal from "../Modal";
import ReactDOM from 'react-dom';

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [content, setContent] = useState(null);

  const openModal = useCallback((data) => {
    setIsOpen(true);
    setContent(data);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  const RenderModal = () => (
    isOpen && ReactDOM.createPortal(
      <Modal isOpen={isOpen} handleClose={closeModal}>
        {content}
      </Modal>,
      document.getElementById('modal-root')
    )
  );

  return { openModal, RenderModal, closeModal };
};

export default useModal;