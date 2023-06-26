import React from "react";
import { useSelector } from "react-redux";
import { selectBooks, selectBooksStatus } from "../../store/books";
import { selectQuery } from "../../store/search";
import BookCard from "../BookCard/BookCard";
import { BooksListContainer, Spinner, ArrowContainer } from "./BookList.styles";

const BooksList: React.FC = () => {
  const books = useSelector(selectBooks);
  const status = useSelector(selectBooksStatus);
  const query = useSelector(selectQuery);

  if (query === "") return;

  return (
    <ArrowContainer>
      <BooksListContainer>
        {(status === "loading" || books.length === 0) && <Spinner />}
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </BooksListContainer>
    </ArrowContainer>
  );
};

export default BooksList;
