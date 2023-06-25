import React from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({ isOpen, handleClose, children  }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;