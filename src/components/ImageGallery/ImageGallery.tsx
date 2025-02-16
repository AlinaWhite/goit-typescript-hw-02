import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  }[];
  onImageClick: (image: any) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (images.length === 0) return null;

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
