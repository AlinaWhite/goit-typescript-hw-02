import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search term.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search images and photos"
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
