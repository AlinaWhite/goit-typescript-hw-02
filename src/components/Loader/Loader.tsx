import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <Circles color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
