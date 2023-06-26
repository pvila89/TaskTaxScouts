import Book from '../entities/Book';

export const fetchBooks = async (query: string): Promise<Book[]> => {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
  const data = await response.json();
  return data.docs;
};