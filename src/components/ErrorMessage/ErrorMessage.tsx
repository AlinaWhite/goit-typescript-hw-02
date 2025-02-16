import React from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={styles.error}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
