import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
  };
  onClose: () => void;
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
