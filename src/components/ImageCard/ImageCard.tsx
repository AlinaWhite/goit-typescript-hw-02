import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={styles.card}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;
