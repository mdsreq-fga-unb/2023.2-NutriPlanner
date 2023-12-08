import React, { useState } from 'react';
import './SearchStyle.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Você buscou por: ', searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="input-search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar paciente"
      />
    </div>
  );
};

export default Search;

