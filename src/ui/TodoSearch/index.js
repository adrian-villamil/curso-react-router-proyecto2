import React, { useEffect } from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, searchParams, setSearchParams, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    let params;
    if (event.target.value) {
      params = {
        search: event.target.value,
      }
    } else {
      params = undefined;
    }
    setSearchParams(params);
  };

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    setSearchValue(search);
  }, [searchParams]);

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
