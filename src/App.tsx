import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

const ACCESS_KEY = 'HujNjx7-p90sqcG2YLwLF86CH_CGeXe5XbGlitYNWLc';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!searchQuery) return;
    fetchImages(searchQuery, page);
  }, [searchQuery, page]);

 const fetchImages = async (query: string, page: number) => {
  setLoading(true);
  setError(null);
  try {
    // Явна типізація відповіді
    const response = await axios.get<{ results: Image[] }>(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      }
    );
    const newImages: Image[] = response.data.results;
    setImages(prevImages => (page === 1 ? newImages : [...prevImages, ...newImages]));
  } catch (err) {
    setError('Error fetching images. Please try again.');
  } finally {
    setLoading(false);
  }
};


  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
