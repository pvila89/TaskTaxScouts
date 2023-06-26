import React from "react";
import Book from "../../entities/Book";
import { BookCardContainer, BookImage } from "./BookCard.styles";
import getImageUrl from "../../services/image-url";
import getAmazonUrl from "../../services/amazon-url";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const amazonUrl = getAmazonUrl(book.id_amazon);

  return (
    <BookCardContainer data-testid="book-card">
      <BookImage src={getImageUrl(book.cover_i)} alt={book.title} />
      {amazonUrl !== "" && (
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
          <h4>{book.title}</h4>
        </a>
      )}
      {amazonUrl === "" && <h4>{book.title}</h4>}
      {book.author_name && <p>by {book.author_name.join(", ")}</p>}
      <p>First published: {book.first_publish_year}</p>
    </BookCardContainer>
  );
};

export default BookCard;
