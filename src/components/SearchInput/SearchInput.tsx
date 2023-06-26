import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getBooksAsync } from "../../store/books";
import { setQuery } from "../../store/search";
import { SearchInputContainer } from "./SearchInput.styles";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  const debouncedSearch = debounce(
    (query) => dispatch(getBooksAsync(query)),
    500
  );

  useEffect(() => {
    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    dispatch(setQuery(event.target.value));
  };

  return (
    <SearchInputContainer
      data-testid="search-input"
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
