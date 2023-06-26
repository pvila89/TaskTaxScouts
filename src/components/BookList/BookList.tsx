import React from "react";
import { useSelector } from "react-redux";
import { selectBooks, selectBooksStatus } from "../../store/books";
import { selectQuery } from "../../store/search";
import BookCard from "../BookCard/BookCard";
import { ArrowContainer, BooksListContainer, Spinner } from "./BookList.styles";

const BooksList: React.FC = () => {
  const books = useSelector(selectBooks);
  const statusBooks = useSelector(selectBooksStatus);
  const query = useSelector(selectQuery);

  if (query === "") return;

  return (
    <ArrowContainer data-testid="books-list">
      <BooksListContainer>
        {(statusBooks === "loading" || books.length === 0) && (
          <Spinner data-testid="spinner" />
        )}
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
        {statusBooks === "failed" && (
          <h4>This feature is not available right now</h4>
        )}
      </BooksListContainer>
    </ArrowContainer>
  );
};

export default BooksList;
